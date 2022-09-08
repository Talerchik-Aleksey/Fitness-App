import React from "react";
import Header from "../components/Header";

type Props = {};

const NoMatch = (props: Props) => {
  return (
    <Header
      type="0"
      firstLine="Page not found"
      secondLine="Please specify the address"
    />
  );
};

export default NoMatch;
