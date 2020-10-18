const startButton = document.getElementById('button-start')
const scoreButton = document.getElementById('button-scores')
const nextButton = document.getElementById('button-next')
const userName = document.getElementById('nickname')
const finalScore = document.getElementById('highScoresList')
const questionContainerElement = document.getElementById('question-container')
const scoreText = document.querySelector('#score');
const questionElement = document.getElementById('question')
const showUser = document.getElementById('userInput')
const nickName = document.getElementById('user')
const answerButtonsElement = document.getElementById('answers')
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
nickname.addEventListener('keyup', () => {
    startButton.classList.remove('hide')
})

let shuffledQuestions, currentQuestionIndex
let score = 0
let questionCounter = 0
let availableQuestions = []
let number = 0

const SCORE_POINTS = 125
const NEGATIVE_SCORE = -125
const MAX_QUESTIONS = 20

function startQuiz() {
    console.log('Started')
    userInp()
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    startButton.classList.add('hide') // hide start button after starting the quiz
    userName.classList.add('hide')    // hide username input after starting the quiz
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}
// This is to show the user name when starting the game
function userInp() {
    showUser.innerText = document.getElementById('user').value
}
function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    console.log(currentQuestionIndex)
    progressBar()
    questionElement.innerText = question.question
    if (questionElement.classList.contains('hide')) {
        questionElement.classList.remove('hide');
    }
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
    nextButton.classList.add('hide') // after changing question hide next button again
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const slectedButton = e.target
    const correct = slectedButton.dataset.correct
    if (shuffledQuestions.length > currentQuestionIndex + 1) { // if are more questions aviable show next button
        nextButton.classList.remove('hide')
    } else {
        scoreButton.classList.remove('hide') // show the score button when questions are over

    }
    if (correct === 'true') {
        incrementScore(SCORE_POINTS) // if true +125 points
        resetState() // and hide all the questions
        nextButton.classList.remove('hide') // and show next button ;)
        questionElement.classList.add('hide') // and show next button ;)
    } else {
        incrementScore(NEGATIVE_SCORE) // if fale -125 points
    }
}

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

// Username
//Getting user nickname inside var input
function inputUser() {
    var input = document.getElementById("user").value;
}
//Score
function lastScore() {
    console.log(score)
    highScoresList.add += '<li class="your-score">${score} - ${input}</li>';
}

// 20 questions for the quiz here
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


var indexBar = document.getElementById("bar")
// progress bar
function progressBar() {
    if (currentQuestionIndex == 0) {
        indexBar.style.width = "0%";
    }
    if (currentQuestionIndex == 1) {
        indexBar.style.width = "5%";
    }
    if (currentQuestionIndex == 2) {
        indexBar.style.width = "10%";
    }
    if (currentQuestionIndex == 3) {
        indexBar.style.width = "15%";
    }
    if (currentQuestionIndex == 4) {
        indexBar.style.width = "20%";
    }
    if (currentQuestionIndex == 5) {
        indexBar.style.width = "25%";
    }
    if (currentQuestionIndex == 6) {
        indexBar.style.width = "30%";
    }
    if (currentQuestionIndex == 7) {
        indexBar.style.width = "35%";
    }
    if (currentQuestionIndex == 8) {
        indexBar.style.width = "40%";
    }
    if (currentQuestionIndex == 9) {
        indexBar.style.width = "45%";
    }
    if (currentQuestionIndex == 10) {
        indexBar.style.width = "50%";
    }
    if (currentQuestionIndex == 11) {
        indexBar.style.width = "55%";
    }
    if (currentQuestionIndex == 12) {
        indexBar.style.width = "60%";
    }
    if (currentQuestionIndex == 13) {
        indexBar.style.width = "65%";
    }
    if (currentQuestionIndex == 14) {
        indexBar.style.width = "70%";
    }
    if (currentQuestionIndex == 15) {
        indexBar.style.width = "75%";
    }
    if (currentQuestionIndex == 16) {
        indexBar.style.width = "80%";
    }
    if (currentQuestionIndex == 17) {
        indexBar.style.width = "85%";
    }
    if (currentQuestionIndex == 18) {
        indexBar.style.width = "90%";
    }
    if (currentQuestionIndex == 19) {
        indexBar.style.width = "95%";
    }
    if (currentQuestionIndex == 20) {
        indexBar.style.width = "100%";
    }

}
