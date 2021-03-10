const { Schema, model } = require("mongoose");

// Creating the User
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  imagePath: String,
  imageName: String,
  location: String, 
  savedEvents: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }],
  role: {
    type: String,
     enum: ['user', 'admin'],
     default: 'user'
   }
});

const User = model("User", userSchema);

module.exports = User;
