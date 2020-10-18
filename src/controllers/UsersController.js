const User = require("../models/User");

module.exports = {
	async create(req, res) {
		const { name, email } = req.body;

		const user = await User.create({ name, email });

		return res.status(201).json(user);
	},

	async index(req, res) {
		const users = await User.findAll();

		return res.status(200).json(users);
	},

	async show(req, res) {
		const { user_id } = req.params;

		const user = await User.findByPk(user_id);

		return res.status(200).json(user);
	},

	async update(req, res) {
		const { user_id } = req.params;

		const { name, email } = req.body;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User not found' });
		}

		name && (user.name = name);
		email && (user.email = email);

		const updatedUser = await user.save();

		return res.status(200).json(updatedUser);
	},

	async delete(req, res) {
		const { user_id } = req.params;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User not found' });
		}

		await user.destroy();

		return res.status(204).send();
	},

	async restore(req, res) {
		const { user_id } = req.params;

		const user = await User.findByPk(user_id, { paranoid: false });

		if (!user) {
			return res.status(400).json({ error: 'User not found' });
		}

		const restoredUser = await user.restore();

		return res.status(200).json(restoredUser);
	},
}