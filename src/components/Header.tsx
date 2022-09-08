import React from "react";
import styled from "styled-components";
import { deflate } from "zlib";
import {
  formatCurrency,
  formatCurrencyWithYear,
} from "../utilities/dateCurrency";

const MainElement = styled.h1`
  font-family: "Montserrat-Bold";
  font-size: 32px;
  line-height: 120%;
`;

const SecondElement = styled.p`
  font-family: "Montserrat-Medium";
  font-size: 17px;
  line-height: 150%;
  color: #a9a9a9;
`;

type HeaedrProps = {
  type: string;
  firstLine: string;
  secondLine?: string;
};

const Header = ({ type, firstLine, secondLine }: HeaedrProps) => {
  if (type == "1") {
    return (
      <header style={{ marginBottom: "24px" }}>
        <SecondElement>Today</SecondElement>
        <MainElement>{formatCurrencyWithYear(Date.now())}</MainElement>
      </header>
    );
  }

  return (
    <header>
      <MainElement>{firstLine}</MainElement>
      <SecondElement>
        {secondLine == null ? formatCurrency(Date.now()) : secondLine}
      </SecondElement>
    </header>
  );
};

export default Header;
