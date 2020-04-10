module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('Model', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notNull: { msg: "name is required" },
        },
      }
    }
    );
  
    return Model;
  }