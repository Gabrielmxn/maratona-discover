const buttonNew = document.querySelector('.new');
const buttonClose = document.querySelector('.cancel')
const modal = document.querySelector('.modal-overlay')


buttonNew.addEventListener('click', () => {
  modal.classList.add('active');
})

buttonClose.addEventListener('click', () => {
  modal.classList.remove('active');
})

