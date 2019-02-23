module.exports = (sequelize, DataType) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataType.STRING,
    },
    cost: {
      type: DataType.FLOAT,
    },
    createdAt: {
      type: DataType.DATE,
    },
    updatedAt: {
      type: DataType.DATE,
    },
  }, {});
  return Product;
};
