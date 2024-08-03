import React from "react";
import styled from "styled-components";
import Header from "../../components/Molcules/Header";
import QuestionAllForm from "../../components/ReplyQuestion/QuestionAllForm";

export default function QuestionAll() {
  return (
    <PageContainer>
      <Header text={"오늘의 인터뷰"} />
      <QuestionAllForm />
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
