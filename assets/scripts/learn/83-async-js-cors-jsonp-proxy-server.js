// --------------------------------------------------------------------------
// 📌 CORS | JSONP | Proxy Server
// --------------------------------------------------------------------------

// 참고: https://getjsonip.com/
const API_ENDPOINT = 'https://jsonip.com'


// CORS (Cross Origin Resource Sharing)
;(() => {

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(console.log)
    .catch(console.error)
})


// JSONP (JSON with Padding)
;(() => {

  jsonp(API_ENDPOINT, (response) => {
    console.log(response)
  })


  /**
   * JSONP를 사용해 API를 호출하는 함수
   * 
   * @param {string} url API 서버 주소
   * @param {string} fnName API 응답을 전달받을 함수 이름
   */
  function jsonp(url, callback) {    
    const fnName = `${url.replace(/^https:\/\/|\.[^./]+$/g, '')}Fn`

    const script = document.createElement('script')
    script.src = `${url}/${fnName}`

    script.addEventListener('error', () => {
      console.error('문제가 발생했습니다. 나중에 다시 시도해주세요.')
    })

    document.body.append(script)

    globalThis[fnName] = callback
  }
  
})


// Proxy Server (https://corsproxy.io/demo)
// - 무료로 사용할 경우, 로컬 테스트에서만 가능
// - 실제 서비스에서 사용할 경우, 유료(월 16,655원)
;(() => {

  fetchByProxy(API_ENDPOINT)
    .then(console.log)
    .catch(console.error)


  /**
   * 프록시 서버를 사용해 데이터를 페칭하는 함수
   * 
   * @param {string} url API 서버 주소
   * @returns {Promise<{ ip: string }>} IP 정보
   */
  function fetchByProxy(url) {
    return fetch(`https://corsproxy.io/?url=${url}`)
      .then((response) =>
        response.json().then((responseData) => {
          if (!response.ok) throw new Error(responseData.message)
          return responseData
        }),
      )
  }

})