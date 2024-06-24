import React from "react";
import logo from "../../../assets/logo.svg";
import { LogoLink, LogoText } from "./styled.js";

function Logo() {
  return (
    <LogoLink to="/">
      <img src={logo} alt="логотип" />
      <LogoText>Котокафе</LogoText>
    </LogoLink>
  );
}

export default Logo;
