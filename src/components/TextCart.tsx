import React from "react";
import styled from "styled-components";

const TextCartDiv = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;

  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  border-radius: 12px;
  padding: 16px;
  & > h3 {
    font-family: "Montserrat";
    padding-bottom: 8px;
  }

  & > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #a9a9a9;
  }
`;

type TextCartProps = {
  title: string;
  minutes: number;
  calories: number;
  difficult: string;
};

const TextCart = ({ title, minutes, calories, difficult }: TextCartProps) => {
  return (
    <TextCartDiv>
      <h3>{title}</h3>
      <p>
        {minutes} min · {calories} kcal · {difficult}
      </p>
    </TextCartDiv>
  );
};

export default TextCart;
