const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const request = require('request');

// Sets up the Express App
// ======================================
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
// ========================================
// Use morgan logger for logging requests
app.use(logger('dev'));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static('public'));

// Set Handlebars
// ============================================
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/scraper');

// Routes
// ==============================================
app.use(require('./routes'));

//===============================
// Start the server
//===============================
app.listen(PORT, function() {
  console.log('App running on port ' + PORT + '!');
});