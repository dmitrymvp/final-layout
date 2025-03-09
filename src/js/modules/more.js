export function showMore(element, container) {
  element.addEventListener('click', function () {
    container.classList.toggle('container--open')
    element.classList.toggle('more--active')
    if (container.classList.contains('container--open')) {
      element.textContent = 'Скрыть'
    } else {
      element.textContent = 'Показать все'
    }
  })
}

let readMoreElement = document.querySelector('#description__more')
let readContainer = document.querySelector('.description__text')

export function readMore() {
  readMoreElement.addEventListener('click', function () {
    readContainer.classList.toggle('description__text--open')
    readMoreElement.classList.toggle('more--active')
    if (readContainer.classList.contains('description__text--open')) {
      readMoreElement.textContent = 'Скрыть'
    } else {
      readMoreElement.textContent = 'Читать далее'
    }
  })
}
