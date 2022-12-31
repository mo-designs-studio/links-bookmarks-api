const express = require("express");
const app = express();
const dbConnecting = require("./app/bootstrap/database");

dbConnecting().then((result) =>
  app.listen(3333, () => console.log("app start listeneing on 3333"))
);
