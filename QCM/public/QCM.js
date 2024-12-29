let currentQuestionIndex = 0;
let canTry = false;
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
  canTry = true;
  questionContainer.innerHTML = "";
  const questionElement = document.createElement("div");
  questionElement.classList.add("question_class"); // Add the new class <here>
  questionElement.innerText = question.question;
  questionContainer.appendChild(questionElement);

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-button"); // Add the new class here
    button.name = `answer-${index}`; // Assigning a name to each button
    button.addEventListener("click", () => selectAnswer(index));
    questionContainer.appendChild(button);
  });
}

function selectAnswer(index) {
  const buttons = questionContainer.querySelectorAll("button");
  if (canTry == true) {
    // Check for other buttons that are red and reset their background
    buttons.forEach((button) => {
      console.log("im here" + button.style.backgroundColor.toString);
      button.style.backgroundColor = "rgb(0, 0, 0)";
    });

    // Check if the selected answer is correct
    if (index === questions[currentQuestionIndex].correct) {
      score++;
      canTry = false;
      // Show the next button after selecting the correct answer
      nextButton.style.display = "block";
      buttons[index].style.backgroundColor = "rgb(22, 196, 30)";
    } else {
      // Change the background of the wrong button to red
      buttons[index].style.backgroundColor = "rgb(255, 0, 0)";
      nextButton.style.display = "none";
    }
  }
}

// Add event listener for the Next button
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion(questions[currentQuestionIndex]);
  nextButton.style.display = "none"; // Hide the next button until the next question
});

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
