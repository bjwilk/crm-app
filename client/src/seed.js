const { Account } = require('./models'); // Import your Sequelize model here
const faker = require('faker');
const sequelize = require('../config/config.js')
// Adjust the path to your model file

// Now you can use the `Account` model to create, query, and manipulate data.


const generateRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const createRandomAccount = () => {
  const companyName = faker.company.companyName();
  const businessType = faker.random.arrayElement([
    'Landscaping',
    'Freight Hauling',
    'Construction',
    'Moving',
    'Delivery'
  ]);
  const fleetSize = faker.datatype.number({ min: 1, max: 50 });
  const equipmentType = faker.random.arrayElement([
    'Sleeper',
    'Day Cab',
    'Flatbed',
    'Box Van',
    'Dump truck',
    'Water truck',
    'Service Truck',
  ]);
  const lookingFor = [faker.random.arrayElement(['Sleeper', 'Day Cab', 'Flatbed', 'Box Van', 'Dump truck', 'Water truck', 'Service Truck'])];
  const lastPurchased = generateRandomDate(new Date('2018-01-01'), new Date());

  return {
    companyName,
    businessType,
    fleetSize,
    equipmentType,
    lookingFor,
    lastPurchased,
  };
};

const seedAccounts = async () => {
  try {
    for (let i = 0; i < 25; i++) {
      const accountData = createRandomAccount();
      await Account.create(accountData);
    }
    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close your database connection if needed
    // await sequelize.close();
  }
};

module.exports = seedAccounts();
