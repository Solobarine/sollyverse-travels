import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import './Swiper.css';
import 'swiper/css';

const SwipeImages = (arr) => {
  const array = arr.props
  return (
    <Swiper autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
    >
      {array.map((item,i) => {
        return <SwiperSlide key={i}>
          <img className='country_images' src={item} alt="Country"/>
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default SwipeImages;
