const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");

const travelRoutes = require ("./source/routes/travel.routes")
dbConnection();

app.use(cors());
app.use("/travel",travelRoutes);

app.use(express.json());
app.use("/api/travel",travelRoutes);

app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000);
