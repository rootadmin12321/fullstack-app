const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectMongo = require("./config/dbMongo");
const { connectPostgres } = require("./config/dbPostgres"); // <-- destructured here

const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect Databases
connectMongo();
connectPostgres();

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
