import React from "react";
import styled from "styled-components";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginForm from "../../components/Login/LoginForm";
import LoginFind from "../../components/Login/LoginFind";
// import LoginToSignUp from "../../components/Login/LoginToSignUp";

export default function LoginPage() {
  return (
    <PageContainer>
      <LoginHeader />
      <LoginForm />
      <LoginFind />
      {/* <LoginToSignUp /> */}
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
