{
  // 브라우저의 기본 작동 확인
  // href 속성을 가진 요소 클릭 시, 연결
  // checkbox 요소를 클릭 시, 체크 상태 변경
  // form 내부의 submit 버튼 이벤트 발동

  const aLink = document.querySelector('a[href="https://naver.com"]')

  aLink.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('브라우저 기본 작동 방지')
  })
}