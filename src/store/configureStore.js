/**
 * Created by Dan Stevenson on 7/30/2017.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}