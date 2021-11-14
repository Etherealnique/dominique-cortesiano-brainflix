const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const path = require("path");

const videosRoutes = require("./routes/videosRoutes");

app.use(express.json());
app.use(cors());
app.use("/videos", videosRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
