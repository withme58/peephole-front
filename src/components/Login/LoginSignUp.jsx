import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function LoginHeader() {
  return (
    <LoginHeaderDiv>
      <IoIosArrowRoundBack size={28} />
      로그인
    </LoginHeaderDiv>
  );
}

const LoginHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 20px;
  height: 56px;
  font-weight: bold;

  svg {
    position: absolute;
    left: 32px;
    color: var(--Grayscale-40);
  }
`;
