var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username:  String,
  email: String,
}, { versionKey: false });

var User = mongoose.model('User', UserSchema);

module.exports = User;