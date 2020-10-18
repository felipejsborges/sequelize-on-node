const { Model, DataTypes } = require('sequelize');

class Address extends Model {
	static init(sequelize) {
		super.init({
			zip_code: DataTypes.STRING,
			street: DataTypes.STRING,
			number: DataTypes.INTEGER,
		}, {
			sequelize,
			paranoid: true,
			deletedAt: 'deleted_at'
		})
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
	}
}

module.exports = Address;