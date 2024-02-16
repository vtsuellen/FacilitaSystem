import TaskModel from '../models/tasks.model';
import { ITask } from '../interfaces/tasks';

export default class TaskService {
  constructor(private taskModel = new TaskModel()) {}

  public async createTask(taskData: ITask): Promise<ITask> {
    const newTask = await this.taskModel.createTasks({
      ...taskData,
      status: false,
      priority: 'baixa',
    });
    return newTask;
  }

  public async getAllTasks(): Promise<ITask[]> {
    const tasks = await this.taskModel.getAllTasks();
    return tasks;
  }
}
