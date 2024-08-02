import styled from "styled-components";
import { useState, useEffect } from "react";
import SendQuestionModal from "./SendQuestionModal";
import CalculateDate from "../CalculateDate/CalculateDate";
import axios from "../../api/axios";
import { set } from "react-hook-form";

export default function TodayInterview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState(null);
  const [friendList, setFriendList] = useState([]);

  // 질문 데이터 불러오기
  async function getQuestion() {
    try {
      const response = await axios.get("/api");
      setQuestion(response.data.body.question);
      console.log("Question response:", response); // 응답 데이터
    } catch (error) {
      console.error("Question 데이터 로드 실패:", error);
    }
  }

  useEffect(() => {
    getQuestion();
  }, []);

  //친구 목록 불러오기
  async function getFriendList() {
    try {
      const response = await axios.get("/api/myfriends");
      setFriendList(response.data.body.myfriends);
      console.log("FriendList response:", response); // 응답 데이터
    } catch (error) {
      console.error("FriendList 데이터 로드 실패:", error);
    }
  }

  useEffect(() => {
    getFriendList();
  }, []);

  const mockquestion = `
  중요한 결정을 내릴 때,
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
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <InterviewContainer>
      <Logo>피폴</Logo>
      <QuestionContainer>
        <QuestionArea>{mockquestion}</QuestionArea>
        {/* <QuestionArea>{question}</QuestionArea> */}
        <CalculateDate />
      </QuestionContainer>
      <FriendListButton onClick={openModal}>오늘의 피폴</FriendListButton>
      {isModalOpen && (
        <SendQuestionModal userData={MockUserData} closeModal={closeModal} /> //여기에 friendList 넣음
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
  font-weight: 500;
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
  text-align: center; /* 추가된 부분 */
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
