const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');

const quizData = [
    {
        question: "What is the capital of Morocco?",
        options: ["Dc Washington", "Bruxelle", "Rabat", "Casablanca", "Safi"],
        answer: "Rabat"
    },
    {
        question: "What is the largest planet in the solar system?",
        options: ["Saturn", "Jupiter", "Mars", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "Where is the real Eiffel Tower located??",
        options: ["Paris", "Shenzhen", "Hangzhou", "Mason", "Doswell"],
        answer: "Paris"
    }
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function() {
            if (option === currentQuestion.answer) {
                score++;
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                displayQuestion();
            } else {
                alert(`Quiz completed. Your score is ${score}`);
            }
        });
        optionsElement.appendChild(button);
    });
}

displayQuestion();