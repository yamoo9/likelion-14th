// --------------------------------------------------------------------------
// 📌 루프(Loop)
// --------------------------------------------------------------------------

// draw()
// draw()
// draw()
// draw()
// draw()

// const numbers = [100, 99, 98, 97]
// console.log(numbers)

// --------------------------------------------------------------------------
// if 문 vs. while 문

;(() => {
  let wantToDraw = true

  // 조건문
  // 조건이 참이면 블록 내부의 코드 한 번 수행
  if (wantToDraw) {
    console.log('if문')
    draw()
  }

  // 루프(반복)문 
  // 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
  // 특정 상황(조건) 설정
  let i = 10

  while(wantToDraw) {
    console.log('while문')
    draw()

    // 특정 상황이 일치되는 경우
    if(i-- <= 0) { // 선감소(--i): i = 9  / 후감소(i--) i = 10
      // 조건을 참에서 거짓으로 변경
      wantToDraw = false
      console.log('i =', i, 'wantToDraw =', wantToDraw)
    } else {
      // i = i - 1
      // i -= 1 // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
      
      // 후감소
      // i--
      
      // 선감소
      // --i
      
      console.log('i =', i)
    }
  }
})

// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)
// "1부터 10까지 숫자를 입력하세요"

// window.prompt('message')
// Number.parseInt(value, ?radix)
// Number.isNaN(value)

;(() =>{
  let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)

  while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
    console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
    userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10)
  }

  console.log('사용자가 입력한 값은 ' + userInput + '입니다.')
})

// --------------------------------------------------------------------------
// 흐름 제어 (continue, break)

;(() => {
  
  let drawCount = 20
  let i = 0

  const draw = (n) => {
    console.log('도화지에 그림을 그린 횟수 = ' + n)
  }

  while(i++ < drawCount /* 1 ~ 10 -> continue -> 16 ~ 19 */) {
    // i += 1
    // ++i
    // i++

    // i = 10
    if (i > 10 && i <= 15) {
      continue
    }

    draw(i)
  }

  console.log('last i =', i)

})()