import LandingtoLogin from "../../components/Landing/LandingtoLogin";
import React, { useState } from "react";
import styled from "styled-components";
import LandingMain from "../../components/Landing/LandingMain";
import LandingHeader from "../../components/Landing/LandingHeader";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <PageContainer>
      {showModal && <LandingModal onClose={handleCloseModal} />}
      <LandingHeader />
      <LandingtoLogin />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  /* height: 100%; */
  overflow: hidden;
`;

const LandingModal = ({ onClose }) => {
  return (
    <ModalContainer>
      <BlurBackground />
      <ModalContent>
        <LandingMain onClose={onClose} />
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: -1;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
