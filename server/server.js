require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const routes = require('./routes/todos');
var MongoClient = require('mongodb').MongoClient;

const storyRoutes = require('./routes/stories');

const app = express();
const port = process.env.PORT || 4500;

// Static File Service
app.use(express.static('public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.Promise = global.Promise;

app.use('/', routes);
app.use('/stories', storyRoutes);

// CONNECT TO MONGODB SERVER
const connection = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));


  const db = mongoose.connection;

  db.on('error', () => {
    console.log('DB connection Error');
});
db.once('open', () => {
    console.log('DB is connected');
});
  

app.listen(port, () => console.log(`Server listening on port ${port}`));



