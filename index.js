require('dotenv').config();
const PORT = process.env.PORT || 5050;
const videosRouter = require('./routes/videosRouter');
const commentsRouter = require('./routes/commentsRouter');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
const multer = require('multer');

app.get('/', (_req, res) => {
    res.send("Welcome to my API");
  });

app.use('/videos', videosRouter);
app.use('/comments', commentsRouter);


app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`)
})