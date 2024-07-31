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
          <QuestionHeader>피폴 목록</QuestionHeader>
          <CloseButton>
            <IoClose onClick={closeModal} size={25} color="#5a786f" />
          </CloseButton>
        </Header>
        <FriendList>
          {userData.map((user) => (
            <FriendItem key={user.questionId}>
              <FriendItemName>{user.friendName}</FriendItemName>
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
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  z-index: 10;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  height: 360px;
  max-width: 90%;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionHeader = styled.div`
  /* 피폴 목록 */
  flex-grow: 1;
  text-align: center;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  text-align: center;
  color: #535353;
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
  /* &::-webkit-scrollbar {
    display: none;
    width: 8px;
    height: 8px;
    background-color: var(--light-gray);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--tapped-blue);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--blue-black);
  } */
`;

const FriendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: var(--light-gray);
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
    background-color: var(--hover-blue);
    color: #fff;
  }
`;
