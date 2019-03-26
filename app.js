var express                 = require("express"),
    app                     = express(),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override"),
    flash                   = require("connect-flash"),
    User                    = require("./models/user");


//requiring routes from separate route files
var indexRoutes = require("./routes/index");

//## TODO: Connect to MLab database
//Sample syntax: mongoose.connect("mongodb://josh:q12345@ds018568.mlab.com:18568/yelpcamp"); 

//Connect to mLab MongoDB Database Azure West CA Instance:
mongoose.connect("mongodb://joshb:q12345@ds012889.mlab.com:12889/portal");


app.use(express.static(__dirname + "/public")); //Give app access to the 'public' folder
app.use(express.static("node_modules/jquery/dist/")) //Allow access to the jQuery module
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

//seedDB(); //Seed the database


//=================================
//   PASSPORT AUTH CONFIGURATION
//=================================

//Enable sessions
app.use(require("express-session")({
    secret: "sseeccrreett",
    resave: false,
    saveUninitialized: false
    }));
app.use(flash());
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});
app.locals.moment = require('moment');
//Use Passport in App.js
app.use(passport.initialize());
app.use(passport.session());

//Make User Data Model & Schema
passport.use(new LocalStrategy(User.authenticate())); //Tell Passport to use "Local Strategy" (not Google/Facebook etc.);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//tell app to use these routes. Can refactor route names and add "MergeParams=True"
app.use(indexRoutes);

//for Heroku
app.listen(process.env.PORT, function() {
    console.log("Portal Server Started on Heroku");
});

//for localhost
// app.listen(3000, 'localhost', function() {
//     console.log("Portal Server Started on Localhost");
// });