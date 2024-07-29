import React from "react";
import styled from "styled-components";
import SignupForm from "../../components/Signup/SignupForm";
import SignupHeader from "../../components/Signup/SignupHeader";
import SignupToLogin from "../../components/Signup/SignupToLogin";

export default function LoginPage() {
  return (
    <PageContainer>
      <SignupHeader />
      <SignupForm />
      <SignupToLogin />
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
