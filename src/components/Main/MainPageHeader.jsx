import React, { useState } from "react";
import styled from "styled-components";
import SendQuestionModal from "./SendQuestionModal";

export default function MainPageHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock 데이터 정의
  const MockUserData = [
    { name: "김철수", id: 1 },
    { name: "김영희", id: 2 },
    { name: "박민수", id: 3 },
  ];

  // 모달 열기
  const openModal = () => {
    console.log("모달 열기");
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    console.log("모달 닫기");
    setIsModalOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoButton>핍홀</LogoButton>
      <MypageButton>마이페이지</MypageButton>
      <FriendListButton onClick={openModal}>친구 목록</FriendListButton>
      {isModalOpen && (
        <SendQuestionModal userData={MockUserData} closeModal={closeModal} />
      )}
    </HeaderContainer>
  );
}

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MypageButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const FriendListButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
