const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { username, password, database } = require('./env.json');

mongoose.connect('mongodb://' + username + ':' + password + database, 
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3001, () => {
  console.log('Server started on port 3001')
});
