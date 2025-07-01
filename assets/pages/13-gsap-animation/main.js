// GSAP - Getting Started
;(() =>{

  // Web Animations API
  function playground() {

    const boxElements = document.querySelectorAll('.box')

    const keyframes = [
      { translate: '0 0' },
      { translate: '80vw 0' },
    ]
    
    const options = {
      duration: 1000,
      fill: 'forwards',
    }

    boxElements.forEach((element) => {
      const animation = element.animate(keyframes, options)
      animation.pause()
      // animation.play()
    })
    
  }

  /* global gsap */

  // GSAP API
  // gsap.to(target, varObject)
  // gsap.to(selector, varObject)
  // gsap.to(htmlElement, varObject)
  // gsap.to([htmlElement1, ...], varObject)
  // gsap.to(svgElement, varObject)
  // gsap.to(jsObject, varObject)
  function playgroundGSAP() {
    // Tween Animation

    // to(target, vars)
    // gsap.to('.box', { x: '80vw' })
    // gsap.to(['.box', '.term'], { x: 400 })
    // gsap.to('.box', {
    //   xPercent: 100,
    //   yPercent: 100,
    //   duration: 3,
    //   rotation: 360,
    //   transformOrigin: 'center bottom',
    // })

    // from(target, vars)
    // gsap.from('.box', {
    //   opacity: 0,
    //   xPercent: 50,
    //   y: -200,
    //   rotation: 360,
    //   scale: 4,
    //   repeat: -1,
    //   delay: 1,
    //   repeatDelay: 1,
    //   yoyo: true,
    // })

    // fromTo(target, vars1, vars2)
    // gsap.fromTo('.box', { x: 400, y: -400 }, { x: 10, y: 50 })

    // set(target, vars)
    // gsap.set('.box', { x: 400, y: -200 })

    // targets

    // gsap.to('.box', { x: 200 })
    // gsap.to(document.querySelector('.box'), { x: 200 })
    // gsap.to(document.querySelectorAll('.box'), { x: 200 })
    // gsap.to(Array.from(document.querySelectorAll('.box')), { x: 200 })

    // vars
    // SVG 요소
    // gsap.to('.svgBox', {
    //   attr: {
    //     rx: 40,
    //     fill: 'red'
    //   }
    // })

    // JavaScript 객체
    const o = {
      num: 0,
      color: 'yellow'
    }

    const output = document.querySelector('output')
    
    const renderCount = () => {
      output.value = Math.round(o.num)
      output.style.setProperty('color', o.color)
    }

    gsap.to(o, {
      num: 100,
      color: 'cyan',
      duration: 3,
      // repeat: -1,
      // yoyo: true,
      // ease: 'power4.in',
      // ease: 'power4.out',
      // ease: 'power4.inOut',
      // ease: 'back.out',
      // ease: 'bounce',
      ease: 'steps(7)',
      onUpdate: renderCount,
      onComplete: () => {
        // console.log('finished gsap animation')
        // gsap.set(output, { opacity: 0 })
      }
    })

    // delay
    // repeatDelay
    // gsap.to('.box:first-of-type', {
    //   rotation: 360,
    //   duration: 1,
    //   repeat: 1,
    //   repeatDelay: 1,
    // })
    
    // gsap.to('.box.yellow', { rotation: 360, duration: 1, delay: 1 })

    // Canvas Animation
    // const canvasElement = document.querySelector('.canvas')
    // const canvas = canvasElement.getContext('2d')
    // canvas.fillStyle = '#d0d0d0'

    // const position = { x: 0, y: 0 }

    // function draw() {
    //   canvas.clearRect(0, 0, 400, 400)
    //   canvas.fillRect(position.x, position.y, 100, 100);
    // }

    // gsap.to(position, { 
    //   x: 300, 
    //   y: 300, 
    //   duration: 1,
    //   ease: 'back.inOut(7)',
    //   onUpdate: draw 
    // })

    // Easing
    // none
    // power(1,2,3,4).in
    // power(1,2,3,4).out
    // power(1,2,3,4).inOut

  }

  setTimeout(() => {
    playground()
    playgroundGSAP()
  }, 500)
})

// GSAP - Stagger
;(() => {

  function animate() {

    // gsap.from('.blue', { y: 100, opacity: 0, duration: 1 })
    // gsap.from('.yellow', { y: 100, opacity: 0, duration: 1, delay: 1 })
    // gsap.from('.green', { y: 100, opacity: 0, duration: 1, delay: 2 })

    gsap.from('.box', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power1.out',
    })

    // 이벤트 위임(Event Delegation)
    document.querySelector('main')
      .addEventListener('click', (e) => {
        if (e.target.matches('.box')) {
          gsap.to('.box', {
            y: -100,
            opacity: 0,
            scale: 1.2,
            // repeat: -1, // 1번, 5번, -1 무한

            // stagger: 0.1,

            stagger : {
              each: 0.3,
              repeat: 5,
              yoyo: true,
            },

            // stagger: (index, target, /* list */) => {
            //   // return index * 0.2 // 0, 0.2, 0.4
            //   // return index * 0.4 // 0, 0.4, 0.8

            //   if (target.matches('.green')) {
            //     return 1.5
            //   } else {
            //     return index * 0.2
            //   }
            // },
            ease: 'power4.out',

            // Callbacks
            onStart: () => { console.log('start') },
            onUpdate: () => { console.log('update') },
            onComplete: () => { console.log('complete') },
          })
        }
      })

    // 루프문 사용
    // const boxes = document.querySelectorAll('.box')
    // for (const box of boxes) {
    //   box.addEventListener('click', () => {
    //     gsap.to('.box', {
    //       y: -100,
    //       opacity: 0,
    //       scale: 1.2,
    //       stagger: 0.1,
    //       ease: 'power4.out',
    //     })
    //   })
    // }

  }

  setTimeout(animate, 500)

})

// GSAP - Timeline
;(() => {
  
  function animate() {
    // const tween = gsap.to('.box:first-of-type', {})
    // console.log(tween)
    
    // GSAP의 타임라인 인스턴스 생성
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })

    tl
      .from('.blue', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' }) // 0s
      .from('.purple', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' }, '<')
      .from('.yellow', { y: -200, opacity: 0, duration: 0.4, ease: 'back.out' }, '-=0.3')
      .from('.pink', { y: -200, opacity: 0, duration: 0.4, ease: 'back.out' }, '<')
      .from('.green', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' }, 0 + 0.3)

  }

  // 0.5초 지난 후에 animate 함수 실행
  setTimeout(animate, 500) 

})()