require('dotenv').config();

const opts = {
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true
  }
}

module.exports = {
  username: 'gdmaitey',
  password: 'pbOBtG7HZyad4cI6_Q_GCn3gUdYCi6gI',
  database: 'gdmaitey',
  host: 'motty.db.elephantsql.com',
  dialect: 'postgres',
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true
  }
};
