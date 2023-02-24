const knex = require('knex')(require('../knexfile'))
const uuid = require("uuid");

exports.getAllVideos = (_req, res) => {
  knex('videos')
    .select('id', 'title', 'channel', 'image')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};

exports.getSelectedVideo = (req, res) => {
  knex('videos').where({ id: req.params.id })
     // .select('id', 'title', 'channel', 'image', 'description', 'views', 'likes', 'duration')
     .then((data) => {
       res.status(200).json(data[0]);
     })
     .catch((err) =>
       res.status(400).send(`Error retrieving Warehouses: ${err}`)
     );
 };
