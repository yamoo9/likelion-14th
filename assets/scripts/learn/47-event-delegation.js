// --------------------------------------------------------------------------
// 📌 이벤트 위임 (Event Delegation)
// --------------------------------------------------------------------------

// 요소 집합 루프(반복, 순환)하여 이벤트 리스너를 각각 추가
// 이벤트 리스너 5개 생성
;(() => {
  const linkList = document.querySelector('.link-list')
  const links = linkList.querySelectorAll('a')

  links.forEach((link, index) => {
    const listener = (e) => {
      console.log(index + 1) // 1, 2, 3, 4, 5
      // 브라우저 기본 작동 방지
      if (!e.defaultPrevented) e.preventDefault()

      const aElement = e.currentTarget
      console.log(aElement.getAttribute('href'))
    }

    link.addEventListener('click', listener)
  })

})

// 이벤트 대상
;(() => {

  const linkList = document.querySelector('.link-list')
  
  linkList.addEventListener('click', (e) => {
    if (!e.defaultPrevented) e.preventDefault()

    console.log('e.currentTarget = ', e.currentTarget) // 이벤트 리스너를 추가한 대상(요소)
    console.log('e.target =', e.target) // ???
  })

})

// 이벤트 위임 + 이벤트 대상 확인에 따른 조건 처리
// 단 1개의 이벤트 리스너 생성
;(() => {

  const linkList = document.querySelector('.link-list')
  
  linkList.addEventListener('click', (e) => {
    if (!e.defaultPrevented) e.preventDefault()
    const target = e.target

    if(target.localName === 'a') {
      // console.log('<a> 요소를 클릭했습니다.')
      console.log(target.getAttribute('href'))
    }

    // console.log(target.nodeName)  // 'A', 'LI', 'UL'
    // console.log(target.nodeName.toLowerCase())  // 'a', 'li', 'ul'
    // console.log(target.localName) // 'a', 'li', 'ul'
    
    // if(target.localName === 'li') {
    //   console.log('<li> 요소를 클릭했습니다.')
    // }
    
    // if(target.localName === 'ul') {
    //   console.log('<ul> 요소를 클릭했습니다.')
    // }

  })

})()