module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('Log', {
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      fuel: DataTypes.STRING,
    });
  
    return Log;
  }