/* eslint-disable no-unused-vars */

function getStyle(element, propertyName, pseudoElement) {
  const elementStyles = getComputedStyle(element, pseudoElement)
  const propertyValue = elementStyles.getPropertyValue(propertyName)
  return propertyValue
}

function setStyle(element, propertyName, propertyValue) {
  element.style.setProperty(propertyName, propertyValue)
  return element
}

function css(element, propertyName, propertyValue, pseudoElement) {
  if (propertyValue) {
    const styledElement = setStyle(element, propertyName, propertyValue)
    return styledElement
  } else {
    const propertyValue = getStyle(element, propertyName, pseudoElement)
    return propertyValue
  }
}
