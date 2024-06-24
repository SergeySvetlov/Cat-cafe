import React from "react";
import { StyledTitle } from "./styled.js";

function Title({ children, level, className, size, hide}) {
  return <StyledTitle hide={hide} className={className} {...(level ? {as: `h${level}`} : "")} size={size}>{children}</StyledTitle>;
}

export default Title;
