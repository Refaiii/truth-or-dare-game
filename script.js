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

function showTruth() {
    let randomTruth = truths[Math.floor(Math.random() * truths.length)];

    document.getElementById("result").innerHTML =
        "🟢 Truth:<br><br>" + randomTruth;

    document.getElementById("popupBox").classList.add("show");
}

function showDare() {
    let randomDare = dares[Math.floor(Math.random() * dares.length)];

    document.getElementById("result").innerHTML =
        "🔴 Dare:<br><br>" + randomDare;

    document.getElementById("popupBox").classList.add("show");
}