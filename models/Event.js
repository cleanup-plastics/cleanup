const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  // type: String,
  title: String,
  date: String,
  description: String,
  // owner: {
  // 	type: Schema.Types.ObjectId,
  // 	ref: "User"
  // },
  location: String,
  street: String,
  city: String,
  country: String,
  // coordinates: [Number]
})

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;