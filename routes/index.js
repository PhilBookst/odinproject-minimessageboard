const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', async (req, res, next) => {
  let authorName = await req.body.authorName;
  let messageText = await req.body.messageText;
  
  if(authorName && messageText) {
    messages.push({
      text: messageText,
      user: authorName,
      added: new Date(),
    })
  }
  res.redirect('/');
});

module.exports = router;
