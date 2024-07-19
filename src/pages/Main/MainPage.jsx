import styled from "styled-components";

import MainPageHeader from "../../components/Main/MainPageHeader";
import SendQuestionModal from "../../components/Main/SendQuestionModal";

export default function MainPage() {
  return (
    <MainPageContainer>
      <MainPageHeader />
      <ReplyList />
      <ArchiveList />
      <SendQuestionModal />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div``;

const ReplyList = styled.button``;

const ArchiveList = styled.button``;
