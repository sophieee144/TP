const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";

  const question = questions[currentQuestionIndex];
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
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "none";
  const scoreContainer = document.getElementById("score-container");
  scoreContainer.style.display = "block";
  document.getElementById("score").innerText = score;
}

document.getElementById("restart-button").addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("score-container").style.display = "none";
  showQuestion();
});

showQuestion();
