import express from "express";
import targetsRoutes from "./routes/targetsRoutes.js";
import { health, msg, welcome } from "./midllewares/index.js";
import dotenv from "dotenv";
import path from "path";

const app = express();
const port = 3000;

app.use(express.json());

dotenv.config({path: ".env"})
console.log(process.env.port)

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
app.get("/", welcome);
app.get("/message", msg);
app.get("/health", health);
app.use("/targets", targetsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
