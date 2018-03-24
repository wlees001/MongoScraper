const axios = require("axios");
const cheerio = require("cheerio");
const express = require('express');
const router = express.Router();
// Require all models
var db = require("../models");

const controller = require('../controllers/index')

// a Get route for the home page
router.get('/', controller.home);

// A GET route for scraping the echojs website
router.get("/scrape", controller.scrape);

// Route for getting all Articles from the db
router.get("/articles", controller.getArticles);

// Route for grabbing a specific Article by id, populate it with it's note
router.get("/articles/:id", controller.getArticle);

// Route to get all the saved articles
router.get("/saved-articles", controller.savedArticles);

// Route to delete a saved article
router.post("/delete-article", controller.deleteArticles)

// Route for saving/updating an Article's associated Note
router.post("/articles/:id", controller.updateArticle);

module.exports = router;