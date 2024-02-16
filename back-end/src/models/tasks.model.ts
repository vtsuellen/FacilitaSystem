import modelTask from "../database/models/tasks";
import { ITask } from "../interfaces/tasks";

export default class TaskModel {
  private model = modelTask;

  async create(task: ITask): Promise<ITask> {
    return await this.model.create(task);
  }
}

