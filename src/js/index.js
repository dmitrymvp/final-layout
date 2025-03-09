import '../scss/libs/swiper-bundle.min.scss'
import '../scss/style.scss'

import { addSwiper } from './modules/brands-swiper'
import { showMore } from './modules/more'
import { readMore } from './modules/more'
import { openMenu } from './modules/side-menu'
import { closeMenu } from './modules/side-menu'

window.addEventListener('load', addSwiper)
window.addEventListener('resize', addSwiper)

let brandsMoreElement = document.querySelector('#brands__more')
let devicesMoreElement = document.querySelector('#devices__more')
let containerBrandsElement = document.querySelectorAll('.container')[0]
let containerDevicesElement = document.querySelectorAll('.container')[1]

showMore(brandsMoreElement, containerBrandsElement)
showMore(devicesMoreElement, containerDevicesElement)

readMore()

openMenu()
closeMenu()
