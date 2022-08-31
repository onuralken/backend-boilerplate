import cors from "cors";
import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";

import { errorHandler } from "./core/middlewares";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Hello World!");
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
