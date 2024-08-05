import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";

export default function LandingHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderBox>Peephole.</HeaderBox>
      <LockIcon size={24} color="white" onClick={() => navigate("/signup")} />
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

const LockIcon = styled(FaLock)`
  margin-left: auto;
  cursor: pointer;
`;
