import React from "react";
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

export default function FailModal({ closeModal }) {
  const onClickBackground = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Background onClick={onClickBackground}>
      <ModalContainer>
        <CloseButton onClick={closeModal}>
          <TfiClose size={24} color="#8e8e8e" />
        </CloseButton>
        <ImageContainer>
          <img src="images/fail.png" alt="fail" width={200} />
        </ImageContainer>
        <SendMessage>
          <p>오늘은 이미</p>
          <p>인터뷰를 전송했어요.</p>
        </SendMessage>
      </ModalContainer>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 73, 84, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  z-index: 10;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  height: 369px;
  max-width: 90%;
  padding: 20px;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const SendMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: var(--title-text);
  margin-top: 20px;
  span {
    font-weight: 700;
    color: var(--main-blue);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
