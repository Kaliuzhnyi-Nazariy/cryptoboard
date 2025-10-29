import dotenv from "dotenv";
import express from "express";
import path from "path";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

const { PORT, DB_HOST } = process.env;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.all("/{*any}", (req, res) => {
    if (req.path.startsWith("/api")) {
      // Let API routes handle it
      return res.status(404).json({ message: "API route not found" });
    }
    res.sendFile(path.resolve(__dirname, "../frontend/dist"));
  });
}

mongoose
  .connect(DB_HOST as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend is running on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
