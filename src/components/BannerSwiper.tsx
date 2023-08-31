import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { A11y, Autoplay, Navigation, Pagination, Parallax, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function BannerSwiper() {
  return (
    <Swiper
      className='max-w-[870px] w-full h-[100px] rounded-lg'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000
      }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='max-h-[100px]'>
        <img className='object-cover m-auto' src='/seventeen_ad.png' alt='seventeen' />
      </SwiperSlide>
      <SwiperSlide className='max-h-[100px]'>
        <img className='object-cover m-auto' src='/bts_ad.png' alt='bts' />
      </SwiperSlide>
      <SwiperSlide className='max-h-[100px]'>
        <img className='object-cover m-auto' src='/newjeans_ad.png' alt='newjeans' />
      </SwiperSlide>
      <SwiperSlide className='max-h-[100px]'>
        <img className='object-cover m-auto' src='/lesserafim_ad.png' alt='lesserafim' />
      </SwiperSlide>
    </Swiper>
  )
}
