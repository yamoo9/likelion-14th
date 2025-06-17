const body = document.body
const modal_open_button = document.querySelector('main .modal-open-button')
const modal_close_button = document.querySelector('.modal-overlay .modal-close-button')

modal_open_button.addEventListener('click', () => {
  body.classList.add('modal-is-open')
})

modal_close_button.addEventListener('click', () => {
  body.classList.remove('modal-is-open')
})