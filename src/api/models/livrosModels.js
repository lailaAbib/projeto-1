const { Model, DataTypes } = require('sequelize')

class Livros extends Model {
    static init(sequelize) {
        super.init({
            liv_titulo: DataTypes.STRING,
            liv_editora: DataTypes.STRING,
            liv_ano: DataTypes.STRING
        },{
            sequelize,
            tableName: 'livros'
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Capitulos, {foreignKey: "livro_id", as: 'livro' })
    }
}
 
module.exports = Livros