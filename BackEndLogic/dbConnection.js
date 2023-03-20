const express = require('express');
const app = express();
const {Client} = require('pg');

//instanciating the client
const client = new Client({
    user: 'postgres',
    host: '::1',
    database: 'cba_production_data_storage',
    password: '1023',
    port: 5432,
})

//connecting to the database
client.connect((err) => {
    if (err) {
      console.error('Error connecting to the database', err.stack);
    } else {
      console.log('Database connection successful');
    }
  });

  module.exports = client;