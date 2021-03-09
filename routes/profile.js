const User = require("../models/User.model");
const router = require("express").Router();
const { uploader, cloudinary } = require('../config/cloudinary');

router.get("/profile/user/:id", (req, res, next) => {
  User.findById(req.params.id).then((user) => {
    res.status(200).json(user);
  })
  .catch(err => {
    next(err)
  })
});

router.post('/upload', uploader.single('imagePath'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
 
  res.json({ secure_url: req.file.path });
});

router.put("/user/:id", (req, res, next) => {
  console.log("router at edit profile triggered")
  const {
    firstName,
    lastName,
  } = req.body;
  User.findByIdAndUpdate(req.params.id, {
    firstName,
    lastName,
  }, 
  { new:true })
  .then(profile => {
    res.status(200).json(profile)
  })
  .catch(err => {
    next(err)
  })
});

module.exports = router;


