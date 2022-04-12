'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      liv_titulo: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      
      liv_editora: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      liv_ano: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('livros');
  }
};