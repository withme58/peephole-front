import styled from "styled-components";
import { useState, useEffect } from "react";
import SendQuestionModal from "./SendQuestionModal";
import CalculateDate from "../../CalculateDate/CalculateDate";
import axios from "../../../api/axios";

export default function TodayInterview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState(null);
  const [questionId, setQuestionId] = useState(null);

  const [friendList, setFriendList] = useState([]);

  async function getQuestion() {
    try {
      const response = await axios.get("/api");
      setQuestion(response.data.body.question);
      setQuestionId(response.data.body.questionId);
      console.log("Question response:", response);
    } catch (error) {
      console.error("Question 데이터 로드 실패:", error);
    }
  }

  useEffect(() => {
    getQuestion();
  }, []);

  async function getFriendList() {
    try {
      const response = await axios.get("/api/myfriends");
      setFriendList(response.data.body.friends);
      console.log("FriendList response:", response);
    } catch (error) {
      console.error("FriendList 데이터 로드 실패:", error);
    }
  }

  useEffect(() => {
    getFriendList();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <InterviewContainer>
      <Logo>피폴</Logo>
      <QuestionContainer>
        <QuestionArea>{question}</QuestionArea>
        <CalculateDate />
      </QuestionContainer>
      <ButtonContainer>
        <FriendListButton onClick={openModal}>오늘의 피폴</FriendListButton>
      </ButtonContainer>
      {isModalOpen && (
        <SendQuestionModal
          questionId={questionId}
          userData={friendList}
          closeModal={closeModal}
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
  text-align: center;
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

const ButtonContainer = styled.div`
  padding: 10px 0 40px 0;
`;
