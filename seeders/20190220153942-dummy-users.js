const usersToAdd = [
  {
    email: 'vasilii@pochta.su',
    username: 'Василий Иванович',
    password: 'qwerty',
  },
  {
    email: 'petyka@pochta.su',
    username: 'Петька',
    password: '12345',
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', usersToAdd, {}),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
