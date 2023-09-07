const questions = [
  {
    question: "What is the highest index for an array with 10 elements in C?",
    anwsers: [
      { text: "5", correct: false },
      { text: "9", correct: true },
      { text: "10", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question:
      "What is the size of an integer array declared as int arr[5] in bytes?",
    anwsers: [
      { text: "10", correct: true },
      { text: "20", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Which function is used to compare two strings in C?",
    anwsers: [
      { text: "strcmp", correct: false },
      { text: "strcat", correct: false },
      { text: "strlen", correct: true },
      { text: "strcomp", correct: false },
    ],
  },
];

const questionByElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionByElement.innerHTML =
    questionNumber + ". " + currentQuestion.question;
  questions;

  currentQuestion.anwsers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";
  if (isCorrect) {
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handledNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
function showScore() {
  resetState();
  questionByElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handledNextButton();
  } else {
    starQuiz();
  }
});

starQuiz();
