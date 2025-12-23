import express from "express";
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

app.use("/", targetsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
