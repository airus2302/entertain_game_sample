var quiz_array = [];
var answered_quiz = [];
var currentIndex = 0;

function init() {
  currentIndex = Math.floor(Math.random() * quiz.length);
  console.log(currentIndex);
  console.log(quiz[currentIndex]);
  var element = document.getElementById("question");
  element.innerHTML = quiz[currentIndex].question;
  var lenHint = document.getElementById("lenHint");
  lenHint.style.display = "none";
  var answer = document.getElementById("answer");
  answer.style.display = "none";
  var btn0 = document.getElementById("btn0");
  btn0.onclick = function () {
    showHint();
  };
  var btn1 = document.getElementById("btn1");
  btn1.onclick = function () {
    showAnswer();
  };
  var btn2 = document.getElementById("btn2");
  btn2.onclick = function () {
    next();
  };
}

function showHint() {
  var element = document.getElementById("lenHint");
  element.innerHTML = quiz[currentIndex].length_hint;
  element.style.display = "block";
}

function showAnswer() {
  var element = document.getElementById("answer");
  element.innerHTML = quiz[currentIndex].answer;
  element.style.display = "block";
}

function next() {
  init();
}

init();
