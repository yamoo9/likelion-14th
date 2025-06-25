/* eslint-disable no-unused-vars */
{
  // --------------------------------------------------------------------------
  // 📌 DOM 탐색(Traversing)
  // --------------------------------------------------------------------------
  
  const starWars = document.getElementById('star-wars')
  
  // querySelector()
  const ai = starWars.querySelector('i')
  // console.log(ai)

  // querySelectorAll()
  const characters = starWars.querySelectorAll('.character') // NodeList
  // console.log('자식들', characters)

  // children
  const children = starWars.children // HTMLCollection
  // console.log('자식들:', children)

  // 배열화 (배열 객체로 변경)
  // console.log(Array.from(characters), Array.isArray(Array.from(characters)))
  // console.log(Array.from(children), Array.isArray(Array.from(children)))

  // firstChild
  // console.log('첫번째 노드 자식 (노드 타입: ??)', starWars.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling) // 1 = 요소, 2 = 속성, 3 = 텍스트
  // firstElementChild
  console.log('첫번째 요소 노드 자식', starWars.firstElementChild)

  // lastChild
  // lastElementChild
  console.log('마지막 요소 노드 자식', starWars.lastElementChild)
}