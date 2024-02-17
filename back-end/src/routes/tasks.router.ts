import express from 'express';
import TasksController  from '../controllers/tasks.controller';
import { validateTaskData, validateTaskId} from '../middlewares/tasks';

const tasks = express.Router();
const tasksController = new TasksController();

tasks.post('/tasks', validateTaskData, (req, res) => tasksController.createTask(req,res));
tasks.get('/tasks', (req, res) => tasksController.getAllTasks(req,res));
tasks.put('/tasks/:id', validateTaskId ,(req, res) => tasksController.updateTask(req,res));
tasks.delete('/tasks/:id', validateTaskId, (req, res) => tasksController.deleteTask(req,res));

export default tasks;