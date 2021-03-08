const User = require("../models/User.model");
const router = require("express").Router();
const { uploader, cloudinary } = require('../config/cloudinary');

router.get("/profile/user/:id", (req, res, next) => {
  User.findById(req.params.id).then((profile) => {
    // console.log("events at /events", events[0])
    res.status(200).json(profile);
  })
  .catch(err => {
    next(err)
  })
});

router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
  // console.log('file is: ', req.file)
 
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
 
  res.json({ secure_url: req.file.path });
});

router.put("/profile/user/:id", uploader.single("image"), (req, res, next) => {
  // console.log(req.file);
  // console.log(req.params.id);
  const {
    firstName,
    lastName,
    imagePath
  } = req.body;
  User.findByIdAndUpdate(req.params.id, {
    firstName,
    lastName,
    imagePath,
    imageName,
    publicId
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


