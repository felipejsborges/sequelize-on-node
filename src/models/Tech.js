const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
		}, {
			sequelize,
			tableName: 'techs',
			paranoid: true,
			deletedAt: 'deleted_at'
		})
	}

	static associate(models) {
		this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' });
	}
}

module.exports = Tech;