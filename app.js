const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/getUser", (request, response) => {
  response.json({ name: "Saubhik Singj" });
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;

//   res.setHeader("Content-Type", "text/html");

//   res.end("<h1>Hello World</h1>");
// });

// server.listen(port, () => {
//   console.log(`Server running at port ` + port);
// });

app.listen(port, () => {
  console.log("Listenng on port " + port);
});
