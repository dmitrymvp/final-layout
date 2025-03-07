import Swiper from '../../../node_modules/swiper/swiper-bundle'

let swipers = {} // Храним Swiper-экземпляры

export function addSwiper() {
  const currentInnerWidth = window.innerWidth

  if (currentInnerWidth < 768) {
    if (!swipers.brands && !swipers.devices && !swipers.prices) {
      const swiperBrandsElement = document.querySelector('.brands__swiper')
      const swiperDevicesElement = document.querySelector('.devices__swiper')
      const swiperPricesElement = document.querySelector('.prices__swiper')

      function createSwiper(element, key) {
        if (!element) return

        swipers[key] = new Swiper(element, {
          direction: 'horizontal',
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: element.querySelector('.swiper-pagination'),
            clickable: true
          },
          slidesPerView: 'auto'
        })
      }

      createSwiper(swiperBrandsElement, 'brands')
      createSwiper(swiperDevicesElement, 'devices')
      createSwiper(swiperPricesElement, 'prices')
    }
  } else {
    if (swipers.brands) {
      swipers.brands.destroy(true, true)
      delete swipers.brands
    }
    if (swipers.devices) {
      swipers.devices.destroy(true, true)
      delete swipers.devices
    }
    if (swipers.prices) {
      swipers.prices.destroy(true, true)
      delete swipers.prices
    }
  }
}
