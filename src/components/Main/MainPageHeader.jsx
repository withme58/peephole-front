import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MainPageHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoButton
        onClick={() => {
          navigate("/");
        }}
      >
        핍홀
      </LogoButton>
      <MypageButton
        onClick={() => {
          navigate("/mypage");
        }}
      >
        마이페이지
      </MypageButton>
    </HeaderContainer>
  );
}

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MypageButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
