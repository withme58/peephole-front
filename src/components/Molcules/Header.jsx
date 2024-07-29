import React from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function LoginHeader({ text }) {
  const navigate = useNavigate();

  return (
    <Header>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoArrowBack size={24} color="white" />
      </BackButton>
      <HeaderBox>{text}</HeaderBox>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0;
  position: relative;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  font-size: 40px;
  height: 56px;
  font-weight: bold;
`;
