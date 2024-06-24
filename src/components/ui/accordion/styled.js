import styled from "styled-components";
import blackArrow from "../../../assets/blackArrow.svg";
import {Ul, Li, Button} from "../../elements/index";

export const AccordionList = styled(Ul)`
    margin: 0 0 24px 0;
`;
export const StyledItem = styled(Li)`
    margin: 0 0 12px 0;
    background-color: ${(props) => props.theme.colorBackgroundGrey};
    border-radius: 10px;
`;
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const AccordionButton = styled(Button)`
    height: 44px;
    width: 44px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: background-image 0.2s ease-out;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: url(${blackArrow});
    transform: ${(props) => props.isOpen ? `rotate(180deg)` : `rotate(0)`};
`;
export const Wrapper = styled.div`
    height: ${(props) => `${props.isOpen ? props.height : 1}px`};
    overflow: hidden;
`;
export const ContentWrapper = styled.div``;
export const ItemContent = styled.div``;
