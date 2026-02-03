const express = require("express");
const fs = require("fs");

const app = express();

const SECRET_PATH = "/run/secrets/API_KEY";

if (!fs.existsSync(SECRET_PATH)) {
  throw new Error("API_KEY secret missing");
}

const API_KEY = fs.readFileSync(SECRET_PATH, "utf8").trim();

app.get("/api", (req, res) => {
  res.json({ key: API_KEY.slice(0, 4) + "****" });
});

app.listen(4000, () => {
  console.log("Backend running on port 4000");
});
