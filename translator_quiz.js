const quiz = [
  {
    id: 0,
    theme: "korean_movie",
    answer: "명량",
    length_hint: "OO",
    pronunciation: "myeonglyang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=myeonglyang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=myeonglyang",
  },
  {
    id: 1,
    theme: "korean_movie",
    answer: "극한직업",
    length_hint: "OOOO",
    pronunciation: "geughanjig-eob",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geughanjig-eob&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geughanjig-eob",
  },
  {
    id: 2,
    theme: "korean_movie",
    answer: "신과 함께 - 죄와 벌",
    length_hint: "OO OO - OO O",
    pronunciation: "singwa hamkke - joewa beol",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=singwa hamkke - joewa beol&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=singwa hamkke - joewa beol",
  },
  {
    id: 3,
    theme: "korean_movie",
    answer: "국제시장",
    length_hint: "OOOO",
    pronunciation: "gugjesijang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gugjesijang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gugjesijang",
  },
  {
    id: 4,
    theme: "korean_movie",
    answer: "도둑들",
    length_hint: "OOO",
    pronunciation: "dodugdeul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=dodugdeul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=dodugdeul",
  },
  {
    id: 5,
    theme: "korean_movie",
    answer: "7번 방의 선물",
    length_hint: "OO OO OO",
    pronunciation: "chilbeon bang-ui seonmul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=chilbeon bang-ui seonmul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=chilbeon bang-ui seonmul",
  },
  {
    id: 6,
    theme: "korean_movie",
    answer: "암살",
    length_hint: "OO",
    pronunciation: "amsal",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=amsal&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=amsal",
  },
  {
    id: 7,
    theme: "korean_movie",
    answer: "광해 왕이 된 남자",
    length_hint: "OO OO O OO",
    pronunciation: "gwanghae wang-i doen namja",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gwanghae wang-i doen namja&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gwanghae wang-i doen namja",
  },
  {
    id: 8,
    theme: "korean_movie",
    answer: "신과 함께 - 인과 연",
    length_hint: "OO OO - OO O",
    pronunciation: "singwa hamkke - ingwa yeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=singwa hamkke - ingwa yeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=singwa hamkke - ingwa yeon",
  },
  {
    id: 9,
    theme: "korean_movie",
    answer: "택시운전사",
    length_hint: "OOOOO",
    pronunciation: "taegsiunjeonsa",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=taegsiunjeonsa&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=taegsiunjeonsa",
  },
  {
    id: 10,
    theme: "korean_movie",
    answer: "부산행",
    length_hint: "OOO",
    pronunciation: "busanhaeng",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=busanhaeng&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=busanhaeng",
  },
  {
    id: 11,
    theme: "korean_movie",
    answer: "변호인",
    length_hint: "OOO",
    pronunciation: "byeonhoin",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=byeonhoin&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=byeonhoin",
  },
  {
    id: 12,
    theme: "korean_movie",
    answer: "해운대",
    length_hint: "OOO",
    pronunciation: "haeundae",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=haeundae&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=haeundae",
  },
  {
    id: 13,
    theme: "korean_movie",
    answer: "괴물",
    length_hint: "OO",
    pronunciation: "goemul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=goemul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=goemul",
  },
  {
    id: 14,
    theme: "korean_movie",
    answer: "왕의 남자",
    length_hint: "OO OO",
    pronunciation: "wang-ui namja",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=wang-ui namja&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=wang-ui namja",
  },
  {
    id: 15,
    theme: "korean_movie",
    answer: "기생충",
    length_hint: "OOO",
    pronunciation: "gisaengchung",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gisaengchung&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gisaengchung",
  },
  {
    id: 16,
    theme: "korean_movie",
    answer: "검사외전",
    length_hint: "OOOO",
    pronunciation: "geomsaoejeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geomsaoejeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geomsaoejeon",
  },
  {
    id: 17,
    theme: "korean_movie",
    answer: "설국열차",
    length_hint: "OOOO",
    pronunciation: "seolgug-yeolcha",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=seolgug-yeolcha&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=seolgug-yeolcha",
  },
  {
    id: 18,
    theme: "korean_movie",
    answer: "관상",
    length_hint: "OO",
    pronunciation: "gwansang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gwansang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gwansang",
  },
  {
    id: 19,
    theme: "korean_movie",
    answer: "해적: 바다로 간 산적",
    length_hint: "OO: OOO O OO",
    pronunciation: "haejeog: badalo gan sanjeog",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=haejeog: badalo gan sanjeog&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=haejeog: badalo gan sanjeog",
  },
  {
    id: 20,
    theme: "korean_movie",
    answer: "수상한 그녀",
    length_hint: "OOO OO",
    pronunciation: "susanghan geunyeo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=susanghan geunyeo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=susanghan geunyeo",
  },
  {
    id: 21,
    theme: "korean_movie",
    answer: "백두산",
    length_hint: "OOO",
    pronunciation: "baegdusan",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=baegdusan&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=baegdusan",
  },
  {
    id: 22,
    theme: "korean_movie",
    answer: "과속 스캔들",
    length_hint: "OO OOO",
    pronunciation: "gwasog seukaendeul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gwasog seukaendeul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gwasog seukaendeul",
  },
  {
    id: 23,
    theme: "korean_movie",
    answer: "국가대표",
    length_hint: "OOOO",
    pronunciation: "guggadaepyo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=guggadaepyo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=guggadaepyo",
  },
  {
    id: 24,
    theme: "korean_movie",
    answer: "공조",
    length_hint: "OO",
    pronunciation: "gongjo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gongjo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gongjo",
  },
  {
    id: 25,
    theme: "korean_movie",
    answer: "밀정",
    length_hint: "OO",
    pronunciation: "miljeong",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=miljeong&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=miljeong",
  },
  {
    id: 26,
    theme: "korean_movie",
    answer: "최종병기 활",
    length_hint: "OOOO O",
    pronunciation: "choejongbyeong-gi hwal",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=choejongbyeong-gi hwal&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=choejongbyeong-gi hwal",
  },
  {
    id: 27,
    theme: "korean_movie",
    answer: "1987",
    length_hint: "OOOO",
    pronunciation: "ilgupalchil",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ilgupalchil&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ilgupalchil",
  },
  {
    id: 28,
    theme: "korean_movie",
    answer: "내부자들",
    length_hint: "OOOO",
    pronunciation: "naebujadeul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=naebujadeul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=naebujadeul",
  },
  {
    id: 29,
    theme: "korean_movie",
    answer: "인천상륙작전",
    length_hint: "OOOOOO",
    pronunciation: "incheonsanglyugjagjeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=incheonsanglyugjagjeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=incheonsanglyugjagjeon",
  },
  {
    id: 30,
    theme: "korean_movie",
    answer: "은밀하게 위대하게",
    length_hint: "OOOO OOOO",
    pronunciation: "eunmilhage widaehage",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=eunmilhage widaehage&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=eunmilhage widaehage",
  },
  {
    id: 31,
    theme: "korean_movie",
    answer: "범죄도시",
    length_hint: "OOOO",
    pronunciation: "beomjoedosi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=beomjoedosi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=beomjoedosi",
  },
  {
    id: 32,
    theme: "korean_movie",
    answer: "곡성",
    length_hint: "OO",
    pronunciation: "gogseong",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gogseong&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gogseong",
  },
  {
    id: 33,
    theme: "korean_movie",
    answer: "화려한 휴가",
    length_hint: "OOO OO",
    pronunciation: "hwalyeohan hyuga",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=hwalyeohan hyuga&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=hwalyeohan hyuga",
  },
  {
    id: 34,
    theme: "korean_movie",
    answer: "좋은 놈, 나쁜 놈, 이상한 놈",
    length_hint: "OO O, OO O, OOO O",
    pronunciation: "joh-eun nom, nappeun nom, isanghan nom",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=joh-eun nom, nappeun nom, isanghan nom&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=joh-eun nom, nappeun nom, isanghan nom",
  },
  {
    id: 35,
    theme: "korean_movie",
    answer: "늑대소년",
    length_hint: "OOOO",
    pronunciation: "neugdaesonyeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=neugdaesonyeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=neugdaesonyeon",
  },
  {
    id: 36,
    theme: "korean_movie",
    answer: "군함도",
    length_hint: "OOO",
    pronunciation: "gunhamdo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gunhamdo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gunhamdo",
  },
  {
    id: 37,
    theme: "korean_movie",
    answer: "웰컴 투 동막골",
    length_hint: "OO O OOO",
    pronunciation: "welkeom tu dongmaggol",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=welkeom tu dongmaggol&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=welkeom tu dongmaggol",
  },
  {
    id: 38,
    theme: "korean_movie",
    answer: "사도",
    length_hint: "OO",
    pronunciation: "sado",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sado&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sado",
  },
  {
    id: 39,
    theme: "korean_movie",
    answer: "아저씨",
    length_hint: "OOO",
    pronunciation: "ajeossi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ajeossi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ajeossi",
  },
  {
    id: 40,
    theme: "korean_movie",
    answer: "미녀는 괴로워",
    length_hint: "OOO OOO",
    pronunciation: "minyeoneun goelowo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=minyeoneun goelowo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=minyeoneun goelowo",
  },
  {
    id: 41,
    theme: "korean_movie",
    answer: "전우치",
    length_hint: "OOO",
    pronunciation: "jeon-uchi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=jeon-uchi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=jeon-uchi",
  },
  {
    id: 42,
    theme: "korean_movie",
    answer: "연평해전",
    length_hint: "OOOO",
    pronunciation: "yeonpyeonghaejeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=yeonpyeonghaejeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=yeonpyeonghaejeon",
  },
  {
    id: 43,
    theme: "korean_movie",
    answer: "타짜",
    length_hint: "OO",
    pronunciation: "tajja",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=tajja&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=tajja",
  },
  {
    id: 44,
    theme: "korean_movie",
    answer: "청년경찰",
    length_hint: "OOOO",
    pronunciation: "cheongnyeongyeongchal",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=cheongnyeongyeongchal&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=cheongnyeongyeongchal",
  },
  {
    id: 45,
    theme: "korean_movie",
    answer: "숨바꼭질",
    length_hint: "OOOO",
    pronunciation: "sumbakkogjil",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sumbakkogjil&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sumbakkogjil",
  },
  {
    id: 46,
    theme: "korean_movie",
    answer: "덕혜옹주",
    length_hint: "OOOO",
    pronunciation: "deoghye-ongju",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=deoghye-ongju&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=deoghye-ongju",
  },
  {
    id: 47,
    theme: "korean_movie",
    answer: "감시자들",
    length_hint: "OOOO",
    pronunciation: "gamsijadeul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gamsijadeul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gamsijadeul",
  },
  {
    id: 48,
    theme: "korean_movie",
    answer: "검은 사제들",
    length_hint: "OO OOO",
    pronunciation: "geom-eun sajedeul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geom-eun sajedeul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geom-eun sajedeul",
  },
  {
    id: 49,
    theme: "korean_movie",
    answer: "안시성",
    length_hint: "OOO",
    pronunciation: "ansiseong",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ansiseong&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ansiseong",
  },
  {
    id: 50,
    theme: "korean_movie",
    answer: "의형제",
    length_hint: "OOO",
    pronunciation: "uihyeongje",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=uihyeongje&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=uihyeongje",
  },
  {
    id: 51,
    theme: "korean_movie",
    answer: "완득이",
    length_hint: "OOO",
    pronunciation: "wandeug-i",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=wandeug-i&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=wandeug-i",
  },
  {
    id: 52,
    theme: "korean_movie",
    answer: "완벽한 타인",
    length_hint: "OOO OO",
    pronunciation: "wanbyeoghan tain",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=wanbyeoghan tain&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=wanbyeoghan tain",
  },
  {
    id: 53,
    theme: "korean_movie",
    answer: "투사부일체",
    length_hint: "OOOOO",
    pronunciation: "tusabu-ilche",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=tusabu-ilche&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=tusabu-ilche",
  },
  {
    id: 54,
    theme: "korean_movie",
    answer: "독전",
    length_hint: "OO",
    pronunciation: "dogjeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=dogjeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=dogjeon",
  },
  {
    id: 55,
    theme: "korean_movie",
    answer: "추격자",
    length_hint: "OOO",
    pronunciation: "chugyeogja",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=chugyeogja&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=chugyeogja",
  },
  {
    id: 56,
    theme: "korean_movie",
    answer: "공작",
    length_hint: "OO",
    pronunciation: "gongjag",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gongjag&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gongjag",
  },
  {
    id: 57,
    theme: "korean_movie",
    answer: "바람과 함께 사라지다",
    length_hint: "OOO OO OOOO",
    pronunciation: "balamgwa hamkke salajida",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=balamgwa hamkke salajida&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=balamgwa hamkke salajida",
  },
  {
    id: 58,
    theme: "korean_movie",
    answer: "님아, 그 강을 건너지 마오",
    length_hint: "OO, O OO OOO OO",
    pronunciation: "nim-a, geu gang-eul geonneoji mao",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=nim-a, geu gang-eul geonneoji mao&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=nim-a, geu gang-eul geonneoji mao",
  },
  {
    id: 59,
    theme: "korean_movie",
    answer: "봉오동 전투",
    length_hint: "OOO OO",
    pronunciation: "bong-odong jeontu",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=bong-odong jeontu&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=bong-odong jeontu",
  },
  {
    id: 60,
    theme: "korean_movie",
    answer: "조선 명탐정: 각시투구꽃의 비밀",
    length_hint: "OO OOO: OOOOOO OO",
    pronunciation: "joseon myeongtamjeong: gagsitugukkoch-ui bimil",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=joseon myeongtamjeong: gagsitugukkoch-ui bimil&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=joseon myeongtamjeong: gagsitugukkoch-ui bimil",
  },
  {
    id: 61,
    theme: "korean_movie",
    answer: "군도: 민란의 시대",
    length_hint: "OO: OOO OO",
    pronunciation: "gundo: minlan-ui sidae",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gundo: minlan-ui sidae&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gundo: minlan-ui sidae",
  },
  {
    id: 62,
    theme: "korean_movie",
    answer: "남산의 부장들",
    length_hint: "OOO OOO",
    pronunciation: "namsan-ui bujangdeul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=namsan-ui bujangdeul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=namsan-ui bujangdeul",
  },
  {
    id: 63,
    theme: "korean_movie",
    answer: "범죄와의 전쟁: 나쁜 놈들 전성시대",
    length_hint: "OOOO OO: OO OO OOOO",
    pronunciation: "beomjoewaui jeonjaeng: nappeun nomdeul jeonseongsidae",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=beomjoewaui jeonjaeng: nappeun nomdeul jeonseongsidae&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=beomjoewaui jeonjaeng: nappeun nomdeul jeonseongsidae",
  },
  {
    id: 64,
    theme: "korean_movie",
    answer: "신세계",
    length_hint: "OOO",
    pronunciation: "sinsegye",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sinsegye&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sinsegye",
  },
  {
    id: 65,
    theme: "korean_movie",
    answer: "도가니",
    length_hint: "OOO",
    pronunciation: "dogani",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=dogani&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=dogani",
  },
  {
    id: 66,
    theme: "korean_movie",
    answer: "내 아내의 모든 것",
    length_hint: "O OOO OO O",
    pronunciation: "nae anaeui modeun geos",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=nae anaeui modeun geos&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=nae anaeui modeun geos",
  },
  {
    id: 67,
    theme: "korean_movie",
    answer: "나쁜 녀석들: 더 무비",
    length_hint: "OO OOO: O OO",
    pronunciation: "nappeun nyeoseogdeul: deo mubi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=nappeun nyeoseogdeul: deo mubi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=nappeun nyeoseogdeul: deo mubi",
  },
  {
    id: 68,
    theme: "korean_movie",
    answer: "가문의 영광",
    length_hint: "OOO OO",
    pronunciation: "gamun-ui yeong-gwang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gamun-ui yeong-gwang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gamun-ui yeong-gwang",
  },
  {
    id: 69,
    theme: "korean_movie",
    answer: "연가시",
    length_hint: "OOO",
    pronunciation: "yeongasi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=yeongasi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=yeongasi",
  },
  {
    id: 70,
    theme: "korean_movie",
    answer: "강철비",
    length_hint: "OOO",
    pronunciation: "gangcheolbi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gangcheolbi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gangcheolbi",
  },
  {
    id: 71,
    theme: "korean_movie",
    answer: "공공의 적",
    length_hint: "OOO O",
    pronunciation: "gong-gong-ui jeog",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gong-gong-ui jeog&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gong-gong-ui jeog",
  },
  {
    id: 72,
    theme: "korean_movie",
    answer: "아가씨",
    length_hint: "OOO",
    pronunciation: "agassi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=agassi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=agassi",
  },
  {
    id: 73,
    theme: "korean_movie",
    answer: "말아톤",
    length_hint: "OOO",
    pronunciation: "mal-aton",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=mal-aton&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=mal-aton",
  },
  {
    id: 74,
    theme: "korean_movie",
    answer: "용의자",
    length_hint: "OOO",
    pronunciation: "yong-uija",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=yong-uija&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=yong-uija",
  },
  {
    id: 75,
    theme: "korean_movie",
    answer: "건축학개론",
    length_hint: "OOOOO",
    pronunciation: "geonchughaggaelon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geonchughaggaelon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geonchughaggaelon",
  },
  {
    id: 76,
    theme: "korean_movie",
    answer: "7급 공무원",
    length_hint: "OO OOO",
    pronunciation: "chilgeub gongmuwon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=chilgeub gongmuwon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=chilgeub gongmuwon",
  },
  {
    id: 77,
    theme: "korean_movie",
    answer: "우리 생애 최고의 순간",
    length_hint: "OO OO OOO OO",
    pronunciation: "uli saeng-ae choegoui sungan",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=uli saeng-ae choegoui sungan&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=uli saeng-ae choegoui sungan",
  },
  {
    id: 78,
    theme: "korean_movie",
    answer: "박수건달",
    length_hint: "OOOO",
    pronunciation: "bagsugeondal",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=bagsugeondal&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=bagsugeondal",
  },
  {
    id: 79,
    theme: "korean_movie",
    answer: "조선 명탐정: 사라진 놈의 딸",
    length_hint: "OO OOO: OOO OO O",
    pronunciation: "joseon myeongtamjeong: salajin nom-ui ttal",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=joseon myeongtamjeong: salajin nom-ui ttal&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=joseon myeongtamjeong: salajin nom-ui ttal",
  },
  {
    id: 80,
    theme: "korean_movie",
    answer: "역린",
    length_hint: "OO",
    pronunciation: "yeoglin",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=yeoglin&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=yeoglin",
  },
  {
    id: 81,
    theme: "korean_movie",
    answer: "남한산성",
    length_hint: "OOOO",
    pronunciation: "namhansanseong",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=namhansanseong&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=namhansanseong",
  },
  {
    id: 82,
    theme: "korean_movie",
    answer: "암수살인",
    length_hint: "OOOO",
    pronunciation: "amsusal-in",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=amsusal-in&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=amsusal-in",
  },
  {
    id: 83,
    theme: "korean_movie",
    answer: "국가 부도의 날",
    length_hint: "OO OOO O",
    pronunciation: "gugga budoui nal",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gugga budoui nal&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gugga budoui nal",
  },
  {
    id: 84,
    theme: "korean_movie",
    answer: "쌍화점",
    length_hint: "OOO",
    pronunciation: "ssanghwajeom",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ssanghwajeom&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ssanghwajeom",
  },
  {
    id: 85,
    theme: "korean_movie",
    answer: "신기전",
    length_hint: "OOO",
    pronunciation: "singijeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=singijeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=singijeon",
  },
  {
    id: 86,
    theme: "korean_movie",
    answer: "귀향",
    length_hint: "OO",
    pronunciation: "gwihyang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gwihyang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gwihyang",
  },
  {
    id: 87,
    theme: "korean_movie",
    answer: "신의 한 수",
    length_hint: "OO O O",
    pronunciation: "sin-ui han su",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sin-ui han su&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sin-ui han su",
  },
  {
    id: 88,
    theme: "korean_movie",
    answer: "태풍",
    length_hint: "OO",
    pronunciation: "taepung",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=taepung&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=taepung",
  },
  {
    id: 89,
    theme: "korean_movie",
    answer: "부러진 화살",
    length_hint: "OOO OO",
    pronunciation: "buleojin hwasal",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=buleojin hwasal&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=buleojin hwasal",
  },
  {
    id: 90,
    theme: "korean_movie",
    answer: "끝까지 간다",
    length_hint: "OOO OO",
    pronunciation: "kkeutkkaji ganda",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=kkeutkkaji ganda&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=kkeutkkaji ganda",
  },
  {
    id: 91,
    theme: "korean_movie",
    answer: "그것만이 내 세상",
    length_hint: "OOOO O OO",
    pronunciation: "geugeosman-i nae sesang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geugeosman-i nae sesang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geugeosman-i nae sesang",
  },
  {
    id: 92,
    theme: "korean_movie",
    answer: "악인전",
    length_hint: "OOO",
    pronunciation: "ag-injeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ag-injeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ag-injeon",
  },
  {
    id: 93,
    theme: "korean_movie",
    answer: "이끼",
    length_hint: "OO",
    pronunciation: "ikki",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ikki&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ikki",
  },
  {
    id: 94,
    theme: "korean_movie",
    answer: "한반도",
    length_hint: "OOO",
    pronunciation: "hanbando",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=hanbando&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=hanbando",
  },
  {
    id: 95,
    theme: "korean_movie",
    answer: "포화속으로",
    length_hint: "OOOOO",
    pronunciation: "pohwasog-eulo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=pohwasog-eulo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=pohwasog-eulo",
  },
  {
    id: 96,
    theme: "korean_movie",
    answer: "시동",
    length_hint: "OO",
    pronunciation: "sidong",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sidong&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sidong",
  },
  {
    id: 97,
    theme: "korean_movie",
    answer: "마녀",
    length_hint: "OO",
    pronunciation: "manyeo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=manyeo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=manyeo",
  },
  {
    id: 98,
    theme: "korean_movie",
    answer: "탐정: 리턴즈",
    length_hint: "OO: OOO",
    pronunciation: "tamjeong: liteonjeu",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=tamjeong: liteonjeu&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=tamjeong: liteonjeu",
  },
  {
    id: 99,
    theme: "korean_movie",
    answer: "친절한 금자씨",
    length_hint: "OOO OOO",
    pronunciation: "chinjeolhan geumjassi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=chinjeolhan geumjassi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=chinjeolhan geumjassi",
  },
  {
    id: 100,
    theme: "korean_movie",
    answer: "감기",
    length_hint: "OO",
    pronunciation: "gamgi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gamgi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gamgi",
  },
  {
    id: 101,
    theme: "korean_movie",
    answer: "스물",
    length_hint: "OO",
    pronunciation: "seumul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=seumul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=seumul",
  },
  {
    id: 102,
    theme: "korean_movie",
    answer: "거북이 달린다",
    length_hint: "OOO OOO",
    pronunciation: "geobug-i dallinda",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geobug-i dallinda&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geobug-i dallinda",
  },
  {
    id: 103,
    theme: "korean_movie",
    answer: "오싹한 연애",
    length_hint: "OOO OO",
    pronunciation: "ossaghan yeon-ae",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ossaghan yeon-ae&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ossaghan yeon-ae",
  },
  {
    id: 104,
    theme: "korean_movie",
    answer: "방자전",
    length_hint: "OOO",
    pronunciation: "bangjajeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=bangjajeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=bangjajeon",
  },
  {
    id: 105,
    theme: "korean_movie",
    answer: "그놈 목소리",
    length_hint: "OO OOO",
    pronunciation: "geunom mogsoli",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geunom mogsoli&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geunom mogsoli",
  },
  {
    id: 106,
    theme: "korean_movie",
    answer: "친구",
    length_hint: "OO",
    pronunciation: "chingu",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=chingu&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=chingu",
  },
  {
    id: 107,
    theme: "korean_movie",
    answer: "식객",
    length_hint: "OO",
    pronunciation: "siggaeg",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=siggaeg&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=siggaeg",
  },
  {
    id: 108,
    theme: "korean_movie",
    answer: "26년",
    length_hint: "OOO",
    pronunciation: "isib-yugnyeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=isib-yugnyeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=isib-yugnyeon",
  },
  {
    id: 109,
    theme: "korean_movie",
    answer: "고지전",
    length_hint: "OOO",
    pronunciation: "gojijeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gojijeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gojijeon",
  },
  {
    id: 110,
    theme: "korean_movie",
    answer: "워낭소리",
    length_hint: "OOOO",
    pronunciation: "wonangsoli",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=wonangsoli&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=wonangsoli",
  },
  {
    id: 111,
    theme: "korean_movie",
    answer: "가장 보통의 연애",
    length_hint: "OO OOO OO",
    pronunciation: "gajang botong-ui yeon-ae",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gajang botong-ui yeon-ae&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gajang botong-ui yeon-ae",
  },
  {
    id: 112,
    theme: "korean_movie",
    answer: "말모이",
    length_hint: "OOO",
    pronunciation: "malmoi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=malmoi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=malmoi",
  },
  {
    id: 113,
    theme: "korean_movie",
    answer: "극비수사",
    length_hint: "OOOO",
    pronunciation: "geugbisusa",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=geugbisusa&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=geugbisusa",
  },
  {
    id: 114,
    theme: "korean_movie",
    answer: "표적",
    length_hint: "OO",
    pronunciation: "pyojeog",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=pyojeog&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=pyojeog",
  },
  {
    id: 115,
    theme: "korean_movie",
    answer: "너의 결혼식",
    length_hint: "OO OOO",
    pronunciation: "neoui gyeolhonsig",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=neoui gyeolhonsig&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=neoui gyeolhonsig",
  },
  {
    id: 116,
    theme: "korean_movie",
    answer: "내가 살인범이다",
    length_hint: "OO OOOOO",
    pronunciation: "naega sal-inbeom-ida",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=naega sal-inbeom-ida&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=naega sal-inbeom-ida",
  },
  {
    id: 117,
    theme: "korean_movie",
    answer: "부당거래",
    length_hint: "OOOO",
    pronunciation: "budang-geolae",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=budang-geolae&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=budang-geolae",
  },
  {
    id: 118,
    theme: "korean_movie",
    answer: "소원",
    length_hint: "OO",
    pronunciation: "sowon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sowon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sowon",
  },
  {
    id: 119,
    theme: "korean_movie",
    answer: "너는 내 운명",
    length_hint: "OO O OO",
    pronunciation: "neoneun nae unmyeong",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=neoneun nae unmyeong&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=neoneun nae unmyeong",
  },
  {
    id: 120,
    theme: "korean_movie",
    answer: "시라노: 연애 조작단",
    length_hint: "OOO: OO OOO",
    pronunciation: "silano: yeon-ae jojagdan",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=silano: yeon-ae jojagdan&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=silano: yeon-ae jojagdan",
  },
  {
    id: 121,
    theme: "korean_movie",
    answer: "곤지암",
    length_hint: "OOO",
    pronunciation: "gonjiam",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gonjiam&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gonjiam",
  },
  {
    id: 122,
    theme: "korean_movie",
    answer: "살인자의 기억법",
    length_hint: "OOOO OOO",
    pronunciation: "sal-injaui gieogbeob",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sal-injaui gieogbeob&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sal-injaui gieogbeob",
  },
  {
    id: 123,
    theme: "korean_movie",
    answer: "마파도",
    length_hint: "OOO",
    pronunciation: "mapado",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=mapado&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=mapado",
  },
  {
    id: 124,
    theme: "korean_movie",
    answer: "후궁: 제왕의 첩",
    length_hint: "OO: OOO O",
    pronunciation: "hugung: jewang-ui cheob",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=hugung: jewang-ui cheob&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=hugung: jewang-ui cheob",
  },
  {
    id: 125,
    theme: "korean_movie",
    answer: "탐정: 더 비기닝",
    length_hint: "OO: O OOO",
    pronunciation: "tamjeong: deo bigining",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=tamjeong: deo bigining&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=tamjeong: deo bigining",
  },
  {
    id: 126,
    theme: "korean_movie",
    answer: "지금 만나러 갑니다",
    length_hint: "OO OOO OOO",
    pronunciation: "jigeum mannaleo gabnida",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=jigeum mannaleo gabnida&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=jigeum mannaleo gabnida",
  },
  {
    id: 127,
    theme: "korean_movie",
    answer: "위험한 상견례",
    length_hint: "OOO OOO",
    pronunciation: "wiheomhan sang-gyeonlye",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=wiheomhan sang-gyeonlye&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=wiheomhan sang-gyeonlye",
  },
  {
    id: 128,
    theme: "korean_movie",
    answer: "보안관",
    length_hint: "OOO",
    pronunciation: "boangwan",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=boangwan&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=boangwan",
  },
  {
    id: 129,
    theme: "korean_movie",
    answer: "기술자들",
    length_hint: "OOOO",
    pronunciation: "gisuljadeul",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gisuljadeul&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gisuljadeul",
  },
  {
    id: 130,
    theme: "korean_movie",
    answer: "태극기 휘날리며",
    length_hint: "OOO OOOO",
    pronunciation: "taegeuggi hwinallimyeo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=taegeuggi hwinallimyeo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=taegeuggi hwinallimyeo",
  },
  {
    id: 131,
    theme: "korean_movie",
    answer: "1번가의 기적",
    length_hint: "OOOO OO",
    pronunciation: "ilbeongaui gijeog",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ilbeongaui gijeog&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ilbeongaui gijeog",
  },
  {
    id: 132,
    theme: "korean_movie",
    answer: "증인",
    length_hint: "OO",
    pronunciation: "jeung-in",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=jeung-in&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=jeung-in",
  },
  {
    id: 133,
    theme: "korean_movie",
    answer: "목격자",
    length_hint: "OOO",
    pronunciation: "moggyeogja",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=moggyeogja&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=moggyeogja",
  },
  {
    id: 134,
    theme: "korean_movie",
    answer: "조작된 도시",
    length_hint: "OOO OO",
    pronunciation: "jojagdoen dosi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=jojagdoen dosi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=jojagdoen dosi",
  },
  {
    id: 135,
    theme: "korean_movie",
    answer: "반창꼬",
    length_hint: "OOO",
    pronunciation: "banchangkko",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=banchangkko&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=banchangkko",
  },
  {
    id: 136,
    theme: "korean_movie",
    answer: "우리들의 행복한 시간",
    length_hint: "OOOO OOO OO",
    pronunciation: "ulideul-ui haengboghan sigan",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ulideul-ui haengboghan sigan&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ulideul-ui haengboghan sigan",
  },
  {
    id: 137,
    theme: "korean_movie",
    answer: "조선 명탐정: 흡혈괴마의 비밀",
    length_hint: "OO OOO: OOOOO OO",
    pronunciation: "joseon myeongtamjeong: heubhyeolgoemaui bimil",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=joseon myeongtamjeong: heubhyeolgoemaui bimil&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=joseon myeongtamjeong: heubhyeolgoemaui bimil",
  },
  {
    id: 138,
    theme: "korean_movie",
    answer: "화차",
    length_hint: "OO",
    pronunciation: "hwacha",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=hwacha&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=hwacha",
  },
  {
    id: 139,
    theme: "korean_movie",
    answer: "이웃사랑",
    length_hint: "OOOO",
    pronunciation: "ius-salang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ius-salang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ius-salang",
  },
  {
    id: 140,
    theme: "korean_movie",
    answer: "재심",
    length_hint: "OO",
    pronunciation: "jaesim",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=jaesim&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=jaesim",
  },
  {
    id: 141,
    theme: "korean_movie",
    answer: "화이: 괴물을 삼킨 아이",
    length_hint: "OO: OOO OO OO",
    pronunciation: "hwai: goemul-eul samkin ai",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=hwai: goemul-eul samkin ai&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=hwai: goemul-eul samkin ai",
  },
  {
    id: 142,
    theme: "korean_movie",
    answer: "의뢰인",
    length_hint: "OOO",
    pronunciation: "uiloein",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=uiloein&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=uiloein",
  },
  {
    id: 143,
    theme: "korean_movie",
    answer: "박열",
    length_hint: "OO",
    pronunciation: "bag-yeol",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=bag-yeol&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=bag-yeol",
  },
  {
    id: 144,
    theme: "korean_movie",
    answer: "미인도",
    length_hint: "OOO",
    pronunciation: "miindo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=miindo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=miindo",
  },
  {
    id: 145,
    theme: "korean_movie",
    answer: "음란서생",
    length_hint: "OOOO",
    pronunciation: "eumlanseosaeng",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=eumlanseosaeng&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=eumlanseosaeng",
  },
  {
    id: 146,
    theme: "korean_movie",
    answer: "내 생애 가장 아름다운 일주일",
    length_hint: "O OO OO OOOO OOO",
    pronunciation: "nae saeng-ae gajang aleumdaun ilju-il",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=nae saeng-ae gajang aleumdaun ilju-il&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=nae saeng-ae gajang aleumdaun ilju-il",
  },
  {
    id: 147,
    theme: "korean_movie",
    answer: "하녀",
    length_hint: "OO",
    pronunciation: "hanyeo",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=hanyeo&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=hanyeo",
  },
  {
    id: 148,
    theme: "korean_movie",
    answer: "황해",
    length_hint: "OO",
    pronunciation: "hwanghae",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=hwanghae&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=hwanghae",
  },
  {
    id: 149,
    theme: "korean_movie",
    answer: "7광구",
    length_hint: "OOO",
    pronunciation: "chilgwang-gu",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=chilgwang-gu&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=chilgwang-gu",
  },
  {
    id: 150,
    theme: "korean_movie",
    answer: "박쥐",
    length_hint: "OO",
    pronunciation: "bagjwi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=bagjwi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=bagjwi",
  },
  {
    id: 151,
    theme: "korean_movie",
    answer: "마당을 나온 암탉",
    length_hint: "OOO OO OO",
    pronunciation: "madang-eul naon amtalg",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=madang-eul naon amtalg&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=madang-eul naon amtalg",
  },
  {
    id: 152,
    theme: "korean_movie",
    answer: "악의 연대기",
    length_hint: "OO OOO",
    pronunciation: "ag-ui yeondaegi",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=ag-ui yeondaegi&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=ag-ui yeondaegi",
  },
  {
    id: 153,
    theme: "korean_movie",
    answer: "강남 1970",
    length_hint: "OO OOOO",
    pronunciation: "gangnam ilguchilgong",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=gangnam ilguchilgong&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=gangnam ilguchilgong",
  },
  {
    id: 154,
    theme: "korean_movie",
    answer: "신의 한 수: 귀수편",
    length_hint: "OO O O: OOO",
    pronunciation: "sin-ui han su: gwisupyeon",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=sin-ui han su: gwisupyeon&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=sin-ui han su: gwisupyeon",
  },
  {
    id: 155,
    theme: "korean_movie",
    answer: "나의 사랑 나의 신부",
    length_hint: "OO OO OO OO",
    pronunciation: "naui salang naui sinbu",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=naui salang naui sinbu&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=naui salang naui sinbu",
  },
  {
    id: 156,
    theme: "korean_movie",
    answer: "바르게 살자",
    length_hint: "OOO OO",
    pronunciation: "baleuge salja",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=baleuge salja&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=baleuge salja",
  },
  {
    id: 157,
    theme: "korean_movie",
    answer: "내 사랑 내 곁에",
    length_hint: "O OO O OO",
    pronunciation: "nae salang nae gyeot-e",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=nae salang nae gyeot-e&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=nae salang nae gyeot-e",
  },
  {
    id: 158,
    theme: "korean_movie",
    answer: "초능력자",
    length_hint: "OOOO",
    pronunciation: "choneunglyeogja",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=choneunglyeogja&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=choneunglyeogja",
  },
  {
    id: 159,
    theme: "korean_movie",
    answer: "명당",
    length_hint: "OO",
    pronunciation: "myeongdang",
    gfile_path:
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=myeongdang&tl=en",
    nfile_path: "",
    kfile_path:
      "https://tts-translate.kakao.com/read?format=wav-21k&lang=en&txt=myeongdang",
  },
];
