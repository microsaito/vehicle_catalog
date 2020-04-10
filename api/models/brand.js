module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'nome já existe!',
      },
      validate: {
        notNull: { msg: 'name is required' },
      },
    },
  });

  return Brand;
}
