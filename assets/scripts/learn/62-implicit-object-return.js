// --------------------------------------------------------------------------
// 📌 암묵적인 객체 반환
// --------------------------------------------------------------------------

// 화살표 함수 표현식: 명시적 반환 vs. 암묵적 반환
;(() => {
  
  // 화살표 함수 표현식에서 명시적 반환 예시
  const queryAll = (selector, context = document) => {
    return context.querySelectorAll(selector)
  }

  const query = (...args) => {
    return queryAll(...args)[0]
  }

  console.log(queryAll('body *'))
  console.log(query('body *'))

  // 화살표 함수 표현식에서 암묵적 반환 예시
  const nthOfItem = (list, n) => list.at(n)
  const fisrtItem = (list) => nthOfItem(list, 0)
  const lastItem = (list) => nthOfItem(list, -1)

  const numbers = ['하나', '둘', '셋', '넷', '다섯']

  console.log(fisrtItem(numbers))
  console.log(nthOfItem(numbers, 3))
  console.log(lastItem(numbers))

})

// 화살표 함수 표현식: 암묵적 객체 반환
;(() => {
  
})()