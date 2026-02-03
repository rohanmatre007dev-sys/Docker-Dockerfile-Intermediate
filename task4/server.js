const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Version 2");
});

app.listen(3000, () => {
  console.log("Dev server running on port 3000");
});
