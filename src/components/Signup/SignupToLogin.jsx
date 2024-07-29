import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignupToLogin() {
  const navigate = useNavigate();
  return (
    <SignupCheck>
      이미 계정이 있으신가요?
      <SignUpButton
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인하러 가기
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

const SignUpButton = styled.button``;
