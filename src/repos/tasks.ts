import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  name: string;
};

const repos: Array<Task> = [];

export function getAll(): Array<Task> {
  return repos;
}

export function createTask(newTask: Omit<Task, "id">): Task {
  const id = uuidv4();
  const task: Task = {
    id,
    ...newTask,
  };
  repos.push(task);
  return task;
}

export function editTask(id: string, editedTask: Omit<Task, "id">) {
  const index = repos.findIndex((x) => x.id === id);
  if (index !== -1) {
    repos[index] = {
      id,
      ...editedTask,
    };
  } else {
    throw new Error(`Task with id = ${id} not found`);
  }
}

export function deleteTask(id: string) {
  const index = repos.findIndex((x) => x.id === id);
  if (index !== -1) {
    repos.splice(index, 1);
  } else {
    throw new Error(`Task with id = ${id} not found`);
  }
}
