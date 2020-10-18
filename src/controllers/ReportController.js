const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
	async show(req, res) {
		const { emailProvider, street, tech } = req.query;

		const users = await User.findAll({
			attributes: ['name', 'email'],
			where: {
				email: {
					[Op.like]: `%${emailProvider}%`							
				}
			},
			include: [
				{ association: 'addresses',
				attributes: ['zip_code', 'street', 'number'],
				where: {
					street: {
						[Op.like]: `%${street}%`
					}
				}},
				{
					association: 'techs',
					attributes: ['name'],
					through: { attributes: [] },
					where: {
						name: {
							[Op.like]: `%${tech}%`
						}
					}
				}
			]
		})		

		return res.json(users);
	},	
}