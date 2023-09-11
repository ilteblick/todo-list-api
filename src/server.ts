import express from "express";
import cors from "cors";

import app from "./app";

import tasksRouter from "./routers/tasks";

var corsOptions = {
  origin: "http://127.0.0.1:5500",
};

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions))

app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log("Started on port: ", port);
});
