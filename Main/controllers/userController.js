const {ObjectId} = require('mongoose').Types;
const {User, My} = require('../models');

const headCount = async (req, res) => {
    const numberOfUsers = await User.countDocuments();
    const numberOfMy = await My.countDocuments();
    return res.json({numberOfUsers, numberOfMy});
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
}

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

async getSingleUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        return res.json(user);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
},

async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
},

async deleteUser(req, res) {
    try {
        const user = awain user