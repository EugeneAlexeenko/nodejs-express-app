module.exports = (sequelize, DataType) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    },
    name: {
      required: true,
      allowNull: false,
      type: DataType.STRING,
    },
    brand: {
      required: true,
      allowNull: false,
      type: DataType.STRING,
    },
    price: {
      type: DataType.FLOAT,
    },
    options: {
      // TODO: how to define array of objects?
      // type: DataType.ARRAY(DataType.TEXT),
      type: DataType.TEXT,
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
