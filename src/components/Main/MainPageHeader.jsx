import React, { useState } from "react";
import styled from "styled-components";
import SendQuestionModal from "./SendQuestionModal";
import { useNavigate } from "react-router-dom";

export default function MainPageHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  // Mock 데이터 정의
  const MockUserData = [
    { friendName: "kj", questionId: 1 },
    { friendName: "dgf", questionId: 2 },
    { friendName: "xv", questionId: 3 },
    { friendName: "wer", questionId: 4 },
    { friendName: "sdf", questionId: 5 },
    { friendName: "ghj", questionId: 6 },
    { friendName: "tyu", questionId: 7 },
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
      <LogoButton
        onClick={() => {
          navigate("/");
        }}
      >
        핍홀
      </LogoButton>
      <MypageButton
        onClick={() => {
          navigate("/mypage");
        }}
      >
        마이페이지
      </MypageButton>
      <FriendListButton onClick={openModal}>
        질문 보낼 친구 목록
      </FriendListButton>
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
