module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    },
    email: {
      required: true,
      unique: true,
      allowNull: false,
      type: DataType.STRING,
      validate: {
        isEmail: true,
      },
    },
    username: {
      required: true,
      allowNull: false,
      type: DataType.INTEGER,
    },
    password: {
      required: true,
      allowNull: false,
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
