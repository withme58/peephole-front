import React from "react";
import { styled } from "styled-components";
//import SignupPage from '../../pages/signup/SignupPage';
export default function SignupButton() {
  return <StyledButton>회원가입</StyledButton>;
}

const StyledButton = styled.button`
  position: absolute;
  width: 326px;
  height: 60px;
  left: 32px;
  top: 652px;

  //background: #ff6600;  // 주황
  background: #a5a5a5; //회색
  border: none;
  border-radius: 16px;
  color: #fff;

  /* font-family: 'SF Pro Text'; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;

  /* identical to box height, or 144% */
  text-align: center;
  letter-spacing: -0.025em;
`;
