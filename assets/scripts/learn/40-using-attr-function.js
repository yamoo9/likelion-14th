{
  // attr 유틸리티 함수 작성 및 활용
  // attr(element, attributeName, ?attributeValue)
  // 속성 쓰기
  // const changedElement = attr(element, attributeName, attributeValue)
  // 속성 읽기
  // const attributeValue = attr(element, attributeName)

  const h1 = document.querySelector('h1')
  
  // 속성 추가(쓰기)
  // - id="heading"
  // h1.id = 'headline' // 옛날 방식
  h1.setAttribute('id', 'heading')

  // - class="headline headline__level--1"
  // h1.className = 'headline headline__level--1' // 옛날 방식
  h1.setAttribute('class', 'headline')
  h1.classList.add('headline__level--1')
  
  // - title="자바스크립트"
  // h1.title = '자바스크립트' // 옛날 방식
  h1.setAttribute('title', '자바스크립트')

  // - data-role="headline"
  h1.setAttribute('data-role', 'headline')

  // - data-level="1"
  h1.setAttribute('data-level', '1')

  // h1 요소에 mouseenter 이벤트 리스너 추가
  h1.addEventListener('mouseenter', () => {  
    // 속성 읽기
    // - id
    // console.log(h1.id) // 옛날 방식
    console.log(h1.getAttribute('id'))
    
    // - class
    // console.log(h1.className) // 옛날 방식
    console.log(h1.getAttribute('class'))
    console.log(h1.classList.value)

    // - title
    // console.log(h1.title) // 옛날 방식
    console.log(h1.getAttribute('title'))

    // - data-role
    console.log(h1.getAttribute('data-role'))
    
    // - data-level
    console.log(h1.getAttribute('data-level'))
  })

}