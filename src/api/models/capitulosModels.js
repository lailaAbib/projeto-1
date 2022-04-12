const { Model, DataTypes } = require('sequelize');

class Capitulos extends Model {
    static init(sequelize) {
        super.init({
            capi_titulo: DataTypes.STRING,
            capi_enredo: DataTypes.STRING,
            capi_pag: DataTypes.STRING,
            livro_id: DataTypes.INTEGER
        },{
            sequelize,
            tableName: 'capitulos'
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Livros, {foreignKey: "livro_id", as: "livros"})
    }
}

module.exports = Capitulos