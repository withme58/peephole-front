import styled from "styled-components";

import MainPageHeader from "../../components/Main/MainPageHeader";
import SendQuestionModal from "../../components/Main/SendQuestionModal";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <MainPageContainer>
      <MainPageHeader />
      <ReplyList
        onClick={() => {
          navigate("/mypage");
        }}
      />
      <ArchiveList
        onClick={() => {
          navigate("/member");
        }}
      />
      <SendQuestionModal />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div``;

const ReplyList = styled.button``;

const ArchiveList = styled.button``;
