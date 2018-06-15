const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')

const { Client } = require('pg')

var router = express.Router()

const conString = process.env.DATABASE_URL ||  'postgres://enussiwuhbsfdo:a06702ef7957e18d1d78d63787f4fe0b16de316275c7797dd2ac507b32b6ebb2@ec2-23-23-130-158.compute-1.amazonaws.com:5432/d2nferslotrmvn'
const client = new Client({
  connectionString: conString,
  ssl: true,
})
client.connect()

// router.use(express.static(path.join('client/build')));
router.use(express.static(path.join(__dirname, 'client/build')));

const username = 'abc123'
const hashedPassword = '$2b$10$1sSpo.bnaIfzQNw5Myh4AOJoujzjqKwn9xXz4RYIpRFu7MWulj9by'

let list = [
  {
    article_id: 0,
    article_title: 'art #1',
    article_author: 'auth #1',
    article_img: './IMG.png',
  },
  {
    article_id: 1,
    article_title: 'art #2',
    article_author: 'auth #2',
    article_img: './IMG.png',
  },
  {
    article_id: 2,
    article_title: 'art #3',
    article_author: 'auth #3',
    article_img: './IMG.png',
  },
  {
    article_id: 3,
    article_title: 'art #4',
    article_author: 'auth #4',
    article_img: './IMG.png',
  },
]

let article = [
  {
    article_id: 0,
    article_title: 'art #0',
    article_author: 'auth #0',
    article_img: './IMG.png',
    article_content: 'aaaaaaaa\nbbbbbbb',
  },
]

router.get('/api/list', function (req, res, next) {
  // res.json(list);

  client.query('SELECT article_id, article_title, article_author, article_img FROM article;', (err, data) => {
    if (err) throw err;

    for (let row of data.rows) {
      console.log(JSON.stringify(row))
    }

    res.json(data.rows)
    client.end()
  })

});

router.get('/api/article/:artId', function (req, res, next) {
  let artId = parseInt(req.params.artId, 10)
  console.log('artcie id: ' + artId)
  client.query('SELECT * FROM article WHERE article_id = $1;', [artId.toString()], (err, data) => {
    if (err) throw err;

    for (let row of data.rows) {
      console.log(JSON.stringify(row))
    }

    res.json(data.rows[0])
    client.end()
  })

  // res.json(article[artId]);
});

router.post('/api/login', async function (req, res, next) {
  const getUsername = req.body.username
  const getPassword = req.body.password

  if (username === getUsername) {
    const match = await bcrypt.compare(getPassword, hashedPassword)
    if (match) {
      res.json(true)
    } else {
      res.json(false)
    }
  } else {
    res.json(false)
  }
})

router.post('/api/post-essay', async function (req, res, next) {
  const title = req.body.title
  const author = req.body.author
  const img = req.body.img
  const content = req.body.content
  const getUsername = req.body.username
  const getPassword = req.body.password

  if (username === getUsername) {
    const match = await bcrypt.compare(getPassword, hashedPassword)
    // TODO:
    //
    if (match) {
      console.log(title)
      console.log(author)
      console.log(img)
      console.log(content)
      res.json(true)
    } else {
      res.json(false)
    }
  } else {
    res.json(false)
  }
})

module.exports = router
