import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Plus from "../../../public/imgs/Plus.svg";

const Tabbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
`;

const TabBarNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  margin: 0 auto;
  padding: 16px 22px 36px 22px;
  height: 60px;
`;

const TabBar = function () {
  let location = useLocation().pathname;
  return (
    <Tabbar>
      <TabBarNav className="TabBarNav">
        <NavLink to={"/"}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={location == "/" ? "1" : "0.4"}
              d="M22.5 11.3901V18.1001C22.5 20.2501 20.82 22.0001 18.75 22.0001H15V17.2001C15 16.5601 14.48 16.0401 13.84 16.0401H11.16C10.52 16.0401 10.01 16.5601 10.01 17.2001V22.0001H6.25C4.18 22.0001 2.5 20.2501 2.5 18.1001V11.3901C2.5 10.2401 2.99 9.15006 3.83 8.40006L10.08 2.92006C11.49 1.69006 13.52 1.69006 14.92 2.92006L21.17 8.40006C22.02 9.15006 22.5 10.2401 22.5 11.3901Z"
              fill={location == "/" ? "#F23847" : "#DDDDDD"}
            />
          </svg>
        </NavLink>
        <NavLink to={"/message"}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={location == "/message" ? "1" : "0.4"}
              d="M22.51 12C22.51 6.49 18.02 2 12.51 2C6.99001 2 2.51001 6.49 2.51001 12C2.51001 17.51 6.99001 22 12.51 22C14.01 22 15.46 21.67 16.82 21.01L21.6 21.72C21.83 21.75 22.07 21.67 22.24 21.5C22.4 21.34 22.48 21.1 22.45 20.86L21.71 15.89C22.24 14.64 22.51 13.34 22.51 12ZM8.39001 13.03C7.83001 13.03 7.37001 12.57 7.37001 12C7.37001 11.43 7.83001 10.97 8.39001 10.97C8.96001 10.97 9.42001 11.43 9.42001 12C9.42001 12.57 8.96001 13.03 8.39001 13.03ZM12.5 13.03C11.94 13.03 11.48 12.57 11.48 12C11.48 11.43 11.94 10.97 12.5 10.97C13.07 10.97 13.53 11.43 13.53 12C13.53 12.57 13.07 13.03 12.5 13.03ZM16.62 13.03C16.05 13.03 15.59 12.57 15.59 12C15.59 11.43 16.05 10.97 16.62 10.97C17.18 10.97 17.64 11.43 17.64 12C17.64 12.57 17.18 13.03 16.62 13.03Z"
              fill={location == "/message" ? "#F23847" : "#DDDDDD"}
            />
          </svg>
        </NavLink>
        <NavLink to={"/new"}>
          <svg
            width="91"
            height="90"
            viewBox="0 0 91 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_110_90)">
              <rect
                x="16.5"
                y="12"
                width="58"
                height="58"
                rx="29"
                fill="#F23847"
                shape-rendering="crispEdges"
              />
              <circle cx="45.5" cy="41" r="29" fill="#F23847" />
              <path
                d="M35.5 41H55.5"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45.5 51L45.5 31"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_110_90"
                x="0.5"
                y="0"
                width="90"
                height="90"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.94902 0 0 0 0 0.219608 0 0 0 0 0.278431 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_110_90"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_110_90"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </NavLink>
        <NavLink to={"/stats"}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity={location == "/stats" ? "1" : "0.4"}>
              <path
                d="M21.7499 11.9897H17.6399C17.2299 11.9897 16.8899 12.3297 16.8899 12.7397V18.6797C16.8899 19.0897 17.2299 19.4297 17.6399 19.4297H21.7499C22.1599 19.4297 22.4999 19.0897 22.4999 18.6797V12.7397C22.4999 12.3297 22.1599 11.9897 21.7499 11.9897Z"
                fill={location == "/stats" ? "#F23847" : "#DDDDDD"}
              />
              <path
                d="M14.4499 8.27979H10.4399C10.0299 8.27979 9.68994 8.61979 9.68994 9.02979V18.6798C9.68994 19.0898 10.0299 19.4298 10.4399 19.4298H14.4499C14.8599 19.4298 15.1999 19.0898 15.1999 18.6798V9.02979C15.1999 8.61979 14.8599 8.27979 14.4499 8.27979Z"
                fill={location == "/stats" ? "#F23847" : "#DDDDDD"}
              />
              <path
                d="M7.36 4.56982H3.25C2.84 4.56982 2.5 4.90982 2.5 5.31982V18.6798C2.5 19.0898 2.84 19.4298 3.25 19.4298H7.36C7.77 19.4298 8.11 19.0898 8.11 18.6798V5.31982C8.11 4.90982 7.78 4.56982 7.36 4.56982Z"
                fill={location == "/stats" ? "#F23847" : "#DDDDDD"}
              />
            </g>
          </svg>
        </NavLink>
        <NavLink to={"/certificate"}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={location == "/certificate" ? "1" : "0.4"}
              d="M12.4801 2C8.02013 2 4.39014 5.63001 4.39014 10.1C4.39014 11.69 4.85012 13.18 5.65012 14.43C5.94012 14.89 6.27012 15.31 6.65012 15.7L6.96011 16.01C7.06011 16.09 7.15012 16.18 7.25012 16.27C7.70012 16.65 8.20013 16.98 8.73013 17.26C8.86013 17.33 8.99012 17.39 9.12012 17.45C9.25012 17.51 9.38011 17.57 9.52011 17.62C9.99011 17.81 10.4901 17.96 11.0001 18.05C11.4801 18.14 11.9701 18.19 12.4801 18.19C13.0001 18.19 13.5001 18.14 13.9901 18.04C14.5101 17.95 15.0001 17.81 15.4701 17.62V17.61C15.6001 17.56 15.7401 17.5 15.8701 17.44C16.0001 17.38 16.1301 17.31 16.2601 17.25C16.2901 17.23 16.3101 17.22 16.3401 17.21C16.6901 17.01 17.0201 16.8 17.3301 16.58C17.4601 16.47 17.5801 16.38 17.7001 16.28C17.8101 16.18 17.9201 16.09 18.0301 15.99C18.1301 15.89 18.2401 15.78 18.3401 15.68C18.7101 15.29 19.0401 14.87 19.3401 14.41C20.1201 13.16 20.5801 11.68 20.5801 10.1C20.5801 5.63001 16.9501 2 12.4801 2ZM16.3201 9.48999L14.7301 11.05C14.6601 11.11 14.6301 11.21 14.6501 11.31L15.0301 13.5C15.0701 13.74 14.8201 13.92 14.6001 13.81L12.6301 12.77C12.5401 12.73 12.4401 12.73 12.3501 12.77L10.3801 13.81C10.1601 13.92 9.91013 13.74 9.95013 13.5L10.3301 11.31C10.3401 11.21 10.3101 11.12 10.2501 11.05L8.65012 9.48999C8.48012 9.31999 8.57012 9.02999 8.81012 8.98999L11.0201 8.67001C11.1101 8.66001 11.1901 8.60001 11.2401 8.51001L12.2201 6.51001C12.3301 6.29001 12.6401 6.29001 12.7501 6.51001L13.7301 8.51001C13.7801 8.60001 13.8601 8.66001 13.9501 8.67001L16.1601 8.98999C16.4001 9.02999 16.4901 9.31999 16.3201 9.48999Z"
              fill={location == "/certificate" ? "#F23847" : "#DDDDDD"}
            />
            <path
              opacity={location == "/certificate" ? "1" : "0.4"}
              d="M6.13014 16.5899C5.75014 16.2199 5.40015 15.8199 5.10015 15.3799L3.36013 18.3999C3.22013 18.6399 3.22013 18.9299 3.37014 19.1699C3.51013 19.3999 3.75013 19.5399 4.05013 19.5199L6.51015 19.3899L7.63014 21.5899C7.75014 21.8299 8.00014 21.9899 8.28014 21.9999C8.28014 21.9999 8.29013 21.9999 8.30013 21.9999C8.56013 21.9999 8.81015 21.8599 8.95015 21.6199L10.4802 18.9599C9.98015 18.8499 9.49013 18.6999 9.02013 18.4999C7.93013 18.0499 6.95014 17.3999 6.13014 16.5899Z"
              fill={location == "/certificate" ? "#F23847" : "#DDDDDD"}
            />
            <path
              opacity={location == "/certificate" ? "1" : "0.4"}
              d="M21.65 18.3999L19.89 15.3599C19.58 15.7999 19.24 16.2099 18.85 16.5699C18.03 17.3899 17.05 18.0399 15.97 18.4899C15.5 18.6899 15.02 18.8399 14.52 18.9499L16.06 21.6199C16.19 21.8599 16.44 21.9999 16.71 21.9999C16.71 21.9999 16.72 21.9999 16.73 21.9999C17 21.9899 17.25 21.8299 17.37 21.5899L18.49 19.3899L20.96 19.5199C21.25 19.5399 21.49 19.3999 21.64 19.1699C21.78 18.9299 21.78 18.6399 21.65 18.3999Z"
              fill={location == "/certificate" ? "#F23847" : "#DDDDDD"}
            />
          </svg>
        </NavLink>
      </TabBarNav>
    </Tabbar>
  );
};

export default TabBar;
