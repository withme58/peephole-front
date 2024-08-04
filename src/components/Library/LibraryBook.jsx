import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./OpenBook";  

export default function LibraryBook({ title, questionId, colorCode }) { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BookContainer colorCode={colorCode} onClick={() => setIsModalOpen(true)}>
        <h1>{title}</h1>
      </BookContainer>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={title} 
        questionId={questionId} 
      />
    </>
  );
}

const BookContainer = styled.div`
  width: 118px;
  height: 180px;
  background: ${(props) => props.colorCode || 'rgba(255, 255, 255, 1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
`;
