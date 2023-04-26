import path from "node:path";
import morgan from "morgan";
import express from "express";

type TBlogs = { title: string; snippet: string }[];

const port = 8080;
const hostname = "127.0.0.1";
const app = express();

// *register view engine
app.set("view engine", "ejs");
// *logging into console every request | middleware
app.use(morgan("dev"));
// *serve static files like css picture | middleware
app.use(express.static(path.resolve("public")));

app.get("/", (_, res) => {
  const blogs: TBlogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (_, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (_, res) => {
  res.render("create", { title: "Create Blog" });
});

app.use((_, res) => {
  res.status(404).render("404", { title: "Not Found" });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
