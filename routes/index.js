const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')

const { Client } = require('pg')

var router = express.Router()

const conString = process.env.DATABASE_URL ||  'postgres://jpzgjenyussirv:914a493cfc282545dcaa4abec25f2f6667bcc206b738c51e1796ecc28bc8e154@ec2-23-21-129-50.compute-1.amazonaws.com:5432/d9otaqjdlvrcba'
const client = new Client({
  connectionString: conString,
  ssl: true,
})
client.connect()

router.use(express.static(path.join('client/build')));

const username = 'abc123'
const hashedPassword = '$2b$10$1sSpo.bnaIfzQNw5Myh4AOJoujzjqKwn9xXz4RYIpRFu7MWulj9by'

let list = [
  {
    id: 0,
    title: 'art #1',
    author: 'auth #1',
    img: './IMG.png',
  },
  {
    id: 1,
    title: 'art #2',
    author: 'auth #2',
    img: './IMG.png',
  },
  {
    id: 2,
    title: 'art #3',
    author: 'auth #3',
    img: './IMG.png',
  },
  {
    id: 3,
    title: 'art #4',
    author: 'auth #4',
    img: './IMG.png',
  },
]

let article = [
  {
    id: 0,
    title: 'art #0',
    author: 'auth #0',
    img: './IMG.png',
    content: 'aaaaaaaa\nbbbbbbb',
  },
  {
    id: 1,
    title: 'art #1',
    author: 'auth #1',
    img: './IMG.png',
    content: 'hhhhhhhh\niiiiiiii',
  },
]

router.get('/api/list', function (req, res, next) {
  res.json(list);
});

router.get('/api/article/:artId', function (req, res, next) {
  const artId = parseInt(req.params.artId, 10)
  res.json(article[artId]);
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
