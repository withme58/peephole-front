import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LandingHeader() {
  return (
    <HeaderContainer>
      <Logo src="images/Logo.png" alt="Peephole." />
      <Link to="/signup">
        <SignupIcon>
          <img src="/icons/signup.svg" alt="signup" />
        </SignupIcon>
      </Link>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  padding: 20px 20px 0;
  position: relative;
  gap: 240px;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #fff;
`;

const SignupIcon = styled.div`
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
