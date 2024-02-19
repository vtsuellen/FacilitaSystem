import { NextFunction, Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import TaskService from '../services/tasks.service';

export default class TaskController {
  constructor(private taskService = new TaskService()) {}

  public async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;

      const newTask = await this.taskService.createTask(title);

      if (newTask) {
        return res.status(statusCode.CREATED).json(newTask);
      } else {
        return res
          .status(statusCode.INTERNAL_SERVER_ERROR)
          .json({ error: 'Erro ao adicionar tarefa' });
      }
    } catch (error) {
      next(error);
    }
  }

  public async getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const allTasks = await this.taskService.getAllTasks();

      return res.status(statusCode.OK).json(allTasks);
    } catch (error) {
      next(error);
    }
  }

  public async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, status, priority } = req.body;
      const { id } = req.params;
      const taskData = { id: Number(id), title, status, priority };

      const updatedTask = await this.taskService.updateTask(taskData);

      if (updatedTask) {
        return res.status(statusCode.OK).json(updatedTask);
      } else {
        return res
          .status(statusCode.INTERNAL_SERVER_ERROR)
          .json({ error: 'Erro ao atualizar tarefa' });
      }
    } catch (error) {
      next(error);
    }
  }

  public async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
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
    } catch (error) {
      next(error);
    }
  }
}
