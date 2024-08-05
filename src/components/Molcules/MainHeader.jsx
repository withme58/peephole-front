import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import Nickname from "../Main/Main/Nickname";

export default function MainHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderBox>Peephole.</HeaderBox>
      <MypageBox onClick={() => navigate("/mypage")}>
        <PersonIcon size={24} color="white" />
        <Nickname />
      </MypageBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  font-family: "Noto Sans KR";
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

const PersonIcon = styled(IoMdPerson)`
  margin-left: auto;
  cursor: pointer;
`;

const MypageBox = styled.div`
  display: flex;
  gap: 10px;
`;
