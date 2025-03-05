export function showBrandsMore() {
  let brandsMoreElement = document.querySelector('#brands__more')
  let containerElement = document.querySelector('.container')
  let moreElement = document.querySelectorAll('.more')[1]

  brandsMoreElement.addEventListener('click', function () {
    containerElement.classList.toggle('container--open')
    moreElement.classList.toggle('more--active')
    if (containerElement.classList.contains('container--open')) {
      brandsMoreElement.textContent = 'Скрыть'
    } else {
      brandsMoreElement.textContent = 'Показать все'
    }
  })
}
