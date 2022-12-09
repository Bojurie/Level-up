const router = require('router');
const stripe = require("stripe")(process.env.STRIPE_KEY)


module.exports = router;