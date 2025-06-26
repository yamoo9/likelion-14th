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

})()