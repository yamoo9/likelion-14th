{
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  settingTabindexControl()

  nextButton.addEventListener('click', () => {
    if (prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const nextContent = selectedContent.nextElementSibling

    if (!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty(
      'transform',
      'translateX(-' + distance + ')',
    )

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

    const selectedIndicator = indicatorWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const nextIndicator = selectedIndicator.nextElementSibling

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    nextIndicator.classList.add(SELECTED_CLASSNAME)

    settingTabindexControl()
  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty(
      'transform',
      'translateX(-' + distance + ')',
    )

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

    const selectedIndicator = indicatorWrapper.querySelector(
      '.' + SELECTED_CLASSNAME,
    )
    const prevIndicator = selectedIndicator.previousElementSibling

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)

    prevIndicator.classList.add(SELECTED_CLASSNAME)

    settingTabindexControl()
  })

  // forEach() or for...of 문 사용
  // 인디케이터 집합(수집한)을 순회해서 각 인디케이터 버튼에 이벤트 리스너 추가

  // 이벤트 위임 (Event Delegation)
  indicatorWrapper.addEventListener('click', (e) => {
    // const target = e.target

    // Element.closest(selector): Element
    // 엘리먼트(요소)를 포함한 조상에서 전달된 선택자와 일치하는 가장 가까운 요소 찾아서 반환
    // const indicatorButton = e.target.closest('.carousel__indicator')
    // if (indicatorButton) {

    // Element.matches(selector): boolean
    // 엘리먼트(요소)와 전달된 선택자가 매칭(일치)하는 지 여부를 검사해 불리언 값 반환
    if (e.target.matches('.carousel__indicator')) {
      const indicatorButton = e.target
      let selectedIndex

      for (let i = 0, l = indicators.length; i < l; i += 1) {
        if (indicators.item(i) === indicatorButton) {
          selectedIndex = i
          break
        }
      }

      if (selectedIndex === 0) {
        prevButton.hidden = true
        nextButton.hidden = false
      } else if (selectedIndex === indicators.length - 1) {
        prevButton.hidden = false
        nextButton.hidden = true
      } else {
        prevButton.hidden = false
        nextButton.hidden = false
      }

      const activeContent = contents.item(selectedIndex)
      const distance = getComputedStyle(activeContent).getPropertyValue('left')
      contentWrapper.style.setProperty(
        'transform',
        'translateX(-' + distance + ')',
      )

      const selectedContent = contentWrapper.querySelector(
        '.' + SELECTED_CLASSNAME,
      )
      selectedContent.classList.remove(SELECTED_CLASSNAME)
      activeContent.classList.add(SELECTED_CLASSNAME)

      const selectedIndicator = indicatorWrapper.querySelector(
        '.' + SELECTED_CLASSNAME,
      )
      selectedIndicator.classList.remove(SELECTED_CLASSNAME)
      indicatorButton.classList.add(SELECTED_CLASSNAME)

      settingTabindexControl()
    }

  })

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }

    if (selectedIndex === -1) {
      console.warn(
        '어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.',
      )
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

  function settingTabindexControl() {
    for (const content of contents) {
      if (content.classList.contains(SELECTED_CLASSNAME)) {
        content.querySelector('a').removeAttribute('tabindex')
      } else {
        content.querySelector('a').setAttribute('tabindex', '-1')
      }
    }
  }
}
