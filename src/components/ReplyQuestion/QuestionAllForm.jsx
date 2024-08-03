import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function QuestionAll() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/question");
      console.log("question List response:", response.data.body); // 응답 데이터
      setQuestions(response.data.body.question); // Ensure 'question' is correct
    } catch (error) {
      console.error("질문 리스트 데이터 로드 실패:", error);
    }
  };

  const onClick = (data) => {
    navigate("/reply", { state: { answerId: data.answerId } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormContainer>
      {questions.map((data, index) => (
        <QuestionDiv key={index} onClick={() => onClick(data)}>
          <Title>
            <DateDiv>{new Date(data.createdAt).toLocaleDateString()}</DateDiv>
            <FriendDiv>{data.friendName}님이 보냈습니다.</FriendDiv>
          </Title>
          <ContentDiv>{data.questionName}</ContentDiv>
        </QuestionDiv>
      ))}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #d9d9d930;
  height: 90%;
  margin: 30px;
  color: #fff;
`;

const QuestionDiv = styled.div`
  color: #fff;
  text-align: left; /* 왼쪽 정렬 */
  width: 100%; /* 전체 너비 사용 */
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #fff;
  cursor: pointer;
`;

const Title = styled.div`
  text-align: left; /* 왼쪽 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DateDiv = styled.div`
  color: #fff;
  text-align: left; /* 왼쪽 정렬 */
  font-size: 25px;
`;

const FriendDiv = styled.div`
  color: #fff;
  text-align: left; /* 왼쪽 정렬 */
  font-size: 22px;
`;

const ContentDiv = styled.div`
  color: #fff;
  text-align: left; /* 왼쪽 정렬 */
  font-size: 22px;
`;
