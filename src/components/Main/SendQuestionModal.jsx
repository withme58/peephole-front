import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import SuccessModal from "./SuccessModal";

export default function SendQuestionModal({ closeModal, userData = [] }) {
  const onClickBackground = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // const onClickModal = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <Background onClick={onClickBackground}>
      <ModalContainer>
        <Header>
          <FriendListHeader>질문내용~~</FriendListHeader>
          <CloseButton>
            <IoClose onClick={closeModal} size={25} color="#5a786f" />
          </CloseButton>
        </Header>
        <FriendList>
          {userData.map((user) => (
            <FriendItem key={user.questionId}>
              <FriendItemName>{user.friendName}에게 질문하기</FriendItemName>
              <SendButton onClick={SuccessModal}>보내기</SendButton>
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
  width: 280px;
  height: 334px;
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
  font-size: 14px;
  margin: 0;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const FriendList = styled.div`
  margin-top: 20px;
  padding-right: 10px;
  height: 250px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: var(--light-green);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--deep-green);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--forest-green);
  }
`;

const FriendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #d9d9d9;
  }
`;

const FriendItemName = styled.span`
  font-size: 14px;
`;

const SendButton = styled.button`
  width: 50px;
  height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray);
  color: var(--deep-gray);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--moss-green);
    color: #fff;
  }
`;
