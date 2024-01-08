const express = require('express');
const router = express.Router();
const redis = require('../redis/index')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const visits = await redis.getAsync('todos')
  res.send({
    added_todos: visits
  });
});

module.exports = router;
