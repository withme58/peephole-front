import LandingtoLogin from "../../components/Landing/LandingtoLogin";
import React from "react";
import LandingHeader from "../../components/Landing/LandingHeader";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <PageContainer>
      <LandingHeader text={"Peephole."} />
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
