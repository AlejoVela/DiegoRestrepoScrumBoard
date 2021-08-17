const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();
const Role = require("./routes/role");
const User = require("./routes/user");
const Board = require("./routes/board");
const Auth = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", Role);
app.use("/api/user", User);
app.use("/api/board", Board);
app.use("/api/auth", Auth);

app.listen(
    process.env.PORT,
    console.log("Connection with Backend server OK, on PORT: " + process.env.PORT)
);

dbConnection();