import React, {forwardRef} from "react";
import { StyledButton } from "./styled.js";

const Button = forwardRef(({ children, minWidth, link, className, onClick}, ref) => {
  return (
    <StyledButton ref={ref} style={{ minWidth: minWidth }} className={className} {...(link ? { to: link } : {as: "button", type: "button", onClick})}>
      {children}
    </StyledButton>
  );
});

export default Button;
