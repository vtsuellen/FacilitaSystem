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

  async updateTask(task: ITask): Promise<ITask | null> {
    const existingTask = await this.model.findByPk(task.id);
    if (existingTask) {
      await existingTask.update(task);
      return existingTask;
    }
    return null;
  }
}
