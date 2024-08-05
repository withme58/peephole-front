// DeleteConfirmationModal.jsx
import React from "react";
import styled from "styled-components";

export default function DeleteConfirmationModal({ onConfirm, onCancel }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>삭제하시겠습니까?</p>
        <ButtonGroup>
          <AcceptButton type="button" onClick={onConfirm}>
            예
          </AcceptButton>
          <RejectButton type="button" onClick={onCancel}>
            아니오
          </RejectButton>
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
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  p {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  button {
    margin: 0px 2px;
  }
`;

const AcceptButton = styled.button`
  width: 55px;
  height: 30px;
  font-size: 12px;
  display: flex;
  background-color: var(--hover-blue);
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const RejectButton = styled.button`
  width: 55px;
  height: 30px;
  font-size: 12px;
  display: flex;
  background-color: var(--light-gray);
  color: var(--deep-gray);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
