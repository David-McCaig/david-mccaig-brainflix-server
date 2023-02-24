const express = require('express');
const router = express.Router();

const videosController = require('../controllers/videosController');

router.get('/', videosController.getAllVideos);

router
    .route('/:id')
    .get(videosController.getSelectedVideo);

router
    .route('/:id/comments')
    .get(videosController.getSelectedComments)

module.exports = router;