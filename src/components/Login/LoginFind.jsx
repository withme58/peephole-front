import React from "react";
import styled from "styled-components";

export default function LoginFind() {
  return (
    <FindDiv>
      <p>
        <a>비밀번호 찾기</a>
      </p>
      <p>|</p>
      <p>
        <a>이메일 찾기</a>
      </p>
    </FindDiv>
  );
}

const FindDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--Grayscale-50);
  p {
    padding: 0px 3px 0px 3px;
  }
`;
