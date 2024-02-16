import express from 'express';
import TasksController  from '../controllers/tasks.controller';

const tasks = express.Router();
const tasksController = new TasksController();

tasks.post('/tasks', (req, res) => tasksController.createTask(req,res));

export default tasks;