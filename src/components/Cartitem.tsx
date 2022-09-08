import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Category from "./Category";
import TextCart from "./TextCart";

type CartItemProps = {
  id: number;
  activityType: string;
  image: string;
  title: string;
  minutes: number;
  calories: number;
  difficult: string;
  inPage: object;
};

interface Props {
  img: string;
}

const ItemDiv = styled.div<Props>`
  background-image: url("${(props) => props.img || "none"}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  width: min(100%, 327px);
  height: 378px;

  margin: 20px auto;
  position: relative;

  text-decaration: none;
  color: black;
`;

const CartItem = ({
  id,
  activityType,
  image,
  title,
  minutes,
  calories,
  difficult,
  inPage,
}: CartItemProps) => {
  return (
    <Link to={`/workPage/id=${id}`} style={{ textDecoration: "none" }}>
      <ItemDiv img={image}>
        <Category activityType={activityType} />
        <TextCart
          title={title}
          calories={calories}
          minutes={minutes}
          difficult={difficult}
        />
      </ItemDiv>
    </Link>
  );
};

export default CartItem;
