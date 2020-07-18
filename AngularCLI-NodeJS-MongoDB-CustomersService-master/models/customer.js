const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      State = require('./state');

//console.log(State);
const OrderSchema = new Schema({
  product  : { type : String, required: true, trim: true },
  price    : { type : Number },
  quantity : { type : Number }
});

const CustomerSchema = new Schema({
  firstName   : { type : String, required: false, trim: true },
  lastName    : { type : String, required: false, trim: true },
  image       : { type : String, required: false, trim: true },
  description       : { type : String, required: false, trim: true },
  date       : { type : String, required: false, trim: true },
  email       : { type : String, required: false, trim: true },
  address     : { type : String, required: false, trim: true },
  city        : { type : String, required: false, trim: true },
  stateId     : { type : Number, required: false },
  state       : State.schema ,
  zip         : { type : Number, required: false },
  gender      : { type : String },
  orderCount  : {  type : Number },
  orders      : [ OrderSchema ],
});

module.exports = mongoose.model('Customer', CustomerSchema, 'customers');
