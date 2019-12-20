// JavaScript source code

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

const myQuestions = [
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Alaskan Malamute",
            b: "American Eskimo",
            c: "Siberian Husky",
            d: "Australian Shepherd"
        },
        correctAnswer: "c"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Golden Retriever",
            b: "Irish Setter",
            c: "Labrador Retriever",
            d: "Labradoodle"
        },
        correctAnswer: "a"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "English Shepherd",
            b: "Border Collie",
            c: "Australian Shepherd",
            d: "Shetland Sheepdog"
        },
        correctAnswer: "b"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Miniature Pinscher",
            b: "Chihuahua",
            c: "Italian Greyhound",
            d: "Miniature Doberman"
        },
        correctAnswer: "a"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Dachshund",
            b: "Boston Terrier",
            c: "French Bulldog",
            d: "Pug"
        },
        correctAnswer: "c"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Bichon Frise",
            b: "American Eskimo",
            c: "Miniature Poodle",
            d: "Maltese"
        },
        correctAnswer: "d"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Jack Russell Terrier",
            b: "Wheaton Terrier",
            c: "Rat Terrier",
            d: "Norfolk Terrier"
        },
        correctAnswer: "a"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Papillon",
            b: "Bichon Frise",
            c: "American Eskimo",
            d: "Pomeranian"
        },
        correctAnswer: "d"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Cattle Dog",
            b: "Alaskan Malamute",
            c: "German Shepherd",
            d: "Rough Collie"
        },
        correctAnswer: "c"
    },
    {
        question: "What kind of dog is this?",
        answers: {
            a: "Norfolk Terrier",
            b: "Yorkshire Terrier",
            c: "Maltese",
            d: "West Highland Terrier"
        },
        correctAnswer: "b"
    }

]

buildQuiz();

function buildQuiz() {

    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => { // currentQuestion is the current value, questionNumber is the index in the array

            // we'll want to store the list of answer choices
            const answers = [];
            // for each letter option in the current question's answer list
            for (letter in currentQuestion.answers) {

                // put in button
                answers.push(
                    `<button class="answerOption" id="${questionNumber}${letter}" name="question${questionNumber}" value="${letter}" onclick="checkAnswer('${letter}', '${currentQuestion.correctAnswer}', '${questionNumber}');">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </button>`
                );
            }

            var pictureArray = [
                '<img src=0.jpg id = 0 height = 350>',
                '<img src=1.jpg id = 1 height=350>',
                '<img src=2.jpg id = 2 height=350>',
                '<img src=3.jpg id = 3 width = 500>',
                '<img src=4.jpg id = 4 height=350>',
                '<img src=5.jpg id = 5 height=350>',
                '<img src=6.jpg id=6 height=350>',
                '<img src=7.jpg id=7 height=350>',
                '<img src=8.jpg id=8 height=350>',
                '<img src=9.jpg id=9 height=350>'

            ];

            // add this question and its answers to the output
            output.push(
                `<div class="slideShow">
                    <div class="picture">${pictureArray[questionNumber]}</div>
                    <div class="question"><h2> ${currentQuestion.question} </h2></div>
                    <div class="answer"> ${answers.join('')} </div>
                </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

let numCorrect = 0;
let numWrong = 0;

showResults();

function checkAnswer(answerLetter, correctAnswer, questionNumber) {
    var correctButton = document.getElementById(questionNumber+correctAnswer)
    var selectedButton = document.getElementById(questionNumber + answerLetter)

    if (answerLetter === correctAnswer) {
        numCorrect++;
        showResults();
            correctButton.classList.remove("answerOption")
            correctButton.classList.add("correctAnswer")
        }
    else {
        numWrong++;
        showResults();
            selectedButton.classList.remove("answerOption")
            selectedButton.classList.add("wrongAnswer")
            correctButton.classList.remove("answerOption")
            correctButton.classList.add("correctAnswer")
    }
}

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll(".slideShow");
let currentSlide = 0

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
    }
    else {
        nextButton.style.display = 'inline-block';
    }
}
showSlide(0);

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function showResults() {
    var totalAnswered = numCorrect + numWrong;
    resultsContainer.innerHTML = "<h6>Correct: </h6>" + numCorrect + "/" + myQuestions.length + "<br>"
        + "<h6>Answered: </h6>" + totalAnswered + "/" + myQuestions.length;
}

const finalContainer = document.getElementById('final');
const finalContent = document.getElementById('finalContent');

function endQuiz() {
    var percentageCorrect = Math.round((numCorrect / myQuestions.length) * 100);
    finalContainer.classList.add('active');
    if (percentageCorrect >= 50) {
        finalContent.innerHTML = "<h3>You got " + percentageCorrect + "% correct! <br> Well done! </h3>";
    }
    else if (percentageCorrect <= 50) {
        finalContent.innerHTML = "<h3>You got " + percentageCorrect + "% <br> Better luck next time! </h3>";
    }
}

