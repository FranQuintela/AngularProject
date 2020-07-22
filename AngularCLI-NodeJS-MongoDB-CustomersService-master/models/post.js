const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      State = require('./state');

//console.log(State);


const PostSchema = new Schema({

  image       : { type : String, required: false, trim: true },
  description       : { type : String, required: false, trim: true },
  date       : { type : String, required: false, trim: true },
  style : { type : String, required: false, trim: true },

});

module.exports = mongoose.model('Post', PostSchema, 'posts');
