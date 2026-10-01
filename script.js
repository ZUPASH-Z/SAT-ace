function checkAnswer(answer) {
let result = document.getElementById("result");
 
if (answer === "correct") {
result.innerHTML = "✅ Correct!";
} else {
result.innerHTML = "❌ Wrong!";
}
}
