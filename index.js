const Questions = [{
    q: "Which of the following is not a primitive data type in JavaScript?",
    a: [{ text: "a) Number", isCorrect: false },
    { text: "b) String", isCorrect: false },
    { text: "c)  Boolean", isCorrect: false },
    { text: "d) Object", isCorrect: true }
    ]


},
{
    q: " What does the “typeof” operator do in JavaScript?",
    a: [{ text: "a)  Concatenates two strings", isCorrect: false, isSelected: false },
    { text: "b)Assigns a value to a variable", isCorrect: false },
    { text: "c) Checks if a variable is defined", isCorrect: false },
    { text: "d) Returns the data type of a variable", isCorrect: true }
    ]


},
{
    q: "Will the following JavaScript code work?\n var js = (function(x) {return x*x;}(10));",
    a: [{ text: "a) Exception will be thrown", isCorrect: false },
    { text: "b) Memory leak", isCorrect: false },
    { text: "c) Yes, perfectly", isCorrect: true },
    { text: "d) Error    ", isCorrect: false }
    ]


},
{
    q: "What is the basic difference between JavaScript and Java?",
    a: [{ text: "a) Functions are considered as fields", isCorrect: false },
    { text: "b) Functions are values, and there is no hard distinction between methods and fields", isCorrect: true },
    { text: "c) Variables are specific", isCorrect: false },
    { text: "d) There is no difference", isCorrect: false }
    ]


}


]


let currQuestion = 0
let score = 0
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}




loadQues();


function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}


function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);


    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}
