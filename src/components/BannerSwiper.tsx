import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

export default function BannerSwiper() {
  return (
    <>
      <Swiper
        className='max-w-[900px] w-full h-[90px] rounded-lg'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='max-h-[100px]'>
          <img className='object-cover m-auto' src='/2pm.png' alt='2pm concert' />
        </SwiperSlide>
        <SwiperSlide className='max-h-[100px]'>
          <img
            className='object-cover m-auto'
            src='/psy_humppuckshow.png'
            alt='psy hummppuckshow'
          />
        </SwiperSlide>
        <SwiperSlide className='max-h-[100px]'>
          <img className='object-cover m-auto' src='/newjeans_ad.png' alt='new jeans' />
        </SwiperSlide>
        <SwiperSlide className='max-h-[100px]'>
          <img className='object-cover m-auto' src='/lesserafim.jpg' alt='lesserafim' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
