import { Request, Response } from "express";

import Task from "../models/user";
import config from "../config/config";
export const allTasks = async (req: Request, res: Response) => {
  Task.find().then(
    (task) => {
      res.send({ task });
    },
    (e) => {
      res.status(400).send(e);
    }
  );
};

export const addTask = async (req: Request, res: Response) => {
  if (!req.body.task) {
    return res.status(400).json({ msg: "Por favor manda la tarea" });
  }
  const task = await Task.findOne({
    task: req.body.task,
  });
  console.log(task);
  if (task) {
    res.status(400).json({
      msg: "La tarea ya existe",
    });
  }

  const newTask = new Task({
    task: req.body.task,
    done: false,
  });
  await newTask.save();

  return res.status(201).json(newTask);
};

export const byeTask = async (req: Request, res: Response) => {
  if (!req.body.name) {
    return res.status(400).json({ msg: "Por favor manda la tarea a eliminar" });
  }
  Task.findOneAndRemove({
    task: req.body.name,
  })
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send({ task });
    })
    .catch((e) => {
      res.status(400).send();
    });
};

export const modifTask = async (req: Request, res: Response) => {
  Task.findOneAndUpdate({ task: req.body.task }, req.body.task, {
    new: true,
  })
    .then((task) => {
      if (!task) {
        return res.status(404).send({ msg: "No se encontro dicha tarea" });
      } else {
        return res.status(200).send(task);
      }
    })
    .catch((e) => {
      res.status(400).send();
    });
};
