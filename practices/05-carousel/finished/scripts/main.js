/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 캐러셀(Carousel) 컴포넌트 만들기
// --------------------------------------------------------------------------

// 1. 문서에서 제어할 대상 요소 선택(찾기)
;(() => {
  
  // 캐러셀 컴포넌트 찾기
  const carousel = document.querySelector('.carousel')

  // 캐러셀 컨텐츠 래퍼
  const contentWrapper = carousel.querySelector('.carousel__contents')

  // 이전 탐색 버튼 찾기
  const prevButton = carousel.querySelector('[aria-label^="이전"]')

  // 다음 탐색 버튼 찾기
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

})

// 2. 상태 클래스 이름 상수로 설정
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  // 활성 상태를 나타내는 클래스 이름 지정 (유지 보수 고려)
  const SELECTED_CLASSNAME = 'is-selected'

})

// 3-1. 현재/다음 콘텐츠 탐색 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  // 다음 탐색 버튼 클릭 이벤트 리스너 추가
  // 구현할 기능은 다음 콘텐츠 탐색
  // - 현재/다음 콘텐츠 탐색
  nextButton.addEventListener('click', () => {
    // console.log('다음 콘텐츠 탐색')

    // 현재 선택된 콘텐츠 찾기
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)

    // 다음에 선택될 콘텐츠 탐색
    const nextContent = selectedContent.nextElementSibling
    console.log(nextContent)

  })

})

// 3-2. 다음 콘텐츠로 이동 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling
    
    // 다음 콘텐츠로 이동
    // 다음 콘텐츠의 브라우저에 의해 계산된 너비 값을 읽기
    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    
    // 콘텐츠들을 감싼 래퍼에 transform 인라인 스타일 설정 (예: -800px, -1600px)
    // contentWrapper.style.setProperty('transform', 'translateX(-'+'800px'+')')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')
  })

})

// 3-3. 선택된 상태 변경 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling
    
    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    // 선택된 상태 변경
    // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    // 현재 선택된 콘텐츠에 활성 상태 클래스 이름 추가
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 3-4. 다음 탐색 버튼 감춤 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling
    
    // 다음 탐색 버튼 감춤
    // if(!nextContent.nextElementSibling) {
    //   console.log('다음에 표시될 콘텐츠는 존재하지 않아요')
    //   nextButton.hidden = true
    // }

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 4-1. 현재/이전 콘텐츠 탐색 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    // 현재 선택된 콘텐츠 찾기
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    // 선택된 콘텐츠의 이전 콘텐츠 탐색
    const prevContent = selectedContent.previousElementSibling

  })

})

// 4-2. 이전 콘텐츠로 이동 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    // 이전 콘텐츠로 이동
    // prevContent로부터 거리를 계산해서 가져와야 함
    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    // contentWrapper에 transform 스타일 지정
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

  })

})

// 4-3. 선택된 상태 변경 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    // 선택된 상태 변경
    // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    // 현재 선택된 콘텐츠에 활성 상태 클래스 이름 추가
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 4-4. 이전 탐색 버튼 감춤 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    // 이전 탐색 버튼 감춤
    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 5. 이전/다음 탐색 버튼 표시 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    // 사용자가 다음 탐색 버튼을 누르면
    // 이전 탐색 버튼의 hidden 속성 값이 true인지 확인해서
    // 만약 그 값이 true라면? hidden 속성 값을 false로 변경해라.
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  // 이전 탐색 버튼을 사용자가 눌렀을 때
  prevButton.addEventListener('click', () => {
    // 만약 다음 탐색 버튼의 hidden 속성 값이 true라면?
    if (nextButton.hidden) {
      // console.log('다음 탐색 버튼의 hidden 속성이 true에요!')
      // 다음 탐색 버튼의 hidden 속성 값을 false로 설정해라.
      nextButton.hidden = false
    }

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

})()