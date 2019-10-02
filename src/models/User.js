const monsgoose = require('mongoose');

const UserSchema = new monsgoose.Schema({
  email: String,
});

module.exports = monsgoose.model('User', UserSchema);
