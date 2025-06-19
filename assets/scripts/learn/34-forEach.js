// --------------------------------------------------------------------------
// 📌 forEach() 배열 메서드
// --------------------------------------------------------------------------

const numbers = [10, 9, 8, 7]

// for 문 vs. forEach()

// for 문
;(() => {
  // 문(Statement) -> 값이 나오지 않는다.
  for(let i = 0, l = numbers.length; i<l; ++i) {
    const number = numbers[i]
    console.log(i, number)
  }
})

// .forEach()
;(() => {
  // 표현식(Expression) -> 값이 나온다. 
  // array.forEach((item, index, array) => {})
  numbers.forEach((number, i) => {
    console.log(i, number)
  })
})