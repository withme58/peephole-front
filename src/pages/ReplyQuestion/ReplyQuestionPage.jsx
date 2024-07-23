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
  width: 390px;
  height: 844px;
  position: relative;
`;
