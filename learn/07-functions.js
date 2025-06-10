// console.log('함수(Function)')

// ------------------------------------------------------

// 함수란?
// 특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

// drawWater 함수 [
//   1. 빈 양동이 가져오기
//   2. 양동이 들고 우물로 이동하기
//   3. 우물에서 물 길어오기
//   4. 집으로 귀가하기
// ]

// drawWater 함수 부르기(call)
// drawWater 함수 부르기(call)
// drawWater 함수 r부르기(call)

// ------------------------------------------------------

// 함수 선언 (Function Declaration) 구문
function drawWater() {
  console.groupCollapsed('drawWater() 호출됨')
  console.log('1. 빈 양동이 가져오기')
  console.log('2. 양동이 들고 우물로 이동하기')
  console.log('3. 우물에서 물 길어오기')
  console.log('4. 집으로 귀가하기')
  console.groupEnd()
}

// ------------------------------------------------------

// 함수 사용 (Call Function)
// 재사용성 (Reusability)
// drawWater()

// 동사형태
// 함수를 "호출(실행)한다" 의미 - 약속된 규칙
// 함수기능()

// 함수 이름으로 기능을 유추해보세요.
// 직관적이고 쉬운 함수 이름이 잘 지어진 이름입니다!!!
// playMusic()
// stopMusic()
// pauseMusic()

// 적절하지 않은 함수 이름
// function return() {}
// function 2break() {}
// function conti    nue() {}
// function cla-----ss() {}
// function for() {}

// ------------------------------------------------------
// 함수 매개변수 (Function Parameters)

// 함수 밖에 있는 [ 전역 ] 변수 (global scope variables)
// 코드 실행 범위 어디서나 접근이 가능한 변수 
// let year = 4027

// 함수 선언
function writeDiary(year, month, day, location) {
  console.log(year + '년 ' + month + '월 ' + day + '일에 ' + location + '에 다녀온 일기를 쓴다.')
}

// 함수 호출(실행)
// 일기쓰기(연도, 월, 일, 장소)
writeDiary(2025, 6, 10, '서울 N 타워')
writeDiary(2025, 7, 1, '부산 광안리 해수욕장')
writeDiary(2025, 10, 30, '원주 디자인 뮤지엄')