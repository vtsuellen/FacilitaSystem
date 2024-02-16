import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ITask } from '../../interfaces/tasks';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ITask>>('tasks', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
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
    });
  },
};
