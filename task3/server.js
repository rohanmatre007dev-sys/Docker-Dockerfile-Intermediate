const express = require("express");
const fs = require("fs-extra");
const app = express();

const DATA_FILE = "/data/count.txt";

app.get("/", async (req, res) => {
  let count = 0;

  if (await fs.pathExists(DATA_FILE)) {
    count = parseInt(await fs.readFile(DATA_FILE, "utf-8"));
  }

  count++;
  await fs.outputFile(DATA_FILE, count.toString());

  res.send(`Visit count: ${count}`);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
