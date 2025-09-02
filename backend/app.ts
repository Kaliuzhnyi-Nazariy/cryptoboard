import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import authRoute from "./route/auth";
import userRoute from "./route/user";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/user", userRoute);

// app.use("*", (err: Error, req: Request, res: Response, next: NextFunction) => {
//   const status = (err as any).status || 500;
//   const message = err.message || "Server Error";

//   res.status(status).json({ message });
// });

export default app;
