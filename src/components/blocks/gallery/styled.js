import styled from "styled-components";
import leaf2 from "../../../assets/leaf2.svg";
import paw2 from "../../../assets/paw2.svg";
import spot3 from "../../../assets/spot3.svg";
import arrow from "../../../assets/arrow.svg";
import Title from "../../ui/title/title";
import { Swiper } from "swiper/react";
import Button from "../../ui/button/button";

export const GallerySection = styled.section`
    position: relative;
    padding: 79px 79px 100px 79px;
    background-color: ${(props) => props.theme.colorBackgroundDark};
    background-image: url(${leaf2});
    background-repeat: no-repeat;
    background-position: 0 100%;
    align-items: center;
    z-index: 1;
    box-sizing: border-box;
    &:after {
        position: absolute;
        top: 10%;
        right: 0;
        display: block;
        content: "";
        width: 225px;
        height: 222px;
        margin: auto;
        background-image: url(${paw2});
        background-repeat: no-repeat;
    };
    &:before {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        content: "";
        width: 321px;
        height: 305px;
        margin: auto;
        background-image: url(${spot3});
        background-repeat: no-repeat;
    };
`;

export const GalleryTitle = styled(Title)`
    margin: 0 auto 64px auto;
    width: max-content;
`;

export const SliderWrapper = styled.div`
    position: relative;
    max-width: 914px;
    margin: 0 auto;
    z-index: 3;
`;

export const StyledSlider = styled(Swiper)`
    width: 726px;
    height: 408px;
    margin: 0 auto 24px auto;
`;

export const StyledSlide = styled.img`
    width: 726px;
    height: 408px;
    background-size: cover;
    border-radius: 12px;
`

export const StyledSliderMini = styled(Swiper)`
    width: 726px;
    height: 128px;
    margin: 0 auto 0 auto;
`;

export const StiledSlideMini = styled.img`
    width: 167px;
    height: 128px;
    position: relative;
    filter: brightness(${(props) => props.$active ? 100 : 50 }%);
    background-size: cover;
    border-radius: 12px;
    cursor: pointer;
`

export const StyledButton = styled(Button)`
  position: absolute;
  z-index: 10;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.left ? "5px" : "auto")};
  right: ${(props) => (props.right ? "5px" : "auto")};
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 55% 50%;
  transform: ${(props) => (props.left ? `rotate(180deg)` : `rotate(0deg)`)};
  min-width: 64px;
  min-height: 64px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;