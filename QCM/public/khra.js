let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  scoreContainer.style.display = "none";
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerHTML = "";
  const questionElement = document.createElement("div");
  questionElement.innerText = question.question;
  questionContainer.appendChild(questionElement);

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.addEventListener("click", () => selectAnswer(index));
    questionContainer.appendChild(button);
  });
}

function selectAnswer(index) {
  if (index === questions[currentQuestionIndex].correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.style.display = "none";
  scoreContainer.style.display = "block";
  scoreDisplay.innerText = score;
}

restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion(questions[currentQuestionIndex]);
});

startQuiz();
