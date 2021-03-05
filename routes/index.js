const Event = require("../models/Event");
const router = require("express").Router();
const { uploader, cloudinary } = require('../config/cloudinary');

// to get all the events

router.get("/events", (req, res, next) => {
  Event.find().then((events) => {
    // console.log("events at /events", events[0])
    res.status(200).json(events);
  });
});

// to get a specific event

router.get("/events/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .then((event) => {
      if (!event) {
        res.status(404).json(event);
      } else {
        res.status(200).json(event);
      }
    })
    .catch((err) => {
      next(err);
    });
});

// to update an event

router.put("/events/:id", uploader.single("image"), (req, res, next) => {
  // console.log(req.file);
  // console.log(req.params.id);
  const {
    title,
    date,
    description,
    location,
    street,
    city,
    country
  } = req.body;
  const imagePath = req.file.path
  const imageName = req.file.originalname
  const publicId = req.file.filename
  Event.findByIdAndUpdate(req.params.id, {
    title,
    date,
    description,
    location,
    street,
    city,
    country,
    imagePath,
    imageName,
    publicId
  }, 
  { new:true })
  .then(event => {
    res.status(200).json(event)
  })
  .catch(err => {
    next(err)
  })
});

// to delete an event

router.delete("/events/:id", (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
  .then(event => {
    if (event.imagePath) {
      cloudinary.uploader.destroy(event.publicId);
    }
    res.status(200).json({message: "event deleted"})
  })
  .catch(err => {
    next(err)
  })
})

// to create an event

router.post("/events", uploader.single("image"), (req, res, next) => {
  // console.log(req.file);
  const {
    title,
    date,
    description,
    location,
    street,
    city,
    country,
  } = req.body;
  const imagePath = req.file.path
  const imageName = req.file.originalname
  const publicId = req.file.filename
  // console.log("hello from backend:", req.body.title);
  Event.create({ 
    title, 
    date, 
    description, 
    location, 
    street, 
    city, 
    country,
    imagePath,
    imageName,
    publicId 
    })
    .then((event) => {
      res.status(201).json(event);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
