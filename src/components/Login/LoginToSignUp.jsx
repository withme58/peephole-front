import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginSignUp() {
  const navigate = useNavigate();
  return (
    <SignupCheck>
      아직 회원이 아니신가요?
      <SignUpButton
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </SignUpButton>
    </SignupCheck>
  );
}

const SignupCheck = styled.div`
  display: flex;
  position: absolute;
  bottom: 53px;
  left: 97px;
  justify-content: center;
  font-size: 14px;
  color: var(--Grayscale-5);

  a {
    color: var(--Orange-10);
  }
`;

const SignUpButton = styled.div``;
