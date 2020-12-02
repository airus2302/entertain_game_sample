function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

// create questions
var questions = [
  new Question("렬루", ["OOO", ""], "리얼로(진짜로)"),
  new Question("갑분싸", ["OOO OOO OOOO", ""], "갑자기 분위기 싸해지다"),
  new Question("옥떨메", ["OOOO OOO OO", ""], "옥상에서 떨어진 메주"),
  new Question("소확행", ["OOOOO OOO OO", ""], "소소하지만 확실한 행복"),
  new Question(
    "아더메치",
    ["OOOO OOO OOOO OOOO", ""],
    "아니꼽고 더럽고 메스껍고 치사하다"
  ),
  new Question("우심뽀까", ["OO OOOO OOO OO", ""], "우리 심심한데 뽀뽀나 할까"),
  new Question("이생망", ["OO OO OOO", ""], "이번 생은 망했다"),
  new Question("우유남", ["OOO OOOO OO OO", ""], "우월한 유전자를 가진 남자"),
  new Question("장미단추", ["OOO OO OOO OO", ""], "장거리 미남 단거리 추남"),
  new Question(
    "TMI",
    ["영어 - OOO OOOO OOOOOOOOOOO", ""],
    "Too Much Information"
  ),
  new Question(
    "특공대",
    ["OOO OOO OOO OOO", ""],
    "특별히 공부도 못하는 대가리"
  ),
  new Question("영고", ["OOO OOOO", ""], "영원히 고통받는"),
  new Question("시강", ["OO OO", ""], "시선 강탈"),
  new Question("갈비", ["OOO OOO", ""], "갈수록 비호감"),
  new Question("워라밸", ["OO OOO OOO", ""], "워크 라이프 밸런스"),
  new Question(
    "고답이",
    ["OOO OO OOO OOO OO", ""],
    "고구마 먹은 것처럼 답답한 사람"
  ),
  new Question("음쓰봉", ["OOO OOO OO", ""], "음식물 쓰레기 봉투"),
  new Question("생선", ["OO OO", ""], "생일 선물"),
  new Question("좋못사", ["OO OO OOO", ""], "좋다 못해 사랑해"),
  new Question("넘사벽", ["OO OO OOOO O", ""], "넘지 못할 사차원의 벽"),
  new Question("간점", ["OOOO", ""], "간주점프"),
  new Question("주부애", ["OOO OOO OO", "구조어"], "주먹을 부르는 애교"),
  new Question("파파미", ["OO OO OO", ""], "파도 파도 미담"),
  new Question("롬곡옾눞", ["OOOO", ""], "폭풍눈물"),
  new Question("존모", ["OOO OO", ""], "존댓말 모드"),
  new Question("자만추", ["OOOOO OO OO", ""], "자연스러운 만남 추구"),
  new Question("제곧내", ["OOO O OO", ""], "제목이 곧 내용"),
  new Question(
    "상스치콤",
    ["OOO OOOO OOOO OO", ""],
    "상하이 스파이시 치킨버거 콤보"
  ),
  new Question("편도", ["OOO OOO", ""], "편의점 도시락"),
  new Question("이선좌", ["OO OOO OO", ""], "이미 선택된 좌석"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
