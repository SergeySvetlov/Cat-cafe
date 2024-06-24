import React, {useRef, useState} from "react";
import { SwiperSlide } from "swiper/react"; 
import { Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import { GallerySection, GalleryTitle, SliderWrapper, StyledButton, StyledSlider, StyledSlide, StyledSliderMini, StiledSlideMini } from "./styled";

SwiperCore.use([Navigation, Thumbs]);


function Gallery({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return images && images.length ? (
    <GallerySection>
        <GalleryTitle level={2} size="big">Галерея нашего кафе</GalleryTitle>
        <SliderWrapper>
          <StyledSlider
              onSlideChange={(slider) => {
                setActiveSlide(slider.realIndex);
              }}
              spaceBetween={20}
              thumbs={{ swiper: thumbsSwiper }}
              slidesPerView={1}
              loop={true}
            >
              {images && images.length && images.map((img) => (
                  <SwiperSlide key={img.id}>
                      <StyledSlide src={img.src} alt={img.alt} width="726" height="408"/>
                  </SwiperSlide>
              ))}
            </StyledSlider>
      </SliderWrapper>
      <SliderWrapper>
          <StyledButton left ref={navigationPrevRef} title="Назад"></StyledButton>
          <StyledButton right ref={navigationNextRef} title="Вперёд"></StyledButton>     
          <StyledSliderMini
              onSwiper={(e) => {
                setThumbsSwiper(e);
              }}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              loop={true}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              navigation={{
                nextE1: navigationNextRef.current,
                prevE1: navigationPrevRef.current
              }}     
            >
              {images && images.length && images.map((img, index) => (
                  <SwiperSlide key={img.id}>
                      <StiledSlideMini $active={activeSlide === index} src={img.src} alt={img.alt} width="167" height="128"/>
                  </SwiperSlide>
              ))}
            </StyledSliderMini>
      </SliderWrapper>
    </GallerySection>
  ) : null;
}

export default Gallery;