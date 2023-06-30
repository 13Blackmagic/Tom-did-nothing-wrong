const connection = require('../config/connection');
const { User, My } = require('../models');
const {getRandomUser, getRandomMy} = require('../utils/random');

connection.on('error', (err) => err);

connection.once('open', async () => {
   console.log('connected to database');
   let user = await connection.db.collection('users').find({}).toArray();
   if (user.length) {
      await connection.db.collection('users').drop();
   }

   let user = await connection.db.listCollections({ name: 'users' }).toArray();
    if (user.length) {
        await connection.db.dropCollection('users');
    }

   console.table(user);
   console.info('seeding complete');
    process.exit(0);
});