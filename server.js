const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const videoRouter = require('./routes/videos-router')

// Import the library:
var cors = require('cors');
var app = express();
// Then use it before your routes are set up:
app.use(cors());


// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// DB Config
const dbConfig = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
    dbConfig, { useNewUrlParser: true , useUnifiedTopology: true},
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use('/api', videoRouter)


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));



