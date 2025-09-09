const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("fullstackdb", "postgres", "root", {
  host: "postgres-service",
  dialect: "postgres",
});

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected");
  } catch (err) {
    console.error("PostgreSQL connection error:", err);
  }
};

module.exports = { sequelize, connectPostgres };
