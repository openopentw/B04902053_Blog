var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

const username = 'abc123'
const password = '123abc'

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
    content: [
      'aaaaaaaa',
      'bbbbbbbb',
      'cccccccc',
      'dddddddd',
      'eeeeeeee',
      'ffffffff',
      'gggggggg',
    ],
  },
  {
    id: 1,
    title: 'art #1',
    author: 'auth #1',
    img: './IMG.png',
    content: [
      'hhhhhhhh',
      'iiiiiiii',
      'jjjjjjjj',
      'kkkkkkkk',
      'llllllll',
      'mmmmmmmm',
      'nnnnnnnn',
    ],
  },
]

router.get('/list', function(req, res, next) {
  res.json(list);
});

router.get('/article/:artId', function(req, res, next) {
  const artId = parseInt(req.params.artId, 10)
  res.json(article[artId]);
});

router.post('/login', function(req, res, next) {
  const getUsername = req.body.username
  const getPassword = req.body.password

  if (username === getUsername && password == getPassword) {
    res.json(true)
  } else {
    res.json(false)
  }
})

router.post('/post-essay', function(req, res, next) {
  const title = req.body.title
  const author = req.body.author
  const img = req.body.img
  const content = req.body.content
  const getUsername = req.body.username
  const getPassword = req.body.password

  if (username === getUsername && password == getPassword) {
    // TODO:
    console.log(title)
    console.log(author)
    console.log(img)
    console.log(content)
    res.json(true)
  } else {
    res.json(false)
  }
})

module.exports = router
