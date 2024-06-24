import React from "react";
import Title from "../../ui/title/title";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";
import { ListSection, List, Item } from "./styled.js";

function StarsList({ stars }) {
  return (
    <ListSection>
      <Title level={2}>Наши звёзды</Title>
      <List>
        {stars.map((star) => {
          return (<Item key={star.id}>
            <StarCard star ={star}/>
          </Item>)
        })}
      </List>
      <Button link="buy" minWidth={353}>Купить</Button>
    </ListSection>
  );
}

export default StarsList;
