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
    title: 'art #1',
    author: 'auth #1',
    img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
  },
  {
    title: 'art #2',
    author: 'auth #2',
    img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
  },
  {
    title: 'art #3',
    author: 'auth #3',
    img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
  },
  {
    title: 'art #4',
    author: 'auth #4',
    img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
  },
]

let article = {
  title: 'art #0',
  author: 'auth #0',
  img: 'http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png',
  content: [
    'aaaaaaaa',
    'bbbbbbbb',
    'cccccccc',
    'dddddddd',
    'eeeeeeee',
    'ffffffff',
    'gggggggg',
  ],
}

router.get('/list', function(req, res, next) {
  res.json(list);
});

router.get('/article/:artId', function(req, res, next) {
  const artId = parseInt(req.params.artId, 10)
  res.json(article);
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

module.exports = router
