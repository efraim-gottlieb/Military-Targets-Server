import { time } from "console";
import express from "express";

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
  const timeStamp = Date.now()
  res.json({ status: "ok", serverTime: timeStamp});
  console.log('health check')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
