import { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { UseApiContext } from '../context/ApiContext';
import carouselArrow from '../assets/carousel-arrow.png';
import 'swiper/css';
import 'swiper/css/autoplay';

const Carousel = () => {
    const { carousel } = useContext(UseApiContext);
    const [carouselImg, setCarouselImg] = useState([]);

    useEffect(() => {
        carousel().then((res) => {
            setCarouselImg(res);
        });
    }, []);

    return (
        <div className="carouselContainer">
            <div className="carousel-arrows d-flex-center">
                <img className="carousel-prev" src={carouselArrow}></img>
                <img className="carousel-next" src={carouselArrow}></img>
            </div>
            <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                navigation={{
                    nextEl: '.carousel-next',
                    prevEl: '.carousel-prev',
                }}
                allowTouchMove={false}
            >
                {carouselImg.map((img) => (
                    <SwiperSlide key={img.id}>
                        <img src={img.image}></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
