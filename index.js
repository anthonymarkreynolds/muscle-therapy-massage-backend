const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index', { text: 'World' });
});

app.listen(3000);
