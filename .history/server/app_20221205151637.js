const express = require('express');
const path = require('path');
const middleware = require('./middleware')
const bodyParser = require('body-parser')
const mongoose = require('./database')
const session = require('express-session')


const stripeRouter = require("./routes/stripeRoutes")
const cartRouter = require('./routes/cartRoutes');
const contactRouter = require('./routes/contactRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');

const dashboardRouter = require('./routes/dashboardRoutes');

const cors= require('cors')

const app = express();

// view engine setup
app.set('views', 'views')
app.set('view engine', 'ejs' );
app.use(express.static(path.join(__dirname, 'public')))


// STATIC FILES
// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors())
app.use(session({
  secret: "Afroboy",
  resave: true,
  saveUninitialized: false
}))

app.use('/auth',authRouter );
app.use('/users',userRouter );
app.use('/products', productRouter );
app.use('/cart', cartRouter);
app.use('/orders', orderRouter);
app.use('/payment', stripeRouter);
app.use('/contact', contactRouter);
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
