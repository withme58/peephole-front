import React from "react";
import styled from "styled-components";
import Header from "../../components/Molcules/Header";
import InterviewOne from "../../components/ReplyQuestion/InterviewOne";

export default function QuestionOne() {
  return (
    <PageContainer>
      <Header text="받은 인터뷰" link="/peephole" />
      <InterviewOne />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
