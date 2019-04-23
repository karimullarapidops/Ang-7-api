const ENV = process.env.NODE_ENV || 'local';
global.CONFIG = require(`${__dirname}/config/${ENV}.json`);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${global.CONFIG.mongodb.host}/${global.CONFIG.db}`, { useNewUrlParser: true });


app.listen(global.CONFIG.port, () => console.log(`server running on port ${global.CONFIG.port}`));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected to db');
});