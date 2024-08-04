import React from "react";
import styled from "styled-components";

export default function FailModal({ closeModal }) {
  const onClickBackground = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalBackground onClick={onClickBackground}>
      <ModalContainer>
        <ModalHeader>
          <h2>전송 실패</h2>
        </ModalHeader>
        <ModalContent>
          <p>질문 전송에 실패했습니다. 다시 시도해 주세요.</p>
          <CloseButton onClick={closeModal}>닫기</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
}

// Styled Components
const ModalBackground = styled.div`
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
  background-color: var(--deep-gray);
  border-radius: 10px;
  width: 400px;
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;

  background-color: var(--disabled-gray);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--blue-gray);
  }
`;
