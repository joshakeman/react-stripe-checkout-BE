const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_iBCsL9kBeH0YBm1RMcR4jnoY';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;