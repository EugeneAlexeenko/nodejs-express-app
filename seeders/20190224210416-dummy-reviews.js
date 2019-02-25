const reviewsToAdd = [
  {
    author: 'John Doe',
    content: 'review1',
    productId: 1,
  },
  {
    author: 'Jane Doe',
    content: 'review2',
    productId: 1,
  },
  {
    author: 'John Doe',
    content: 'review3',
    productId: 2,
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Reviews', reviewsToAdd, {}),
  down: queryInterface => queryInterface.bulkDelete('Reviews', null, {}),
};
