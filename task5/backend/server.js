const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(4000, () => {
  console.log("Backend running on port 4000");
});
