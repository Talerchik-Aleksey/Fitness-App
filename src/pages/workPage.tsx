import React, { useEffect } from "react";
import { Route, Router, useParams } from "react-router-dom";
import styled from "styled-components";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
import Header from "../components/Header";
import data from "../data/data.json";
import NoMatch from "./NoMatch";

function getProductById(code: number) {
  return data.filter(function (data) {
    return data.id == code;
  });
}

const WorkPage = () => {
  let { id } = useParams();
  let productData = getProductById(id != null ? parseInt(id) : 1000)[0];

  if (productData == null) {
    return <NoMatch />;
  }

  return (
    <Div>
      <Header
        type="0"
        firstLine={productData.title}
        secondLine={`${productData.activityType} - ${productData.minutes} min · ${productData.calories} kcal · ${productData.difficult}`}
      />

      <Player
        playsInline
        poster={productData.image}
        src={productData.inPage.video}
      />
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 150px;
`;

export default WorkPage;
