import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignupToLogin() {
  const navigate = useNavigate();
  return (
    <AccountCheck>
      이미 계정이 있으신가요? &nbsp;
      <LoginButton
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인하러 가기
      </LoginButton>
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

const LoginButton = styled.div`
  color: #2e8daf;
  font-weight: 700;
  cursor: pointer;
`;
