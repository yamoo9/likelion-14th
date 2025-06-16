// 문서에 있는 버튼 요소에 접근(찾기)
// 전역 변수에 참조(왜? 객체 타입이니까)
const button = document.querySelector('button.clickable')

// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 전달될 함수 (나중에 실행되도록)
// 이벤트 = 언제 발생할 지 알 수 없음 (비동기)
// button.addEventListener('click', () => {
//   document.body.classList.toggle('is-active')
// })

// addEventListener()를 사용해 리스너를 추가하는 것은 x N회 가능
// button.addEventListener('click', () => {
//   button.classList.toggle('is-active')
// })


// 레거시 이벤트 vs. 모던 이벤트 모델
// 변수에는 여러 값을 저장할 수 있다? 아니다 변수는 단 하나의 값만 저장할 수 있다?

button.onclick = function() {
  document.body.classList.toggle('is-active')
}

button.onclick = function() {
  button.classList.toggle('is-active')
}