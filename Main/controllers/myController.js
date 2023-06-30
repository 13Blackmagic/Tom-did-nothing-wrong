const {User, My} = require('../models');

    module.exports = {
        async getUsers(req, res) {
            try {
                const users = await User.find();
                return res.json(users);
            }
            catch (err) {
                console.log(err);
                return res.status(400).json(err);
            }
        }
    },

    async getMy(req, res) {
        try {
            const my = await My.find();
            return res.json(my);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.json(user);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async createMy(req, res) {
        try {
            const my = await My.create(req.body);
            return res.json(my);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async deleteUsers(req, res) {
        try {
            const user = await User.deleteMany();
            return res.json(user);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async deleteMy(req, res) {
        try {
            const my = await My.deleteMany();
            return res.json(my);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }

    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            return res.json(user);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }

    async updateMy(req, res) {
        try {
            const my = await My.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            return res.json(my);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }



