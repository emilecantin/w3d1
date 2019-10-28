const express = require('express');
const morgan = require('morgan');

const app = express();

const log = (req, res, next) => {
  console.log('Request:', req.path);
  next();
}

const authenticate = (req, res, next) => {
  // check the cookies
  if(true /* some sooper dooper secure check */) {
    req.user = {}
    next();
  } else {
    res.status(401);
    res.send('Not authorized!');
  }
}

// app.use(log);
app.set('views', 'templates');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(authenticate);


app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/name/:name', (req, res) => {
  res.render('home', {name: req.params.name, number: 10});
});

app.get('/potato', (req, res) => {
  res.send('Hello, PEI');
});

const protected = (req, res) => {
  res.send('super secret stuff');
}

app.get('/protected', authenticate, protected);

app.listen(9000, () => console.log('server listening on http://localhost:9000/'));
