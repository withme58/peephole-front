import React from "react";
import StartButton from "../../components/Lading/StartButton";
import PagenaionForLanding from "../../components/Lading/PagenationForLanding";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <PageContainer>
      <PagenaionForLanding />
      <StartButton />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff; //나중에 깡흰색이 아니길 바랍니다
  //border: 1px solid black;
`;
