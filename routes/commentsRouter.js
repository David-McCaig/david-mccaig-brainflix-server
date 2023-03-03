const express = require('express');
const router = express.Router();

const commentsController = require("../controllers/commentsController");

router
    .route('/upload')
    .post(commentsController.postComments);

module.exports = router;