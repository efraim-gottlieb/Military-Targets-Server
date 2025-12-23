import express from "express";
import fs from "node:fs/promises";
import targetsRoutes from "./routes/targetsRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.set({
    "X-Server-Start-Time": new Date(),
  });
  next();
});

app.use((req, res, next) => {
  console.log(`req: [${req.method} - ${req.url}] | timwstamp: ${new Date()}`);
  next();
});

app.post("/targets", async (req, res) => {
  const targets = JSON.parse(
    await fs.readFile(process.cwd() + "/data/targets.json", "utf-8")
  ).targets;
  const target = {
    id: Math.random()
      .toString(36)
      .substring(2, 6 + 2),
    createdAt: new Date(),
  };
  Object.assign(target, req.body);
  targets.push(target);
  await fs.writeFile(
    process.cwd() + "/data/targets.json",
    JSON.stringify({ targets }, null, 2)
  );
  res.status(201).json({ sucsess: target });
});

app.post("/targets/:id", async (req, res) => {
  const targets = JSON.parse(
    await fs.readFile(process.cwd() + "/data/targets.json", "utf-8")
  ).targets;
  const result = targets.findIndex((target) => target.id === req.params.id);
  if (!result) {
    res.status(404).json({ message: `${req.params.id} not found` });
  }
  const updatedTarget = Object.assign(targets[result], req.body);
  targets[result] = updatedTarget;
  await fs.writeFile(
    process.cwd() + "/data/targets.json",
    JSON.stringify({ targets }, null, 2)
  );
  res.status(201).json({ sucsess: targets[result] });
});

app.use("/", targetsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
