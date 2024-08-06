import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginToSignUp() {
  const navigate = useNavigate();
  return (
    <AccountCheck>
      아직 회원이 아니신가요?
      <SignUpButton
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </SignUpButton>
    </AccountCheck>
  );
}

const AccountCheck = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  gap: 10px;
`;

const SignUpButton = styled.div`
  color: #2e8daf;
  font-weight: 800;
  cursor: pointer;
`;
