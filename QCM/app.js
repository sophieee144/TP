const express = require("express");
const bodyParser = require("body-parser");
const questions = require("./qst");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("QCM"));
app.get("/QCM", (req, res) => {
  res.sendFile(__dirname + "/QCM.html");
});

app.get("/question/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  if (questionId < questions.length) {
    res.json(questions[questionId]);
  } else {
    res.status(404).send("Question not found");
  }
});

app.post("/check-answer/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  const userAnswer = parseInt(req.body.answer);

  if (userAnswer === questions[questionId].correct) {
    res.json({ correct: true });
  } else {
    res.json({ correct: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
