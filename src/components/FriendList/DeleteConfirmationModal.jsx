// DeleteConfirmationModal.jsx
import React from "react";
import styled from "styled-components";

export default function DeleteConfirmationModal({ onConfirm, onCancel }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>삭제하시겠습니까?</p>
        <ButtonGroup>
          <button onClick={onConfirm}>예</button>
          <button onClick={onCancel}>아니요</button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
}

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
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    cursor: pointer;
  }
`;
