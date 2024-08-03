import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom"; // Updated import
import axios from "../../api/axios";

export default function ReplyForm() {
  const location = useLocation();
  const { answerId } = location.state || {}; // 전달된 상태를 받아옴
  const [question, setQuestion] = useState(null); // 초기 상태 null로 변경
  const [replyText, setReplyText] = useState("");
  const navigate = useNavigate(); // Updated hook

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/question/${answerId}`);
      console.log("question single response:", response.data.body); // 응답 데이터
      setQuestion(response.data.body); // Ensure entire body is assigned correctly
    } catch (error) {
      console.error("단일 질문 데이터 로드 실패:", error);
    }
  };

  useEffect(() => {
    if (answerId) {
      fetchData();
    }
  }, [answerId]);

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= 300) {
      setReplyText(text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      // Handle the submission logic here (e.g., send the reply to a server)
      console.log("Submitted reply:", replyText);
      console.log("Answer ID:", answerId); // Answer ID 출력
      setReplyText(""); // Clear the textarea after submission
      navigate("/"); // Navigate back to the root route
    }
  };

  if (!question) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <QuestionBox>
        <div>{new Date(question.createdAt).toLocaleDateString()}</div>
        <div>{question.friendName}님이 보냈습니다.</div>
        <div>{question.questionName}</div>
      </QuestionBox>
      <TextArea
        value={replyText}
        onChange={handleChange}
        placeholder="답변을 입력하세요..."
      />
      <CharCount>{replyText.length}/300</CharCount>
      <SubmitButton type="submit">제출</SubmitButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  justify-content: center;
  font-size: 15px;
  height: 100px;
  font-weight: bold;
  padding: 0 10px;
  width: 100%;
  color: #fff;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const CharCount = styled.div`
  font-size: 12px;
  color: #555;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
