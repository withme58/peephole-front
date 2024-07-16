import React from "react";
import { styled } from "styled-components";

export default function StartButton() {
  return <StyledButton>시작하기</StyledButton>;
}

const StyledButton = styled.button`
  position: absolute;
  width: 326px;
  height: 60px;
  left: 32px;
  top: 734px;

  background: #ff6600;
  border: none;
  border-radius: 16px;
  color: #fff;
  /* 시작하기 */

  /* font-family: 'SF Pro Text'; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */
  text-align: center;
  letter-spacing: -0.025em;

  /* color: #ffffff; */
`;
