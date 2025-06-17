const button1 = document.querySelector('.button-1')
const button2 = document.querySelector('.button-2')

click(document.querySelector('.button-1'), () => console.log('button 1'))
click(document.querySelector('.button-2'), () => console.log('button 2'))

const handleClick = () => console.log('clicked button')
// button.addEventListener('click', handleClick)

// click(button1, handleClick)
// click(button2, handleClick)

function click(element, listener) {
  element.addEventListener('click', listener)
}

// --------------------------------------------------------------------------

function callToAction(callback) {
  callback()
}

// callToAction(() => {
//   console.log('콜백은 다른 함수에 인수로 전달되는 함수를 말합니다.')
// })
