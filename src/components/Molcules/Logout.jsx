import React from "react";
import styled from "styled-components";

export default function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  return (
    <LogoutContainer>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </LogoutContainer>
  );
}

const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  text-decoration: underline;
  padding: 10px 20px;
  font-size: 16px;
  color: var(--body-text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
