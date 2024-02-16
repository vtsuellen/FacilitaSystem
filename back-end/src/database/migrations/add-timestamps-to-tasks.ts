import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.addColumn('tasks', 'created_at', {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    });
    await queryInterface.addColumn('tasks', 'updated_at', {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.removeColumn('tasks', 'created_at');
    await queryInterface.removeColumn('tasks', 'updated_at');
  }
};
