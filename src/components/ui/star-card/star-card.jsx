import React from "react";
import Title from "../../ui/title/title";
import StyledIcon from "../../ui/icon/icon";
import { Article, Figure, CardText, Image } from "./styled.js";

function StarCard({star}) {
  return (
    <Article>
      <Figure>
        <Image
          src={star.image}
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StyledIcon feature={star.feature}/>
      </Figure>
      <Title level={3} size="small">{star.name}</Title>
      <CardText dangerouslySetInnerHTML={{ __html: star.about }}/>
    </Article>
  );
}

export default StarCard;
