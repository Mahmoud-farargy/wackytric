import React from 'react'
import styled from 'styled-components'
import { Pagination, Navigation, EffectCards, Autoplay} from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cardImg1 from "../../assets/Nfts/bighead.svg";
import cardImg2 from "../../assets/Nfts/bighead-1.svg";
import cardImg3 from "../../assets/Nfts/bighead-2.svg";
import cardImg4 from "../../assets/Nfts/bighead-3.svg";
import cardImg5 from "../../assets/Nfts/bighead-4.svg";
import cardImg6 from "../../assets/Nfts/bighead-5.svg";
import cardImg7 from "../../assets/Nfts/bighead-6.svg";
import cardImg8 from "../../assets/Nfts/bighead-7.svg";
import cardImg9 from "../../assets/Nfts/bighead-8.svg";
import cardImg10 from "../../assets/Nfts/bighead-9.svg";

import Arrow from "../../assets/Arrow.svg";



const StyledCarousel = styled.div`
 width: 25vw;
 height: 70vh;
 @media (max-width: 70em){
    height: 60vh;
 }
 @media (max-width: 64em){
    height: 50vh;
    width: 30vw;
 }
 @media (max-width: 48em){
    height: 48vh;
    width: 40vw;
 }
 @media (max-width: 30em){
    height: 45vh;
    width: 60vw;
 }
 .swiper{
    width: 100%;
    height: 100%;
 }
 .swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
 }

 .swiper-button-next, .swiper-button-prev{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 60%;
    &:after{
        display: none;
    }
    @media (max-width: 64em){
        width: 3rem;
    }
    @media (max-width: 30em){
        width: 2rem;
    }
 }
  
 .swiper-button-prev{
    transform: rotate(180deg);
}
`;
 
function Carousel() {
  return (
    <StyledCarousel>
        <Swiper
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            pagination={{
                type: 'fraction',
            }}
            scrollbar={{
                draggable: true
            }}
            navigation={true}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide><img src={cardImg1} draggable={false} loading="lazy" alt="card1"/></SwiperSlide>
            <SwiperSlide><img src={cardImg2} draggable={false} loading="lazy" alt="card2"/></SwiperSlide>
            <SwiperSlide><img src={cardImg3} draggable={false} loading="lazy" alt="card3"/></SwiperSlide>
            <SwiperSlide><img src={cardImg4} draggable={false} loading="lazy" alt="card4"/></SwiperSlide>
            <SwiperSlide><img src={cardImg5} draggable={false} loading="lazy" alt="card5"/></SwiperSlide>
            <SwiperSlide><img src={cardImg6} draggable={false} loading="lazy" alt="card6"/></SwiperSlide>
            <SwiperSlide><img src={cardImg7} draggable={false} loading="lazy" alt="card7"/></SwiperSlide>
            <SwiperSlide><img src={cardImg8} draggable={false} loading="lazy" alt="card8"/></SwiperSlide>
            <SwiperSlide><img src={cardImg9} draggable={false} loading="lazy" alt="card9"/></SwiperSlide>
            <SwiperSlide><img src={cardImg10} draggable={false} loading="lazy" alt="card10"/></SwiperSlide>
        </Swiper>   
    </StyledCarousel>

  )
}

export default Carousel