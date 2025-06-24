/* eslint-disable no-undef */
{
  const tester = document.querySelector('h1')
  
  const fontWeightValue = getStyle(tester, 'content', '::before')
  console.log(fontWeightValue)

}