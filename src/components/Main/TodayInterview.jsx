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
    { friendName: "멋쟁이 토마토", questionId: 1 },
    { friendName: "멋쟁이 복숭아", questionId: 2 },
    { friendName: "멋쟁이 수박", questionId: 3 },
    { friendName: "멋쟁이 가지", questionId: 4 },
    { friendName: "멋쟁이 사과", questionId: 5 },
    { friendName: "멋쟁이 참외", questionId: 6 },
    { friendName: "멋쟁이 메론", questionId: 7 },
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
    <InterviewContainer>
      <Logo>피폴</Logo>
      <QuestionContainer>
        <QuestionArea>{question}</QuestionArea>
      </QuestionContainer>
      <FriendListButton onClick={openModal}>오늘의 피폴</FriendListButton>
      {isModalOpen && (
        <SendQuestionModal userData={MockUserData} closeModal={closeModal} />
      )}
    </InterviewContainer>
  );
}
const InterviewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;
const QuestionContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
`;
const QuestionArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  width: 400px;
  height: 465px;
  background: rgba(18, 18, 19, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 32px;
`;

const FriendListButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  width: 300px;
  height: 60px;
  background-color: var(--tapped-blue);
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
`;
