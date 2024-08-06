import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LandingHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderBox>Peephole.</HeaderBox>
      <SignupIcon onClick={() => navigate("/signup")}>
        <img src="/icons/signup.svg" alt="signup" />
      </SignupIcon>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0;
  position: relative;
  gap: 240px;
`;

const HeaderBox = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const SignupIcon = styled.div`
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
