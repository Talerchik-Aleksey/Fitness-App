import React from "react";
import styled from "styled-components";

const Label = styled.p`
  background: #ffffff;
  border-radius: 22px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: #f23847;
  position: absolute;
  left: 20px;
  top: 20px;
  text-align: center;
  padding: 8px 16px;
`;

type CategoryProps = {
  activityType: string;
};

const Category = ({ activityType }: CategoryProps) => {
  return <Label>{activityType}</Label>;
};

export default Category;
