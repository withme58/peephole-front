import styled from "styled-components";
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
  justify-content: center;
  margin-bottom: 30px;
`;
