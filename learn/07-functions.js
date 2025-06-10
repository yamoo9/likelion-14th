// console.log('함수(Function)')

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

// 함수 선언 (Function Declaration) 구문
function drawWater() {
    console.groupCollapsed('drawWater() 호출됨')
        console.log('1. 빈 양동이 가져오기')
        console.log('2. 양동이 들고 우물로 이동하기')
        console.log('3. 우물에서 물 길어오기')
        console.log('4. 집으로 귀가하기')
    console.groupEnd()
}

// 함수 사용 (Call Function)
// 재사용성 (Reusability)
drawWater()

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