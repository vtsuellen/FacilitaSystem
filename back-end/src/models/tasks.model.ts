import modelTask from '../database/models/tasks';
import { ITask } from '../interfaces/tasks';

export default class TaskModel {
  private model = modelTask;

  async createTasks(task: ITask): Promise<ITask> {
    return await this.model.create(task);
  }

  async getAllTasks(): Promise<ITask[]> {
    return await this.model.findAll();
  }

 
}
