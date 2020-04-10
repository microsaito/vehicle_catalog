
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'login is required' },
      },
      unique: {
        args: true,
        msg: 'login já está em uso!',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'password is required' },
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'firstName is required' },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'lastName is required' },
      },
    },
    role: {
      type: DataTypes.ENUM(['Admin', 'Comum']),
      allowNull: false,
      validate: {
        notNull: { msg: 'role is required' },
      },
    },
  });

  return User;
}
