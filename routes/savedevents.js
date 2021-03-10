const Event = require("../models/Event");
const router = require("express").Router();
const { uploader, cloudinary } = require('../config/cloudinary');
const axios = require('axios');
const User = require('../models/User.model');

// to add the savedEvent field to the User model
router.put("/user/saveEvent", (req, res, next) => {
 console.log(req.body, "that is the body")
 //console.log("route TRIGGERED", req.params);
 const savedEvents = req.body.params.savedEvents
 User.findByIdAndUpdate(
   req.body.params.currentUser,
   {
     $push: {savedEvents: savedEvents}
   },

 )
   .then(() => {
     User.findById(req.body.params.currentUser)
     .populate("savedEvents")
     .then((user) => res.send(user))
   })
   .catch((err) => {
     next(err);
   });
});

// to get all saved events in the user model

router.get("/:id/savedEvents", (req, res, next) => {
  User.findById(req.params.id).populate('savedEvents')
  .then((user) => {
     console.log(" the user with events", user.savedEvents)
    res.send(user.savedEvents)
  });
});

module.exports = router;