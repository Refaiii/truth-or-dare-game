const truths = [
    "What is your biggest fear?",
    "Who was your first crush?",
    "What is your most embarrassing moment?",
    "Have you ever lied to your best friend?",
    "What is your secret talent?",
    "Do you have a crush on someone in this room?",
    "What is the most childish thing you still do?",
    "What is the naughtyest thing you have ever done?"
];

const dares = [
    "Do 3 pushups.",
    "Act Blind for 1 minute.",
    "Ask a Boy/Girl out for a coffee.",
    "Speak in a robot voice for 1 minute.",
    "Moan like a cat.",
    "Call your ex and say 'I miss you'.",
    "Buy me a coffee from Bridgeon Cafe.",
    "Kiss someone on the cheek."
];

let currentQuestion = "";
let currentType = "";
let savedAnswers = [];

function showTruth() {
    currentType = "Truth";
    currentQuestion = truths[Math.floor(Math.random() * truths.length)];

    document.getElementById("result").innerHTML =
        "🟢 Truth:<br><br>" + currentQuestion;

    document.getElementById("popupBox").classList.add("show");
}

function showDare() {
    currentType = "Dare";
    currentQuestion = dares[Math.floor(Math.random() * dares.length)];

    document.getElementById("result").innerHTML =
        "🔴 Dare:<br><br>" + currentQuestion;

    document.getElementById("popupBox").classList.add("show");
}

function saveAnswer() {
    let name = document.getElementById("nameInput").value;
    let answer = document.getElementById("answerInput").value;

    if (name === "" || answer === "") {
        alert("Please enter your name and answer.");
        return;
    }

    let record =
`NAME: ${name}
TYPE: ${currentType}
QUESTION: ${currentQuestion}
ANSWER: ${answer}
-----------------------------`;

    savedAnswers.push(record);

    document.getElementById("savedBox").innerHTML =
        savedAnswers.join("<br><br>");

    document.getElementById("answerInput").value = "";
}

function downloadAnswers() {
    let fileContent = savedAnswers.join("\n\n");

    let blob = new Blob([fileContent], { type: "text/plain" });
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "truth-or-dare-answers.txt";
    link.click();
}