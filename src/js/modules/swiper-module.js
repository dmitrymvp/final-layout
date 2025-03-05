import Swiper from '../../../node_modules/swiper/swiper-bundle'

let swiper = null

export function addSwiper() {
  const currentInnerWidth = window.innerWidth

  if (currentInnerWidth < 768) {
    if (!swiper) {
      const swiperElement = document.querySelector('.swiper')

      const observer = new ResizeObserver(() => {
        const widthSwiper = swiperElement.offsetWidth
        if (swiper) {
          swiper.params.slidesPerView = widthSwiper / 267
          swiper.update()
        }
      })

      observer.observe(swiperElement)

      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 1
      })
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true)
      swiper = null
    }
  }
}
