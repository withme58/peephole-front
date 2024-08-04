import styled from "styled-components";
import MainHeader from "../../components/Molcules/MainHeader";
import AskBox from "../../components/Main/Main/AskBox";

export default function MainPage() {
  return (
    <MainPageContainer>
      <MainHeader text={"Peephole."} />
      <AskBox />
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
