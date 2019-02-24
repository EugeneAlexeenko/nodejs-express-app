module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      required: true,
      allowNull: false,
      type: Sequelize.STRING,
    },
    brand: {
      required: true,
      allowNull: false,
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    options: {
      // type: Sequelize.ARRAY(Sequelize.TEXT),
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Products'),
};
