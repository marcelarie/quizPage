const startButton = document.getElementById('button-start')
const nextButton = document.getElementById('button-next')
const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startQuiz)
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')
let suffledQuestions, currentQuestionIndex

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    suffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}
function nextQuestion() {
    resetState()
    showQuestion(suffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('bttn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
}

const questions = [
    {
        question: 'whats happening',
        answers: [
            {text: 'a', correct: true},
            {text: 'b', correct: false},
            {text: 'c', correct: false},
            {text: 'd', correct: false},
        ]
    }
]




