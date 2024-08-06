import styled from "styled-components";
import { useState, useEffect } from "react";
import CalculateDate from "../CalculateDate/CalculateDate";
import { useNavigate, useLocation } from "react-router-dom"; // Updated import
import axios from "../../api/axios";
import ReplyModal from "./ReplyModal";

export default function InterviewOne() {
  const location = useLocation();
  const { answerId } = location.state || {}; // 전달된 상태를 받아옴
  const [question, setQuestion] = useState(null); // 초기 상태 null로 변경
  const [friendId, setFriendId] = useState();

  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);

  const openReplyModal = () => {
    setIsReplyModalOpen(true);
  };

  const closeReplyModal = () => {
    setIsReplyModalOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/question/${answerId}`);
      console.log("question single response:", response.data.body); // 응답 데이터
      setQuestion(response.data.body.questionName); // Ensure entire body is assigned correctly
      setFriendId(response.data.body.friendId);
    } catch (error) {
      console.error("단일 질문 데이터 로드 실패:", error);
    }
  };

  useEffect(() => {
    if (answerId) {
      fetchData();
    }
  }, [answerId]); // `fetchData`가 아닌 `answerId`를 종속성 배열에 추가
  const goInterview = () => {};

  return (
    <InterviewContainer>
      <Logo src="images/Logo.png" alt="Peephole." />
      <QuestionContainer>
        <QuestionArea>{question}</QuestionArea>
        <CalculateDate />
      </QuestionContainer>
      <ButtonContainer onClick={openReplyModal}>
        <FriendListButton onClick={goInterview}>인터뷰하기</FriendListButton>
      </ButtonContainer>
      {isReplyModalOpen && (
        <ReplyModal
          onClose={closeReplyModal}
          question={question}
          answerId={answerId}
          friendId={friendId}
        />
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

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #fff;
`;

const QuestionContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  background: rgba(61, 73, 84, 0.3);
  backdrop-filter: blur(8px);
  gap: 80px;
  border-radius: 32px;
  width: 400px;
  height: 465px;
`;

const QuestionArea = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const FriendListButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  width: 300px;
  height: 60px;
  background-color: var(--tapped-blue);

  font-size: 24px;
  font-weight: 800;
  color: #fff;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  padding: 10px 0 40px 0;
`;
