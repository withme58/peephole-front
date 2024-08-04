import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginFind() {
  const navigate = useNavigate();
  return (
    <PassWordFind
      onClick={() => {
        navigate(-1);
      }}
    >
      비밀번호 찾기
    </PassWordFind>
  );
}

const PassWordFind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #919597;
`;
