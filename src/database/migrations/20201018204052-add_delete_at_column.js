'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'deleted_at', {
        type: Sequelize.DATE,
      }
    );

    await queryInterface.addColumn(
      'addresses',
      'deleted_at', {
        type: Sequelize.DATE,
      }
    );

    await queryInterface.addColumn(
      'techs',
      'deleted_at', {
        type: Sequelize.DATE,
      }
    );

    await queryInterface.addColumn(
      'user_techs',
      'deleted_at', {
        type: Sequelize.DATE,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_techs', 'deleted_at');
    await queryInterface.removeColumn('techs', 'deleted_at');
    await queryInterface.removeColumn('addresses', 'deleted_at');
    await queryInterface.removeColumn('users', 'deleted_at');
  }
};
