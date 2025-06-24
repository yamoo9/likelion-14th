/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 유틸리티 함수 만들기
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// getStyle(element, propertyName, ?pseudoElement): propertyValue
function getStyle(element, propertyName, pseudoElement) {
  const elementStyles = getComputedStyle(element, pseudoElement)
  const propertyValue = elementStyles.getPropertyValue(propertyName)
  return propertyValue
}

// --------------------------------------------------------------------------
// setStyle(element, propertyName, propertyValue): element


// --------------------------------------------------------------------------
// css(element, propertyName, ?propertyValue): element

