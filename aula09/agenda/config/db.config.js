const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const contatoModel = require('../models/contato');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contato = contatoModel(sequelize, Sequelize);

db.sync = async () => {
  await sequelize.sync();
};

module.exports = db;
