import styled from "styled-components";
import { useState } from "react";
import SendQuestionModal from "./SendQuestionModal";

export default function TodayInterview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const question = `
  중요한 결정을 내릴 때, 
  나의 가치와 원칙은
  어떤 영향을 미치나요? 

  그 가치는 무엇에서
  비롯된 건가요?`;
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
    <>
      <Logo>피폴</Logo>
      <InterviewContainer>
        <QuestionArea>{question}</QuestionArea>
      </InterviewContainer>
      <FriendListButton onClick={openModal}>
        질문 보낼 친구 목록
      </FriendListButton>
      {isModalOpen && (
        <SendQuestionModal userData={MockUserData} closeModal={closeModal} />
      )}
    </>
  );
}

const Logo = styled.div``;
const InterviewContainer = styled.div``;
const QuestionArea = styled.div``;

const FriendListButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
