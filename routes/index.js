const Event = require("../models/Event");
const router = require("express").Router();
const { uploader, cloudinary } = require('../config/cloudinary');
const axios = require('axios');

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
    if (event.imageUrl) {
      cloudinary.uploader.destroy(event.publicId);
    }
    res.status(200).json({message: "event deleted"})
  })
  .catch(err => {
    next(err)
  })
})

// to post to Cloudinary

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

// to create an event

router.post("/events", /*uploader.single("imageUrl"),*/ (req, res, next) => {
  // console.log("IS THIS THE FILE?", req.file)
  const {
    title,
    date,
    description,
    location,
    street,
    time,
    city,
    country,
    imageUrl
  } = req.body;
  const geocoderUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + street+'%20'+city +'%20'+country+'.json?access_token='+'pk.eyJ1IjoiZWx2aWFzaSIsImEiOiJja2w1ZjFhNDgwbms4MzBwNmpmcTUzaXU5In0.tyY-4o-vyzl93U7XLFjekQ'
  console.log(geocoderUrl)
  axios.get(geocoderUrl)
  .then(response => {
    const coordinates = response.data.features[0].geometry.coordinates
    Event.create({ 
      title, 
      date, 
      description, 
      location, 
      street, 
      city,
      time,
      country,
      coordinates,
      imageUrl,
      owner: req.user._id
      })
  })
  // console.log("hello from backend:", req.body.title);
    .then((event) => {
      res.status(201).json(event);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
