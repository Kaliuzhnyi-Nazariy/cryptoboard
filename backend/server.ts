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
    res.sendFile(
      path.resolve(__dirname, "../frontend/dist/server/app/index.html")
    );
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
