import React from "react";
import styled from "styled-components";
import { CiLocationArrow1 } from "react-icons/ci";

export default function SendQuestionModal({ closeModal, userData = [] }) {
  const onClickBackground = (e) => {
    console.log("Background 클릭");
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onClickModal = (e) => {
    e.stopPropagation();
  };

  return (
    <Background onClick={onClickBackground}>
      <ModalContainer onClick={onClickModal}>
        <Header>
          <FriendListHeader>친구 목록</FriendListHeader>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </Header>
        <FriendList>
          {userData.map((user) => (
            <FriendItem key={user.id}>
              <FriendItemName>{user.name}</FriendItemName>
              <CiLocationArrow1 width={24} height={24} />
            </FriendItem>
          ))}
        </FriendList>
      </ModalContainer>
    </Background>
  );
}

// Styled Components
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  z-index: 10;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FriendListHeader = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const FriendList = styled.div`
  margin-top: 20px;
`;

const FriendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const FriendItemName = styled.span`
  font-size: 18px;
`;
