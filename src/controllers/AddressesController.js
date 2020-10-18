const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
	async create(req, res) {
		const { zip_code, street, number } = req.body;

		const { user_id } = req.params;

		const userExist = await User.findByPk(user_id);

		if (!userExist) {
			return res.status(400).json({ error: 'User not found' });
		}

		const address = await Address.create({ zip_code, street, number, user_id });

		return res.json(address);
	},

	async index(req, res) {
		const { user_id } = req.params;

		const userAddresses = await User.findByPk(user_id, {
			include: { association: 'addresses' }
		});

		return res.json(userAddresses.addresses);
	}
}