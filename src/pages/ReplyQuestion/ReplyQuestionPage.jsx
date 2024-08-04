import React from "react";
import styled from "styled-components";
import ReplyForm from "../../components/ReplyQuestion/ReplyForm";
import Header from "../../components/Molcules/Header";

export default function ReplyQuestionPage() {
  return (
    <PageContainer>
      <Header text={"오늘의 인터뷰"} />
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
