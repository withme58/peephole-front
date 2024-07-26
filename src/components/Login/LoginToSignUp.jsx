import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginToSignUp() {
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
  justify-content: center;
  font-size: 14px;
  color: #fff;
`;

const SignUpButton = styled.div``;
