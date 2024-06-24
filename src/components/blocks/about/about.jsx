import React from "react";
import Title from "../../ui/title/title";
import {AboutSection, Wrapper, AboutText, WorkTime, Address} from "./styled.js";

function About() {
  return (
    <AboutSection>
      <Wrapper>
        <Title size="big">Первое в России котокафе</Title>
        <AboutText>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </AboutText>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address>
          Санкт-Петербург, набережная реки Карповки, дом 5, литера П
        </Address>
      </Wrapper>
    </AboutSection>
  );
}

export default About;
