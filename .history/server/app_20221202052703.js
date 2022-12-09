const express = require('express');
const path = require('path');
const middleware = require('./middleware')
const bodyParser = require('body-parser')
const mongoose = require('./database')
const session = require('express-session')


const shopRouter = require('./routes/shopRoutes');
const contactRouter = require('./routes/contactRoutes');
const loginRouter = require('./routes/loginRoutes')
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const dashboardRouter = require('./routes/dashboardRoutes')

const app = express();

// view engine setup
app.set('views', 'views')
app.set('view engine', 'ejs' );
app.use(express.static(path.join(__dirname, 'public')))


// STATIC FILES
// app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
  secret: "Afroboy",
  resave: true,
  saveUninitialized: false
}))

app.use('/shop', shopRouter);
app.use('/contact', contactRouter);
app.use('/auth',authRouter );
app.use('/user',userRouter );
app.use('/products', productRouter );
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);


app.get('/dashboard', middleware.reqireLogin, (req, res, next) =>{
  const payload = {
    pageTitle: "Dash Board",
    userLoggedIn: req.session.user
  }
  res.status(200).render("home", payload)
})


app.listen(process.env.PORT || 5001, () => {
  console.log('server is running on ')
})

module.exports = app;
