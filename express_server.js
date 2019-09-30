const express = require('express');
const moment = require('moment');

const app = express();

app.set('view engine', 'ejs')

const logUA = (req, res, next) => {
  console.log(req.get('User-Agent'));
  next();
}

app.use(express.static('public'));

// app.use(logUA);

app.get('/', (req, res) => {
  res.render('home', {
    formattedDate: moment().format('LLL')
  });
});

app.get('/potato', (req, res) => {
  res.render('potato');
});

app.get('/:name', (req, res) => {
  console.log(req.query);
  res.send(`Hello, ${req.params.name}`);
})

app.listen(9000);
