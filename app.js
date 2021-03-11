const cors = require('cors');

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
//const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);


// Allows access to the API from different domains/origins BEFORE session
app.use(
  cors({
    // this could be multiple domains/origins, but we will allow just our React app
    origin: ['http://localhost:3000']
  })
);

// START session configuration here 👇

// session configuration
const session = require('express-session');
// session store using mongo
//const MongoStore = require('connect-mongo')(session)

const mongoose = require('./db/index');

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 },
//     saveUninitialized: false,
//     //Forces the session to be saved back to the session store, 
//     // even if the session was never modified during the request.
//     resave: true,
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection
//     })
//   })
// )


const MongoStore = require('connect-mongo').default;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    saveUninitialized: false,
    //Forces the session to be saved back to the session store,
    // even if the session was never modified during the request.
    resave: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
    })
  })
)
// end of session configuration

// passport configuration
const User = require('./models/User.model');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// we serialize only the `_id` field of the user to keep the information stored minimum
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// when we need the information for the user, the deserializeUser function is called with the id that we previously serialized to fetch the user from the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(dbUser => {
      done(null, dbUser);
    })
    .catch(err => {
      done(err);
    });
});

passport.use(
  new LocalStrategy((username, password, done) => {
    // login
    console.log('step 4')
    User.findOne({ username: username })
      .then(userFromDB => {
        console.log('this is the user', userFromDB)
        if (userFromDB === null) {
          // there is no user with this username
          done(null, false, { message: 'Wrong Credentials' });
        } else if (!bcrypt.compareSync(password, userFromDB.password)) {
          // the password is not matching
          done(null, false, { message: 'Wrong Credentials' });
        } else {
          // the userFromDB should now be logged in
          done(null, userFromDB)
        }
      })
      .catch(err => {
        console.log(err);
      })
  })
)

app.use(passport.initialize());
app.use(passport.session());


// end of passport


// 👇 Start handling routes here
// Contrary to the views version, all routes are controled from the routes/index.js
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const auth = require('./routes/auth')
app.use('/api/auth', auth);

const savedEvents = require('./routes/savedevents')
app.use('/api', savedEvents);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

// this is for deployment on heroku

const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = app;
