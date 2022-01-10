//require("dotenv").config();

const express = require("express");
const cors = require("cors");

const appPath = "/",
  viewsPath = __dirname + "/views";
const port = process.env["PORT"] || 8000;

const app = express();
const router = express.Router();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(appPath + "", cors(corsOptions), router);

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  // res.redirect( "/index");
  res.render(viewsPath + "/index", {
    // appPath: appPath,
    pageName: "index",
  });
});

app.get("/index", (req, res) => {
  res.render(viewsPath + "/index", {
    pageName: "index",
  });
});

app.get("/archive", (req, res) => {
  res.render(viewsPath + "/archive", {
    pageName: "archive",
  });
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
