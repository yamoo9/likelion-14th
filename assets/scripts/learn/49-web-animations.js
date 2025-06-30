// --------------------------------------------------------------------------
// 📌 웹 애니메이션
// --------------------------------------------------------------------------
// 1. CSS Transitions
// 2. CSS Animations
// 3. JavaScript Animations
// --------------------------------------------------------------------------

;(() => {
  
  const ballElement = document.querySelector('.ball')
  // const TRANSITION_CLASSNAME = 'is-transition'
  
  // Mouse Click Event + className toggling
  // 마우스로 볼(ball) 요소를 클릭하면 활성 상태로 전환
  // 마우스로 볼(ball) 요소를 다시 클릭하면 이전 상태로 전환
  ballElement.addEventListener('click', (e) => {

    // style 속성을 사용해 속성의 상태 변경
    // 트랜지션 트리거
    const ball = e.currentTarget

    ball.style.setProperty('--fill', '#e54d26')
    ball.style.setProperty('--size', '100px')

    // ball.classList.toggle(TRANSITION_CLASSNAME)
    
    // if (ball.classList.contains(TRANSITION_CLASSNAME)) {
    //   ball.classList.remove(TRANSITION_CLASSNAME)
    // } else {
    //   ball.classList.add(TRANSITION_CLASSNAME)
    // }
  })

  // Mouse Enter/Leave Events
  // ballElement.addEventListener('mouseenter', (e) => {
  //   e.currentTarget.classList.add(TRANSITION_CLASSNAME)
  // })
  // ballElement.addEventListener('mouseleave', (e) => {
  //   e.currentTarget.classList.remove(TRANSITION_CLASSNAME)
  // })
  
})()