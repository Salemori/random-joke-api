const express = require('express');
const { getDadJoke } = require('./src/dadJokes');
const port = 4000;
const app = express();

app.get('/joke', async (req, res) => {
  try {
    const joke = await getDadJoke();
    res.json({ joke });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log('Server listening on port 4000');
});
