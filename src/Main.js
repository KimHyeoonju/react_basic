import React from "react";
import "./react.css";
import styled from "@emotion/styled";

// 대문자로 시작해야함.
const StyLedTitle = styled.div`
  background-color: pink;
  font-size: 48px;
  font-weight: bold;
`;

const Main = () => {
  const title = "리액트";

  return <StyLedTitle>{title}</StyLedTitle>;
};

export default Main;
