module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    productId: {
      references: {
        model: 'Products',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    underscored: true,
  });

  Review.associate = (models) => {
    Review.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
  };

  return Review;
};
