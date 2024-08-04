import styled from "styled-components";

import MainPageHeader from "../../components/Main/MainPageHeader";

export default function MainPage() {
  return (
    <MainPageContainer>
      <MainPageHeader />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
