import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import TaskService from '../services/tasks.service';

export default class TaskController {
  constructor(private taskService = new TaskService()) {}

  public async createTask(req: Request, res: Response) {
    const { title, status, priority } = req.body;
    const taskData = { title, status, priority };

    const newTask = await this.taskService.createTask(taskData);

    if (newTask) {
      return res.status(statusCode.CREATED).json(newTask);
    } else {
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Erro ao adicionar tarefa' });
    }
  }

  public async getAllTasks(req: Request, res: Response) {
    const allTasks = await this.taskService.getAllTasks();

    return res.status(statusCode.OK).json(allTasks);
  }

  public async updateTask(req: Request, res: Response) {
    const { title, status, priority } = req.body;
    const { id } = req.params;
    const taskData = {id: Number(id), title, status, priority };

    const updatedTask = await this.taskService.updateTask(taskData);

    if (updatedTask) {
      return res.status(statusCode.OK).json(updatedTask);
    } else {
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Erro ao atualizar tarefa' });
    }
  }

  public async deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    const deleteTask = await this.taskService.deleteTask(Number(id));
    if (deleteTask) {
      return res
        .status(statusCode.OK)
        .json({ message: 'Tarefa excluída com sucesso' });
    } else {
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Erro ao excluir tarefa' });
    }
  }
}
