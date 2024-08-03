import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./OpenBook";  // 모달 경로에 맞게 수정

export default function LibraryBook({ title, questionId }) { // questionId를 props로 추가
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
        questionId={questionId} // questionId를 모달에 전달
      />
    </>
  );
}

const BookContainer = styled.div`
  width: 118px;
  height: 180px;
  background: rgba(255, 255, 255, 0.30); /* 단색 배경으로 변경하여 흐림 효과를 확실히 볼 수 있게 함 */
  opacity: 30%;
  backdrop-filter: blur(10px); /* 배경 흐림 효과 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2); /* 태두리 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
`;
