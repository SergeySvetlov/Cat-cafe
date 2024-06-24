import React from "react";
import { StyledIcon } from "./styled.js";

export default function Icon ({className= "", feature}) {
    let option;

    switch (feature) {
        case "new" : option = {
            backgroundColor: "#ffb334",
            text: "Новичек"
        };
        break;
        case "soft" : option = {
            backgroundColor: "#7fc92e",
            text: "Ласковый"
        };
        break;
        default : option = {
            backgroundColor: "",
            text: ""            
        }
    }

    return option.text ? (<StyledIcon className={className} backgroundColor={option.backgroundColor}>{option.text}</StyledIcon>) : null;
}