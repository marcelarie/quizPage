const startButton = document.getElementById('button-start')
const nextButton = document.getElementById('button-next')
const questionContainerElement = document.getElementById('question-container')
const scoreText = document.querySelector('#score');
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')
let shuffledQuestions, currentQuestionIndex
let score = 0
let questionCounter = 0
let availableQuestions = []

const SCORE_POINTS = 125
const MAX_QUESTIONS = 20

function startQuiz() {
    console.log('Started')
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}
function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
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
    const slectedButton = e.target
    const correct = slectedButton.dataset.correct
    if (correct === 'true') {
        incrementScore(SCORE_POINTS)
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Scores'
        startButton.classList.remove('hide')
    }
}

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

const questions = [
    {
        question: 'What HTML stands for?',
        answers: [
            {text: 'Hype Text Markdown Language', correct: false},
            {text: 'Hyper Text Mark Language', correct: false},
            {text: 'Hyper Text Markup Language', correct: true},
            {text: 'How To Meet Ladies', correct: false},
        ]
    },
    {
        question: 'How to link two HTML files together',
        answers: [
            {text: '<a href="folder/file.html">Link text name</a>', correct: true},
            {text: '<p goTo("folder/file.html")>Link text name</p>', correct: false},
            {text: 'If its on the same folder it links automatically', correct: false},
            {text: '<div class="file.html">Link text name</div>', correct: false},
        ]
    },
    {
        question: 'Wich one of this languages its low level?',
        answers: [
            {text: 'C', correct: false},
            {text: 'Machine code', correct: true},
            {text: 'Java', correct: false},
            {text: 'HTML', correct: false},
        ]
    },
    {
        question: 'What OOP stand for? ',
        answers: [
            {text: 'On October we Program', correct: false},
            {text: 'Object Oriented Program', correct: false},
            {text: 'Object Oriented Programming', correct: true},
            {text: 'Is taken from the basketball term alley-oop.', correct: false},
        ]
    },
    {
        question: 'What does CSS mean?',
        answers: [
            {text: 'Cascadian Screen Shoots', correct: false},
            {text: 'Cascading Style Sheets', correct: true},
            {text: 'Computer Super Science', correct: false},
            {text: 'Computer Strong Selector', correct: false},
        ]
    },
    {
        question: 'Wich one is the best way to implement CSS?',
        answers: [
            {text: 'External CSS', correct: true},
            {text: 'Internal CSS', correct: false},
            {text: 'Inline CSS', correct: false},
        ]
    },
    {
        question: 'For what is used a Media Query?',
        answers: [
            {text: 'Its used to tell the browser that is media content inside that block.', correct: false},
            {text: 'Its used to bring peace between files.', correct: false},
            {text: 'Its used to include block of CSS only if a property its true.', correct: true},
            {text: 'Its used to search media file automatically in the server.', correct: false},
        ]
    },
    {
        question: 'How can be executed JavaScript?',
        answers: [
            {text: 'Can be executed inside a web browser.', correct: true},
            {text: 'Can be executed inside any terminal.', correct: false},
            {text: 'Can be executed using Node.js', correct: true},
            {text: 'It only can be executed in Linux', correct: false},
        ]
    },
    {
        question: 'Who is making the Web standards?',
        answers: [
            {text: 'The World Wide Web', correct: true},
            {text: 'Microsoft', correct: false},
            {text: 'Mozilla', correct: false},
            {text: 'Google', correct: false},
        ]
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        answers: [
            {text: '<break>', correct: false},
            {text: '<lb>', correct: false},
            {text: '<br>', correct: true},
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            {text: '<head>', correct: true},
            {text: '<body>', correct: true},
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            {text: 'myFunction()', correct: false},
            {text: 'function myFunction()', correct: true},
            {text: 'function = myFunction()', correct: false},
        ]
    },
    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            {text: 'call myFunction()', correct: false},
            {text: 'call function', correct: false},
            {text: 'myFunction()', correct: true},
        ]
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        answers: [
            {text: '<!-- comment here -->', correct: false},
            {text: '<comment>comment here</comment>', correct: false},
            {text: '// my comment here ', correct: true},
            {text: '/* my comment here */', correct: false},
        ]
    },
    {
        question: 'Which is the correct CSS syntax?',
        answers: [
            {text: 'body {color: black;}', correct: true},
            {text: 'body [color; black;]', correct: false},
            {text: 'body [color; black;}', correct: false},
            {text: 'body {color: black}', correct: false},
        ]
    },
    {
        question: 'Which CSS property controls the text size?',
        answers: [
            {text: 'font', correct: false},
            {text: 'font-size', correct: true},
            {text: 'text-size', correct: false},
            {text: 'text-style', correct: false},
        ]
    },
    {
        question: 'Which property is used to change the font of an element?',
        answers: [
            {text: 'font-style', correct: false},
            {text: 'font-family', correct: true},
            {text: 'font-wigth', correct: false},
        ]
    },
    {
        question: 'How do we write "Hello World" in an alert box',
        answers: [
            {text: 'msg("Hello World")', correct: false},
            {text: 'alert("Hello World")', correct: true},
            {text: 'show("Hello World")', correct: false},
            {text: 'print("Hello World")', correct: false},
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            {text: '<script src="main.js">', correct: true},
            {text: '<script defer src="main.js">', correct: true},
            {text: '<script url="main.js">', correct: false},
            {text: '<script href="main.js">', correct: false},
        ]
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
            {text: 'var colors = "red","blue","green"', correct: false},
            {text: 'var colors = (red,blue,green)', correct: false},
            {text: 'var colors(red,blue,green)', correct: false},
            {text: 'var colors = ["red","blue","green"]', correct: true},
        ]
    },
    {
        question: 'JavaScript is the same as Java.',
        answers: [
            {text: 'False', correct: true},
            {text: 'True', correct: false},
        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            {text: '-', correct: false},
            {text: '=', correct: true},
            {text: '*', correct: false},
            {text: '==', correct: false},
        ]
    },
]




