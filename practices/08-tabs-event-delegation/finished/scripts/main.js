{
  const tabContainer = document.querySelector('.tabs__container')
  const tabs = Array.from(tabContainer.querySelectorAll('.tab'))
  const tabContents = Array.from(tabContainer.querySelectorAll('.tab__content'))
  const SELECTED_CLASSNAME = 'is-selected'

  let selectedIndex = tabs.findIndex((tab) => tab.classList.contains(SELECTED_CLASSNAME))

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      if (selectedIndex > -1) {
        tabs.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
        tabContents.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
      }

      tabs.at(index).classList.add(SELECTED_CLASSNAME)
      tabContents.at(index).classList.add(SELECTED_CLASSNAME)
      
      selectedIndex = index
    })
  })
}