'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('capitulos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      capi_titulo: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      
      capi_enredo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      
      capi_pag: {
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

      livro_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'livros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('capitulos');
  }
};