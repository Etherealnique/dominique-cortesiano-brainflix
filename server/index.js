const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const cors = require("cors");

const videosRoutes = require("./routes/videosRoutes");
// const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/videos", videosRoutes);

app.use((req, res) => {
  express.static(path.join(__dirname + "/public"));
});

app.listen(PORT, () => {
  console.log(`hi`);
});
