const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 8080;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  console.log(`Request received for: ${path}`);

  let filePath;
  let statusCode = 200;

  function serveFile(filePath, res, statusCode) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 - Internal Server Error");
        return;
      }

      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  switch (path) {
    case "/":
      filePath = "index.html";
      break;
    case "/about":
      filePath = "about.html";
      break;
    case "/contact":
      filePath = "contact-me.html";
      break;
    default:
      filePath = "404.html";
      statusCode = 404;
  }

  // Serve the determined file
  serveFile(filePath, res, statusCode);
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
