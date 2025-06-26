;(() => {
  
  const carousel = document.querySelector('.carousel')
  
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = indicatorWrapper.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')
  
  const SELECTED_CLASSNAME = 'is-selected'

  setSelectedIndex()
  setLinkAccessControl()

  nextButton.addEventListener('click', handleNext)
  prevButton.addEventListener('click', handlePrev)
  
  for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
      handleIndicator(indicator)
    })
  }

  function setSelectedIndex() {
    let selectedIndex = -1

    for(let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }

    if (selectedIndex === -1) {
      contents.item(0).classList.add(SELECTED_CLASSNAME)
      indicators.item(0).classList.add(SELECTED_CLASSNAME)
      prevButton.hidden = true
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }

  }

  function setLinkAccessControl() {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    
    for (const content of contents) {
      if (content === selectedContent) {
        selectedContent.querySelector('a').setAttribute('tabindex', '0')
      } else {
        content.querySelector('a').setAttribute('tabindex', '-1')
      }
    }
  }

  function handleNext() {    
    setHiddenToReveal(prevButton)
    navigateContent('next')
    navigateIndicator('next')
    setLinkAccessControl()
  }

  function handlePrev() {
    setHiddenToReveal(nextButton)
    navigateContent('prev')
    navigateIndicator('prev')
    setLinkAccessControl()
  }

  function handleIndicator(indicator) {
    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME)

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    indicator.classList.add(SELECTED_CLASSNAME)

    let selectedIndex

    for (let i = 0, l = indicators.length; i < l; i++) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i
        break
      }
    }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)

    if(selectedIndex === 0) {
      prevButton.hidden = true
      nextButton.hidden = false
    } else if (selectedIndex === indicators.length - 1) {
      prevButton.hidden = false
      nextButton.hidden = true
    } else {
      prevButton.hidden = false
      nextButton.hidden = false
    }

    setLinkAccessControl()
    
  }

  function setHiddenToReveal(button) {
    if (button.hidden) button.hidden = false
  }

  function navigateContent(type) {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    let activeContent

    if (type === 'next') {
      activeContent = selectedContent.nextElementSibling
      if (!activeContent.nextElementSibling) nextButton.hidden = true
    } else {
      activeContent = selectedContent.previousElementSibling
      if (!activeContent.previousElementSibling) prevButton.hidden = true
    }

    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)
  }

  function navigateIndicator(type) {
    const selectedIndicator = indicatorWrapper.querySelector('.' + SELECTED_CLASSNAME)

    let activeIndicator

    if (type === 'next') {
      activeIndicator = selectedIndicator.nextElementSibling
    } else {
      activeIndicator = selectedIndicator.previousElementSibling
    }

    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    activeIndicator.classList.add(SELECTED_CLASSNAME)
  }

})()