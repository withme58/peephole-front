// import LandingtoLogin from "../../components/Landing/LandingtoLogin";
import React from "react";
import MainHeader from "../../components/Molcules/MainHeader";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <PageContainer>
      <MainHeader text={"Peephole."} />
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
