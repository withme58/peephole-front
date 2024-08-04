import React from "react";
import styled from "styled-components";
import Header from "../../components/Molcules/Header";
import LoginForm from "../../components/Login/LoginForm";
import LoginToSignUp from "../../components/Login/LoginToSignUp";

export default function LoginPage() {
  return (
    <PageContainer>
      <Header text={"로그인"} />
      <LoginForm />
      <LoginToSignUp />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
