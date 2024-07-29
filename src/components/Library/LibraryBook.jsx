import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./OpenBook";  // 모달 경로에 맞게 수정

export default function LibraryBook({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BookContainer onClick={() => setIsModalOpen(true)}>
        <h1>{title}</h1>
      </BookContainer>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={title} 
      />
    </>
  );
}



const BookContainer = styled.div`
  width: 118px;
  height: 180px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
`;
