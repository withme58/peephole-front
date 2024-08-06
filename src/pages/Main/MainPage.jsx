import styled from "styled-components";
import MainHeader from "../../components/Molcules/MainHeader";
import AskBox from "../../components/Main/Main/AskBox";
import ReplyBox from "../../components/Main/Main/ReplyBox";
import LibraryBox from "../../components/Main/Main/LibraryBox";

export default function MainPage() {
  return (
    <MainPageContainer>
      <MainHeader />
      <MainContent>
        <AskBox />
        <ReplyBox />
        <LibraryBox />
      </MainContent>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; /* 최대 너비 설정 */
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;
