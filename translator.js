var quiz_array = [];
var answered_quiz = [];
var currentIndex = 0;

function init() {
  currentIndex = Math.floor(Math.random() * quiz.length);
  console.log(currentIndex);
  console.log(quiz[currentIndex]);
  var element = document.getElementById("question");
  var theme = "한국영화";
  if (quiz[currentIndex].theme == "korean_movie") theme = "한국영화";
  else if (quiz[currentIndex].theme == "korean_drama") theme = "한국드라마";
  element.innerHTML = theme;
  const google_src_url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=" + quiz[currentIndex].pronunciation + "&tl=en&total=1&idx=0&textlen=" + quiz[currentIndex].pronunciation.length;
  const kakao_src_url = "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=" + quiz[currentIndex].pronunciation;
  document.getElementById("google_src").src = google_src_url;
  document.getElementById("kakao_src").src = kakao_src_url;

  var lenHint = document.getElementById("lenHint");
  lenHint.style.display = "none";
  var answer = document.getElementById("answer");
  answer.style.display = "none";
  //   var btnGoogle = document.getElementById("btn_google");
  //   btnGoogle.onclick = function () {
  //     playGoogle();
  //   };
  var btnKakao = document.getElementById("btn_kakao");
  btnKakao.onclick = function () {
    playKakao();
  };
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

// function playGoogle() {
//   var audioGoogle = document.getElementById("google_trans");
//   audioGoogle.load();
//   audioGoogle.play();
// }

function playKakao() {
  var audioKakao = document.getElementById("kakao_trans");
  console.log('audioKakao', audioKakao)
  audioKakao.load();
  // audioKakao.play();
  audioKakao.addEventListener("canplaythrough", function() {
    // 오디오가 완전히 재생 가능하다고 판단된 시점
    audioKakao.play();
  });
}

function showHint() {
  var element = document.getElementById("lenHint");
  if (quiz[currentIndex].theme == "korean_drama") element.innerHTML = quiz[currentIndex].year + "년 드라마 " +  quiz[currentIndex].length_hint;
  else element.innerHTML = quiz[currentIndex].length_hint;
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
