import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import Nickname from "../Main/Main/Nickname";

export default function MainHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo src="images/Logo.png" alt="Peephole." />
      <MypageBox onClick={() => navigate("/mypage")}>
        <PersonIcon size={24} color="white" />
        <Nickname />
      </MypageBox>
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

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #fff;
`;

const PersonIcon = styled(IoMdPerson)`
  margin-left: auto;
`;

const MypageBox = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
