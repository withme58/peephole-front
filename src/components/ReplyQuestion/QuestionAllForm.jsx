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
    navigate("/questionOne", { state: { answerId: data.answerId } });
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
            <FriendDiv>{data.friendName}</FriendDiv>
          </Title>

          <ContentDiv>
            <Profile
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt="logo"
            />
            <Content>{data.questionName}</Content>
          </ContentDiv>
        </QuestionDiv>
      ))}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const QuestionDiv = styled.div`
  color: #fff;
  text-align: left; /* 왼쪽 정렬 */
  width: 100%; /* 전체 너비 사용 */
  margin: 15px;
  min-height: 120px;
  padding: 10px;
  background-color: #fff90;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 20px;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
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
  font-size: 15px;
`;

const FriendDiv = styled.div`
  color: #fff;
  text-align: left; /* 왼쪽 정렬 */
  font-size: 15px;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

const Content = styled.div`
  color: #fff;
  text-align: left; /* 왼쪽 정렬 */
  font-size: 15px;
`;
