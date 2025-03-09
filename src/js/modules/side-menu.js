let hamburgerElement = document.querySelector('#hamburger')
let sideMenuElement = document.querySelector('.side-menu')
let closeBtnElement = document.querySelector('#close-btn')
let overlay = document.querySelector('.overlay')

export function openMenu() {
  hamburgerElement.addEventListener('click', function () {
    sideMenuElement.classList.add('side-menu--open')
    document.body.classList.add('no-scroll')
    overlay.hidden = ''
  })
}

export function closeMenu() {
  sideMenuElement.classList.remove('side-menu--open')
  document.body.classList.remove('no-scroll')
  overlay.hidden = true
  closeBtnElement.addEventListener('click', closeMenu)
  overlay.addEventListener('click', closeMenu)
}
