import React from "react";
import styled from "styled-components";
import CartItem from "../components/Cartitem";
import Header from "../components/Header";
import cardsItems from "../data/data.json";
import { formatCurrency } from "../utilities/dateCurrency";

interface Props {
  marginTop: string;
  marginBottom: string;
}

const TextСategory = styled.h2<Props>`
  font-family: "Montserrat-SemiBold";
  line-height: 120%;
  font-size: 19px;
  margin-top: ${(props) => props.marginTop || "24px"};
  margin-bottom: ${(props) => props.marginBottom || "20px"};
`;

export function Home() {
  return (
    <div style={{ marginBottom: "150px" }}>
      <Header type="0" firstLine="Hello, Marry!" />
      <TextСategory marginTop="24px" marginBottom="20px">
        Especially for you
      </TextСategory>
      {cardsItems
        .filter((cardItem) => cardItem.category === "Special")
        .map((item) => (
          <CartItem {...item} />
        ))}
      <TextСategory marginTop="24px" marginBottom="20px">
        New programs
      </TextСategory>
      {cardsItems
        .filter((cardItem) => cardItem.category === "New")
        .map((item) => (
          <CartItem {...item} />
        ))}

      <TextСategory marginTop="24px" marginBottom="20px">
        All programs
      </TextСategory>
      {cardsItems
        .sort(() => Math.random() - 0.5)
        .map((item) => (
          <CartItem {...item} />
        ))}
    </div>
  );
}
23;
