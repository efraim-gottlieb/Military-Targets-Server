import { time } from "console";
import express from "express";
import fs from "node:fs/promises";

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`req: [${req.method} - ${req.url}]`);
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Military Targets Server",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  const timeStamp = Date.now();
  res.json({ status: "ok", serverTime: timeStamp });
  console.log("health check");
});

app.get("/message", (req, res) => {
  if (req.headers["client-unit"] === "Golani") {
    res.json({
      unit: "Golani",
      message: "briefing delivered",
    });
  } else {
    res
      .status(400)
      .json({ message: `${req.headers["client-unit"]} unit not found` });
  }
});

app.get("/targets/:id", async (req, res) => {
  const targets = JSON.parse(
    await fs.readFile(process.cwd() + "/data/targets.json", "utf-8")
  );
  const result = targets.targets.find((target) => target.id === req.params.id);
  if (!result) {
    res.status(404).json({ message: `${req.params.id} not found` });
  }
  res.json(result);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

