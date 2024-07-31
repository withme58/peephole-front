import React from "react";
import styled from "styled-components";
import ReplyForm from "../../components/ReplyQuestion/ReplyForm";

export default function ReplyQuestionPage() {
  return (
    <PageContainer>
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
