const knex = require('knex')(require('../knexfile'))
const uuid4 = require('uuid4');

exports.postComments = (req, res) => {
    knex('comments').insert ({
          id: uuid4(),
          videos_id: req.body.videos_id,
          name: "Matt Hoffman",
          comment: req.body.comment
    })
    .then((data) => {
        res.status(200).json(data);
      })
    .catch((err) => {
        res.status(400).send(`Error posting comment: ${err}`)
    })   
}



