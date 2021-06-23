const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/exampleDB";

const connection = mongoose.connect(
  url,{
      useCreateIndex : true,
      useNewUrlParser : true,
      useFindAndModify : true,
      useUnifiedTopology : true
    }
)

module.exports = connection;