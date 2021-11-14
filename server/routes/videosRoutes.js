const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

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
  const { title, image, description } = req.body;
  const newVid = {
    title,
    image,
    description,
    channel: "DDizzle",
    views: "632,893",
    likes: "230,145",
    duration: "5:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [
      {
        name: "Jesse S",
        comment: "I like cars that go beep beep.",
        likes: 1,
        timestamp: 1628522461792,
      },
      {
        name: "Arvino E",
        comment: "I like taking nappy naps.",
        likes: 999999,
        timestamp: 1628544461792,
      },
      {
        name: "Josh D",
        comment: "Nice video DDizzle!",
        likes: 756,
        timestamp: 1628522461792,
      },
    ],
    id: uniqid(),
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
