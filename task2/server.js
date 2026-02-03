const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Default Message';

app.get('/', (req, res) => {
  res.send(`Message: ${MESSAGE}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
