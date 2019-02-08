const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://carloslevir:abc123456@ds127015.mlab.com:27015/goweek-carloslevir', 
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Server started on port 3000')
});
