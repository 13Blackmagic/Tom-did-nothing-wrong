const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  let applicationCheck = await connection.db.listCollections({ name: 'applications' }).toArray();
  if (applicationCheck.length) {
    await connection.dropCollection('applications');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const user = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomUser();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    user.push({
      first,
      last,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(Thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
