import React from "react";
import styled from "styled-components";
import SignupForm from "../../components/Signup/SignupForm";
import Header from "../../components/Molcules/Header";
import SignupToLogin from "../../components/Signup/SignupToLogin";

export default function SignupPage() {
  return (
    <PageContainer>
      <Header text="회원가입" link="/peephole" />
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
