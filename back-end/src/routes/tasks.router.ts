import express from 'express';
import TasksController  from '../controllers/tasks.controller';

const tasks = express.Router();
const tasksController = new TasksController();

tasks.post('/tasks', (req, res) => tasksController.createTask(req,res));
tasks.get('/tasks', (req, res) => tasksController.getAllTasks(req,res));
tasks.put('/tasks', (req, res) => tasksController.updateTask(req,res));

export default tasks;