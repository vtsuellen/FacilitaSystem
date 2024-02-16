import { DataTypes, Model } from 'sequelize';
import { ITask } from '../../interfaces/tasks';
import sequelize from '../../models/index';

export default class Task extends Model<ITask> {
  declare title: string
  declare status: boolean
  declare priority: string
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM('baixa', 'media', 'alta', 'urgente'),
      allowNull: false,
    },
  },
  { sequelize: sequelize, 
    modelName: 'Task', 
    tableName: 'tasks',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
