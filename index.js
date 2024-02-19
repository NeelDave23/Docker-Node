const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./utils/database");
const User = require("./models/user");
const bodyParser = require("body-parser");
const router = require("./routes/users");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/users", router);

app.get("/", (req, res) => {
  res.send("Home");
});

const PORT = process.env.PORT;

sequelize
  .sync()
  .then((result) => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});
