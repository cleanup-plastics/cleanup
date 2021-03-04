const Event = require("../models/Event");
const router = require("express").Router();

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

// to create an event
router.post("/events", (req, res, next) => {
  const {
    title,
    date,
    description,
    location,
    street,
    city,
    country,
  } = req.body;
  console.log("hello from backend:", req.body.title);
  Event.create({ title, date, description, location, street, city, country })
    .then((event) => {
      res.status(201).json(event);
    })
    .catch((err) => {
      next(err);
    });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
