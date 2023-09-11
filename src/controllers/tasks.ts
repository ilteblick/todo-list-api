import { Request, Response } from "express";

import * as tasksRepo from "../repos/tasks";

export const getTasks = (req: Request, res: Response) => {
  const repos = tasksRepo.getAll();
  res.json(repos);
};

export const createTask = (req: Request, res: Response) => {
  const newTask = tasksRepo.createTask(req.body);
  res.json(newTask);
};

export const editTask = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    tasksRepo.editTask(id, req.body);
    res.sendStatus(200);
  } catch (e) {
    console.error(`Error: ${e}`);
    res.sendStatus(404);
  }
};

export const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      tasksRepo.deleteTask(id);
      res.sendStatus(200);
    } catch (e) {
      console.error(`Error: ${e}`);
      res.sendStatus(404);
    }
  };
