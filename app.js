const express = require('express');
const app = express();

// Respond with 200 on options method for CORS (headers added by middy)
app.options('*', (req, res) => {
  res.send(200);
});

app.post('/slash-cmd', async (req, res) => {
  if (true){
    const data = {
        message: 'success!'
    };
    res.status(200)
      .json(data);
  } else {
    res.status(400)
      .json({
        message: 'error with params'
      });
  }
});

// all supported routes must be above this block
app.use((req, res) => {
  // if no matching routes or use cases are found, the incoming request will be handled here
  res.status(404)
    .json({
      message: "That url resource is not currently supported"
    });
});

module.exports = app;