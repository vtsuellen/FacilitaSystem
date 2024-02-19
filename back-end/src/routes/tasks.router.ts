import express from 'express';
import TasksController from '../controllers/tasks.controller';
import { validateTaskData, validateTaskId } from '../middlewares/tasks';

const tasks = express.Router();
const tasksController = new TasksController();

tasks.post('/tasks', validateTaskData, (req, res, next) =>
  tasksController.createTask(req, res, next)
);
tasks.get('/tasks', (req, res, next) =>
  tasksController.getAllTasks(req, res, next)
);
tasks.put('/tasks/:id', validateTaskId, (req, res, next) =>
  tasksController.updateTask(req, res, next)
);
tasks.delete('/tasks/:id', validateTaskId, (req, res, next) =>
  tasksController.deleteTask(req, res, next)
);

export default tasks;
