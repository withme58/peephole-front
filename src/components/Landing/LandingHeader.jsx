import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";

export default function LandingHeader({ text }) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderBox>{text}</HeaderBox>
      <PersonIcon size={24} color="white" onClick={() => navigate("/mypage")} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0;
  position: relative;
`;

const HeaderBox = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const PersonIcon = styled(IoMdPerson)`
  margin-left: auto;
  cursor: pointer;
`;
