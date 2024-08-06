import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export default function ResponsModal({ onClose, text }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <IoClose size={30} color="#5a786f" />
        </CloseButton>
        <QuestionHeader>{text}</QuestionHeader>
      </ModalContent>
    </ModalOverlay>
  );
}

const QuestionHeader = styled.div`
  font-size: 20px;
  margin: 30px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: 400px;
  height: 200px;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;
