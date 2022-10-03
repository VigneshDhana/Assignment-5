const express = require("express");
const app = express();
const port = 8081;

const bodyParser = require("body-parser");

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/welcome", (req, res) => {
  res.send("Welcome to Dominos!");
  res.writeHead(200, { "content-type": "text/plain" });
});
app.get("/contact", (req, res) => {
  res.json({
    phone: "18602100000",
    email: "guestcaredominos@jublfood.com",
  });
  res.writeHead(200, { "content-type": "application/json" });
});

app.get("/menu", (req, res) => {
  res.json({
    food1: "pizza - 500Rs",
    food2: "milkshake - 100Rs",
  });
  res.writeHead(200, { "content-type": "application/json" });
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: "failure",
    message: "Page Not Found",
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
