require('dotenv').config();
const port = process.env.DB_LOCAL_PORT;
const videosRouter = require('./routes/videosRouter');
const commentsRouter = require('./routes/commentsRouter');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
const multer = require('multer');

app.use('/videos', videosRouter);
app.use('/comments', commentsRouter);

app.get('/', (_req, res) => {
    res.send("Welcome to my API");
  });

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})