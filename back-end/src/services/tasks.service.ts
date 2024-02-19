import TaskModel from '../models/tasks.model';
import { ITask } from '../interfaces/tasks';

export default class TaskService {
  constructor(private taskModel = new TaskModel()) {}

  public async createTask(title: string): Promise<ITask> {
    const newTask = await this.taskModel.createTasks({
      title,
      status: false,
      priority: 'baixa',
    });
    return newTask;
  }

  public async getAllTasks(): Promise<ITask[]> {
    const tasks = await this.taskModel.getAllTasks();
    return tasks;
  }

  public async updateTask(taskData: ITask): Promise<ITask | null> {
    const updatedTask = await this.taskModel.updateTask(taskData);
    return updatedTask;
  }

  public async deleteTask(id: number): Promise<boolean> {
    const isDeleted = await this.taskModel.deleteTask(id);
    return isDeleted;
  }
}
