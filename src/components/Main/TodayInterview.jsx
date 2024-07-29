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

const Logo = styled.div`
  color: #fff;
`;
const InterviewContainer = styled.div`
  color: #fff;
`;
const QuestionArea = styled.div``;

const FriendListButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;
