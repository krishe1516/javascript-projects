var allQuestion = [
    {
        question: "Which fruit has the highest fiber content?",
        a: "Apple",
        b: "Raspberries",
        c: "Kiwi",
        d: "Orange",
        correct: "b",
    },
    {
        question: "Which organ is responsible for regulating metabolism?",
        a: "Heart",
        b: "Kidney",
        c: "Lungs",
        d: "Brain",
        correct: "c",
    },
    {
        question: "What is the typical heart rate in a healthy adult?",
        a: "60-80 bpm",
        b: "100-120 bpm",
        c: "30-50 bpm",
        d: "80-100 bpm",
        correct: "a",
    },
    {
        question: "Pancakes are are a food item of what type of cuisine?",
        a: "France",
        b: "India",
        c: "England",
        d: "America",
        correct: "d",
    },
    {
        question: "Which is the fastest fish in the sea?",
        a: "Sailfish",
        b: "Jellyfish",
        c: "Shark",
        d: "Dolphin",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const answerData = document.querySelectorAll(".answer");
const ques = document.getElementById("text");
const a_text = document.getElementById("a-t");
const b_text = document.getElementById("b-t");
const c_text = document.getElementById("c-t");
const d_text = document.getElementById("d-t");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

load()
function load() {
    deselectAns();
    const currentData = allQuestion[currentQuiz];

    ques.innerText = currentData.question;
    a_text.innerHTML = quizData.a;
    b_text.innerHTML = quizData.b;
    c_text.innerHTML = quizData.c;
    d_text.innerHTML = quizData.d;


}

function selectAns() {
    let answer = undefined;


    answerData.forEach((answerEle) => {

        if (answerEle.checked) {
            answer = answerEle.id;
        }
    });
    return answer;
}

function deselectAns() {
    answerData.forEach((answerEle) => {
        answerEle.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelcted();

    if (answer) {
        if (answer === allQuestion[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < allQuestion.length) {
            load();
        }
        else {
            quiz.innerHTML =
                `<h2>You answered correctly at ${score}/${allQuestion} question.</h2>
          <button onclick="location.reload">Reload</button>`;

        }
    }
})


