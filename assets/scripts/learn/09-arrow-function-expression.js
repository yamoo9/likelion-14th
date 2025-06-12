// --------------------------------------------------------------------------
// 📌 화살표 함수 표현식 (Arrow Function Expression)
// --------------------------------------------------------------------------

// JavaScript 함수를 만드는 방법 3가지

// 1. 함수 선언
function showMeTheMoney() {
  console.log('show me the money')
}

// showMeTheMoney()

// 2. 함수 표현식
let lookAndMe = function () {
  console.log('look and me')
}

// lookAndMe()

// 3. 화살표 함수 표현식
// let readABook = (bookName) => {
//   console.log('"' + bookName + '"을 읽다.')
// }

// readABook('한 여름 밤의 꿈')
// readABook('로미오와 줄리엣')

// --------------------------------------------------------------------------
// 다양한 화살표 함수 구문
// --------------------------------------------------------------------------

// 1. 매개변수의 갯수
//    1개인 경우에는 소괄호 생략 가능하다.

//    0개
// let readABook = () => {
//   console.log('"책"을 읽다.')
// }

// 자바스크립트 월드 사람들의 관례
// 매개변수를 사용하지 않을 경우, 관례적으로 밑줄(_)을 사용한다.
// let readABook = _ => {
//   console.log('"책"을 읽다.')
// }

// readABook()

//    1개면 소괄호 생략 가능
// let readABook = (bookName) => {
//   console.log('"' + bookName + '"을 읽다.')
// }

// let readABook = bookName => {
//   console.log('"' + bookName + '"을 읽다.')
// }

// readABook('오만과 편견')

//    2개 이상인 경우, 소괄호 생략을 허용하지 않는다.

let readABook = (bookName, day) => {
  console.log(day + '일에 걸쳐 ' + '"' + bookName + '"을 읽다.')
}

readABook('오만과 편견', 21)

// 2. 암묵적 반환
//    return undefined (암묵적 반환, 기본 반환)
//    return 값 (명시적 반환)

const ROOT_FONT_SIZE = 16

// 함수 선언
// function px2rem(pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 함수 표현식
// let px2rem = function (pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 1 (기본 화살표 함수 표현식)
// let px2rem = (pxValue) => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 2 (매개변수 1개: 소괄호 생략)
// let px2rem = pxValue => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 3 (암묵적 반환)
// let px2rem = pxValue => {
//   let remValue = pxValue / ROOT_FONT_SIZE + 'rem'
//   return remValue
// }

let pxToRem = function (pxValue) {
  return pxValue / ROOT_FONT_SIZE + 'rem'
}

// let px2rem = pxValue => pxValue / ROOT_FONT_SIZE + 'rem'
let px2rem = (pxValue) => pxValue / ROOT_FONT_SIZE + 'rem'

// console.log(px2rem(28))

// 객체를 반환하는 함수
// 함수 선언
// function getStyles() {
//   let cssStyles = {
//     'display': 'grid',
//     'row-gap': 24
//   }

//   return cssStyles
// }

// 함수 표현식
// let getStyles = function () {
//   let cssStyles = {
//     'display': 'grid',
//     'row-gap': 24
//   }

//   return cssStyles
// }

// 화살표 함수 표현식
let getStyles1 = (_) => {
  return {
    'display': 'grid',
    'row-gap': 24,
  }
}

// let getStyles = _ => (객체값에중괄호가포함되면문법오류)
let getStyles = () => ({
  'display': 'grid',
  'row-gap': 24,
})

// function getStyles() {
//   return {
//     'display': 'grid',
//     'row-gap': 24
//   }
// }

console.log(getStyles())

// 왜 함수를 화살표 함수 표현식으로 사용할 때
// let이 아닌, const를 사용했을까?

// const를 사용해야 하는 경우
// 값 또는 데이터 타입이 변경되어서는 안될 때

// 예) 게임 레벨(level)은 게임 진행에 따라 값이 변경되어야 하므로 변수여야 합니다.
let 게임_레벨 = 1

// 예) 게임 캐릭터(character)는 게임 진행과 상관 없이 처음 설정한 그대로 유지되어야 합니다.
const 게임_캐릭터 = {
  '이름': '네반(Neamhain)',
  '소개': '신의 힘을 다루는 정체불명의 성기사',
  '사용 무기': '홀리파이크',
  '전투 특성': '마법, 묵직함, 반격',
}

게임_캐릭터 = null // ERROR

const thisIsAFunction = () => {
  console.log('이것은 함수 입니다.')
}

thisIsAFunction = {}

// console.log(thisIsAFunction)

thisIsAFunction()
