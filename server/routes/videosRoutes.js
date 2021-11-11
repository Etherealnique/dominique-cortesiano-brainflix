const express = require("express");
const router = express.Router();
const fs = require("fs");

let queueList = [];

const queue = () => {
  fs.readFile("./data/video.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    queueList = JSON.parse(data);
  });
};
queue();

router.get("/", (req, res) => {
  res.json(queueList);
});

router.get(`/:id`, (req, res) => {
  const videos = queueList.find((vid) => {
    return vid.id == req.params.id;
  });
  if (!videos) {
    res.status(404).send("Video not found");
  }
  res.json(videos);
});

router.post(`/`, (req, res) => {
  const newVid = {
    title: req.body.title,
    description: req.body.description,
  };

  queueList.push(newVid);
  fs.writeFile("./data/video.json", JSON.stringify(queueList), (err) => {
    if (err) {
      res.status(500).send("update was unsuccesful");
    }
    res.json(queueList);
  });
});

module.exports = router;
