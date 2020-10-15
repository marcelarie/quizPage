const startButton = document.getElementById('button-start')
const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}
function nextQuestion() {
}
function selectAnswer() {
}

const questions = [
    {
        question: '',
        amswers: [
            {text: '', correct: true},
            {text: '', correct: false},
            {text: '', correct: false},
            {text: '', correct: false},
        ]
    }
]




