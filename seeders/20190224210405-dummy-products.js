const productsToAdd = [
  {
    name: 'testProductName1',
    brand: 'testProductName1',
    price: 99.99,
  },
  {
    name: 'testProductName2',
    brand: 'testProductName2',
    price: 99.99,
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Products', productsToAdd, {}),
  down: queryInterface => queryInterface.bulkDelete('Products', null, {}),
};
