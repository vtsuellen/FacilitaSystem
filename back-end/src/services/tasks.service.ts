import TaskModel from '../models/tasks.model';
import { ITask } from '../interfaces/tasks';

export default class TaskService {
  constructor(private taskModel = new TaskModel()) {}

  public async createTask(taskData: ITask): Promise<ITask> {
    const newTask = await this.taskModel.create({
      ...taskData,
      status: false,
      priority: 'baixa',
    });
    return newTask;
  }
}
