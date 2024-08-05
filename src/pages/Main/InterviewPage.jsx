import styled from "styled-components";
import Header from "../../components/Molcules/Header";
import TodayInterview from "../../components/Main/Interview/TodayInterview";

export default function InterviewPage() {
  return (
    <PageContainer>
      <Header text={"오늘의 인터뷰"} />
      <TodayInterview />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
