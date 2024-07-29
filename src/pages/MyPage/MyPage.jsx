import styled from "styled-components";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageForm from "../../components/MyPage/MyPageForm";

export default function MyPage() {
  return (
    <PageContainer>
      <MyPageHeader />
      <MyPageForm />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
