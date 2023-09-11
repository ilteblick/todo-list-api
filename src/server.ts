import express from 'express'

import app from "./app";

import tasksRouter from "./routers/tasks";

const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log("Started on port: ", port);
});
