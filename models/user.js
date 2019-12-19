var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true, min: 6 },
  password: { type: String, required: true, min: 6 }
});

//Export model
module.exports = mongoose.model("User", UserSchema);
