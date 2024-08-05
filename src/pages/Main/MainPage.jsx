import styled from "styled-components";
import MainHeader from "../../components/Molcules/MainHeader";
import AskBox from "../../components/Main/Main/AskBox";
import ReplyBox from "../../components/Main/Main/ReplyBox";
import LibraryBox from "../../components/Main/Main/LibraryBox";

export default function MainPage() {
  return (
    <MainPageContainer>
      <MainHeader />
      <AskBox />
      <ReplyBox />
      <LibraryBox />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
