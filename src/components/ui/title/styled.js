import styled from "styled-components";
import { H1 } from "../../elements/index";
import visuallyHidden from "../../../util/visually-hidden";

const Size = {
    BIG: "big",
    SMALL: "small",
  };

export const StyledTitle = styled(H1)`
    font-weight: 700;
    font-size: ${(props) => {
        if (props.size === Size.BIG) {
            return "44px";
        } else if (props.size === Size.SMALL) {
            return "28px";
        } else {
            return "36px";
        }    
    }};
    line-height: ${(props) => props.theme.lineHeight};
    ${visuallyHidden}
`;