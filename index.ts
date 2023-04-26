import express from "express";

const port = 8080;
const hostname = "127.0.0.1";
const app = express();

app.get("/", (_, res) => {
  res.send("Hello from express + TS!!!!");
});

app.get("/about", (_, res) => {
  res.send("HIIIIII");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
