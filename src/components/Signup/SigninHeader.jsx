import React from "react";
import styled from "styled-components";

export default function LoginHeader() {
  return <LogoBox>피폴</LogoBox>;
}

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 20px;
  height: 56px;
  font-weight: bold;
`;
