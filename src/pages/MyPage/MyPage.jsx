import styled from "styled-components";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageForm from "../../components/MyPage/MyPageForm";
import Header from "../../components/Molcules/Header";

export default function MyPage() {
  return (
    <PageContainer>
      <Header text={"마이페이지"} />
      <MyPageForm />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100vh;
`;
