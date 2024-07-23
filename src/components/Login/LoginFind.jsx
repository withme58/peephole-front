import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginFind() {
  const navigate = useNavigate();
  return (
    <PassWordFind>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        비밀번호 찾기
      </button>
    </PassWordFind>
  );
}

const PassWordFind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--Grayscale-50);
  p {
    padding: 0px 3px 0px 3px;
  }
`;
