const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: String,
  description: String,
  imagePath: String,
  imageName: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: Date,
  time: String,
  location: String,
  street: String,
  city: String,
  country: String,
  coordinates: [Number],
});

const Event = model("Event", eventSchema);

module.exports = Event;
