import React from "react";
import styled from "styled-components";
import ReplyForm from "../../components/ReplyQuestion/ReplyForm";
import Header from "../../components/Molcules/Header";

export default function QuestionAll() {
  return (
    <PageContainer>
      <Header text={"질문 응답하기"} />
      <ReplyForm />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
