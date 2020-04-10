module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: { msg: 'value is required' },
      },
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'brandId is required' },
      },
    },
    modelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'modelId is required' },
      },
    },
    yearModel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'yearModel is required' },
      },
    },
    fuel: {
      type: DataTypes.ENUM(['Gasolina', 'Álcool', 'Diesel']),
      allowNull: false,
      validate: {
        notNull: { msg: 'yearModel is required' },
      },
    },
  });

  Vehicle.associate = function (models) {
    Vehicle.belongsTo(models.Model, { foreignKey: 'modelId', as: 'model' });
    Vehicle.belongsTo(models.Brand, { foreignKey: 'brandId', as: 'brand' });
  };
  return Vehicle;
};
