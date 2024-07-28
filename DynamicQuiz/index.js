const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Transfer Markup language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup language",
    ],
    correct: 0,
  },
  {
    question: "Which CSS property is used to control the spacing between elements?",
    options: ["Margin", "Padding", "Spacing", "Border-spacing"],
    correct: 0,
  },
  {
    question: "What is the JavaScript function used to select an HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "SelectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question: "In React.js, which hook is used to perform side effects in a function component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

// JavaScript Initialization
const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const [questionEl, option_1, option_2, option_3, option_4] = document.querySelectorAll(
  "#question, .option_1, .option_2, .option_3, .option_4"
);
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

// Load Quiz Function
const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  questionEl.innerText = `${currentQuiz + 1}: ${question}`;
  options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// Get Selected Answer Function on Button Click
const getSelectedOption = () => {
  const answerArray = Array.from(answerEls);
  return answerArray.findIndex((curElem) => curElem.checked);
};

// Deselect Answers
const deselectAnswers = () => {
  answerEls.forEach((curElem) => {
    curElem.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
      <div class="result">
        <h2>Your Score: ${score}/${quizData.length} correct answers</h2>
        <p>Congratulations on completing the quiz!</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>
      </div>
    `;
  }
});
