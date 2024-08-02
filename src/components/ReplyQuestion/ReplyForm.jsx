import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Updated import

export default function ReplyForm() {
  const question = "질문 뭐하지 오늘 뭐했니? ㅎㅎ 아 배고프당";
  const [replyText, setReplyText] = useState("");
  const navigate = useNavigate(); // Updated hook

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
      setReplyText(""); // Clear the textarea after submission
      navigate("/"); // Navigate back to the root route
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <QuestionBox>{question}</QuestionBox>
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
  align-items: center;
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
