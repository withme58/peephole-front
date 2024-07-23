import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export default function SuccessModal({ closeModal, userData = [] }) {
  const onClickBackground = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <Background onClick={onClickBackground}>
      <ModalContainer>
        <CloseButton>
          <IoClose onClick={closeModal} size={25} color="#5a786f" />
        </CloseButton>
        <SendMessage>{userData.friendId}에게 보냈습니다.</SendMessage>
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

const CloseButton = styled.div`
  cursor: pointer;
`;

const SendMessage = styled.div``;
