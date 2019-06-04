const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello')
})

const port = 3001;
app.listen(port, () => {
  console.log('app running on port ' + port);
})
