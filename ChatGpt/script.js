const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: ["París", "Londres", "Berlín", "Madrid"],
        correct: 0
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Júpiter", "Saturno", "Marte", "Tierra"],
        correct: 0
    },
    // Añade más preguntas aquí (total 10 preguntas)
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 20;
let timer;

function startQuiz() {
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElements = document.querySelectorAll(".answer-btn");

    questionElement.textContent = questions[currentQuestionIndex].question;
    answersElements.forEach((btn, index) => {
        btn.textContent = questions[currentQuestionIndex].answers[index];
        btn.classList.remove("correct", "incorrect");
    });

    document.getElementById("feedback").textContent = "";
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
        checkAnswer(null);
    }
}

function checkAnswer(selectedAnswerIndex) {
    clearInterval(timer);

    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    const answersElements = document.querySelectorAll(".answer-btn");

    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
        document.getElementById("feedback").textContent = "¡Correcto!";
        answersElements[correctAnswerIndex].classList.add("correct");
    } else {
        document.getElementById("feedback").textContent = `Incorrecto. La respuesta correcta es: ${questions[currentQuestionIndex].answers[correctAnswerIndex]}`;
        if (selectedAnswerIndex !== null) {
            answersElements[selectedAnswerIndex].classList.add("incorrect");
        }
        answersElements[correctAnswerIndex].classList.add("correct");
    }

    document.getElementById("score").textContent = `Puntuación: ${score}`;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            timeLeft = 20;
            showQuestion();
            timer = setInterval(updateTimer, 1000);
        } else {
            endQuiz();
        }
    }, 3000);
}

function endQuiz() {
    document.getElementById("question-container").textContent = "¡Quiz finalizado!";
    document.getElementById("feedback").textContent = `Tu puntuación final es: ${score}`;
}

document.addEventListener("DOMContentLoaded", startQuiz);
