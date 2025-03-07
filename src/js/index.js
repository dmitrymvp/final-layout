import '../scss/libs/swiper-bundle.min.scss'
import '../scss/style.scss'

import { addSwiper } from './modules/brands-swiper'
import { showBrandsMore } from './modules/more'

window.addEventListener('load', addSwiper)
window.addEventListener('resize', addSwiper)

showBrandsMore()
