const express = require("express");
const dotenv = require("dotenv");
const { getUsers, createUsers, deleteUser } = require("./controllers/users");
const { connection } = require("./config/db");

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/users/get", getUsers);
app.post("/api/users/create", createUsers);
app.delete("/api/users/delete/:id", deleteUser);

const port = process.env.PORT || 3000;

connection.then(() => {
  console.log("db connected");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

module.exports = app;
