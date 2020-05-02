const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('questions-container');
const questionElement = document.getElementById('question');
const optionButtons = document.getElementById('option-buttons');
let shuffleQuestion, currentQuestion

startButton.addEventListener('click', beginGame);

function beginGame() {
    startButton.classList.add('hide');
    shuffleQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainer.classList.remove('hide');
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(shuffleQuestion[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button')
        if (answer.correct) {
            button.addEventListener('click', goGreen);
        }
        button.addEventListener('click', pickAnswer)
        optionButtons.appendChild(button);
    })
}

function goGreen() {
    const btn = document.getElementsByClassName('btn');
    btn.style.background = 'green';
}

function resetState() {
    nextButton.classList.add('hide');
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
}

function pickAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(optionButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {

}

const questions = [
    {
        question: '3 * 3?',
        answers: [
            { text: '9', correct: true },
            { text: '44', correct: false }
        ]
    }
]