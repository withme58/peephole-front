import React from "react";
import styled from "styled-components";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginForm from "../../components/Login/LoginForm";
import LoginFind from "../../components/Login/LoginFind";
import LoginSignUp from "../../components/Login/LoginSignUp";

export default function LoginPage() {
  return (
    <PageContainer>
      <LoginHeader />
      <LoginForm />
      <LoginFind />
      <LoginSignUp />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 390px;
  height: 844px;
  position: relative;
`;
