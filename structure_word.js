const quiz = [
  {
    id: 0,
    question: "렬루",
    length_hint: "OOO",
    add_hint: "",
    answer: "리얼로(진짜로)",
  },
  {
    id: 1,
    question: "갑분싸",
    length_hint: "OOO OOO OOOO",
    add_hint: "",
    answer: "갑자기 분위기 싸해지다",
  },
  {
    id: 2,
    question: "옥떨메",
    length_hint: "OOOO OOO OO",
    add_hint: "",
    answer: "옥상에서 떨어진 메주",
  },
  {
    id: 3,
    question: "소확행",
    length_hint: "OOOOO OOO OO",
    add_hint: "",
    answer: "소소하지만 확실한 행복",
  },
  {
    id: 4,
    question: "아더메치",
    length_hint: "OOOO OOO OOOO OOOO",
    add_hint: "",
    answer: "아니꼽고 더럽고 메스껍고 치사하다",
  },
  {
    id: 5,
    question: "우심뽀까",
    length_hint: "OO OOOO OOO OO",
    add_hint: "",
    answer: "우리 심심한데 뽀뽀나 할까",
  },
  {
    id: 6,
    question: "이생망",
    length_hint: "OO OO OOO",
    add_hint: "",
    answer: "이번 생은 망했다",
  },
  {
    id: 7,
    question: "우유남",
    length_hint: "OOO OOOO OO OO",
    add_hint: "",
    answer: "우월한 유전자를 가진 남자",
  },
  {
    id: 8,
    question: "장미단추",
    length_hint: "OOO OO OOO OO",
    add_hint: "",
    answer: "장거리 미남 단거리 추남",
  },
  {
    id: 9,
    question: "TMI",
    length_hint: "영어 - OOO OOOO OOOOOOOOOOO",
    add_hint: "",
    answer: "Too Much Information",
  },
  {
    id: 10,
    question: "특공대",
    length_hint: "OOO OOO OOO OOO",
    add_hint: "",
    answer: "특별히 공부도 못하는 대가리",
  },
  {
    id: 11,
    question: "영고",
    length_hint: "OOO OOOO",
    add_hint: "",
    answer: "영원히 고통받는",
  },
  {
    id: 12,
    question: "시강",
    length_hint: "OO OO",
    add_hint: "",
    answer: "시선 강탈",
  },
  {
    id: 13,
    question: "갈비",
    length_hint: "OOO OOO",
    add_hint: "",
    answer: "갈수록 비호감",
  },
  {
    id: 14,
    question: "워라밸",
    length_hint: "OO OOO OOO",
    add_hint: "",
    answer: "워크 라이프 밸런스",
  },
  {
    id: 15,
    question: "고답이",
    length_hint: "OOO OO OOO OOO OO",
    add_hint: "",
    answer: "고구마 먹은 것처럼 답답한 사람",
  },
  {
    id: 16,
    question: "음쓰봉",
    length_hint: "OOO OOO OO",
    add_hint: "",
    answer: "음식물 쓰레기 봉투",
  },
  {
    id: 17,
    question: "생선",
    length_hint: "OO OO",
    add_hint: "",
    answer: "생일 선물",
  },
  {
    id: 18,
    question: "좋못사",
    length_hint: "OO OO OOO",
    add_hint: "",
    answer: "좋다 못해 사랑해",
  },
  {
    id: 19,
    question: "넘사벽",
    length_hint: "OO OO OOOO O",
    add_hint: "",
    answer: "넘지 못할 사차원의 벽",
  },
  {
    id: 20,
    question: "간점",
    length_hint: "OOOO",
    add_hint: "",
    answer: "간주점프",
  },
  {
    id: 21,
    question: "주부애",
    length_hint: "OOO OOO OO",
    add_hint: "구조어",
    answer: "주먹을 부르는 애교",
  },
  {
    id: 22,
    question: "파파미",
    length_hint: "OO OO OO",
    add_hint: "",
    answer: "파도 파도 미담",
  },
  {
    id: 23,
    question: "롬곡옾눞",
    length_hint: "OOOO",
    add_hint: "",
    answer: "폭풍눈물",
  },
  {
    id: 24,
    question: "존모",
    length_hint: "OOO OO",
    add_hint: "",
    answer: "존댓말 모드",
  },
  {
    id: 25,
    question: "자만추",
    length_hint: "OOOOO OO OO",
    add_hint: "",
    answer: "자연스러운 만남 추구",
  },
  {
    id: 26,
    question: "제곧내",
    length_hint: "OOO O OO",
    add_hint: "",
    answer: "제목이 곧 내용",
  },
  {
    id: 27,
    question: "상스치콤",
    length_hint: "OOO OOOO OOOO OO",
    add_hint: "",
    answer: "상하이 스파이시 치킨버거 콤보",
  },
  {
    id: 28,
    question: "편도",
    length_hint: "OOO OOO",
    add_hint: "",
    answer: "편의점 도시락",
  },
  {
    id: 29,
    question: "이선좌",
    length_hint: "OO OOO OO",
    add_hint: "",
    answer: "이미 선택된 좌석",
  },
];

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