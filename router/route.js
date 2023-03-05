import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("hello");
});
route.get("/blogs", (req, res) => {
  res.send("blogs");
});
route.get("/projects", (req, res) => {
  res.send("projects");
});
route.post("/contacts", (req, res) => {
  res.send("hello");
});

export default route;
