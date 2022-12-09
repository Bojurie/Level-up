const express = require('express');
const path = require('path');
const middleware = require('./middleware')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('./database')
const session = require('express-session')


const indexRouter = require('./routes/shop');
const contactRouter = require('./routes/contact');
const loginRouter = require('./routes/loginRoutes')
const registerRouter = require('./routes/registerRoutes')
const dashboardRouter = require('./routes/dashboardRoutes')

const app = express();

dotenv.config();

// const db = mongoose.connection;


// view engine setup
app.set('views', 'views')
app.set('view engine', 'ejs' );
app.use(express.static(path.join(__dirname, 'public')))


// STATIC FILES
// app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
  secret: "Afroboy",
  resave: true,
  saveUninitialized: false
}))

app.use('/shop', indexRouter);
app.use('/contact', contactRouter);
app.use('/register',registerRouter );
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);

app.get('/', middleware.reqireLogin, (req, res, next) =>{
  
  const payload = {
    pageTitle: "Home",
    userLoggedIn: req.session.user
  }
  res.status(200).render("home", payload)
})

const PORT = 5001;
app.listen(PORT, () => console.log(`server is running on ${PORT}`))

module.exports = app;
