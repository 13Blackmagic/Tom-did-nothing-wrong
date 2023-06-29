const connection = require('../config/connection');
const { user } = require('../models');

connection.on('error', (err) => err);

const seedUsers = async () => {
    await user.deleteMany();

    await user.create({
        username: 'test',
        email: '
