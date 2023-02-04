import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css';
import 'swiper/css';

const SwipeImages = (arr) => {
  const array = arr.props
  return (
    <Swiper>
      {array.map((item,i) => {
        return <SwiperSlide key={i}><img src={item} alt="Country"/></SwiperSlide>
      })}
    </Swiper>
  )
}

export default SwipeImages;
