const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 3000;

// const server = http.createServer((req, res) => {
//     console.log("request received");
//     res.end("hola como jaja mundo");
//   });

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200; // OK
    console.log("Devuelvo la llamada: ", req.url);
    res.end("Bienvenido a mi página web de inicio ssddd");
  } else if (req.url === "/imagen-richard.png") {
    fs.readFile("./Richard.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/png");
        console.log("Devuelvo la llamada: ", req.url);
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200; // OK
    console.log("Devuelvo la llamada: ", req.url);
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404; // OK
    console.log("Devuelvo la llamada: ", req.url);
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
