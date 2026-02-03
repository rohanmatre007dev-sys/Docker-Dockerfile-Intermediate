const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  const response = await axios.get("http://backend:4000/api");
  res.send(response.data.message);
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
