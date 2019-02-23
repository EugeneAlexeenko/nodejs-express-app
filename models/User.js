module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    email: {
      type: DataType.STRING,
    },
    username: {
      type: DataType.STRING,
    },
    password: {
      type: DataType.STRING,
    },
    createdAt: {
      type: DataType.DATE,
    },
    updatedAt: {
      type: DataType.DATE,
    },
  }, {});
  return User;
};
