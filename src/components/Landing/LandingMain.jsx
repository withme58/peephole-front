import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const LandingMain = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 2)),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <Container {...handlers}>
      <SwipeContainer currentIndex={currentIndex}>
        <Slide>
          <Logo src="images/Logo.png" alt="Peephole." />
        </Slide>
        <Slide>
          <IntroductionWrapper>
            <Logo src="images/Logo.png" alt="Peephole." />
          </IntroductionWrapper>
        </Slide>
        <Slide>
          <IntroductionWrapper>
            <IntroductionTitle>이것은 메인페이지</IntroductionTitle>
            <Image src="images/main-mock.png" alt="Main Mockup" />
          </IntroductionWrapper>
        </Slide>
        <Slide>
          <IntroductionWrapper>
            <IntroductionTitle>이것은 세부페이지</IntroductionTitle>
            <Image src="images/detail-mock.png" alt="Detail Mockup" />
            <StartButtonContainer>
              <StartButton onClick={onClose}>시작하기</StartButton>
            </StartButtonContainer>
          </IntroductionWrapper>
        </Slide>
      </SwipeContainer>
      <ButtonContainer>
        <ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
          &#9664;
        </ArrowButton>
        <ArrowButton onClick={handleNext} disabled={currentIndex === 2}>
          &#9654;
        </ArrowButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("images/background_blue.png");
  background-size: cover;
  overflow: hidden;
  position: relative;
  width: 498px;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

const SwipeContainer = styled.div`
  display: flex;
  width: 1494px; /* 총 4개의 슬라이드를 위한 너비 */
  transform: ${({ currentIndex }) =>
    `translateX(-${(currentIndex * 100) / 3}%)`};
  transition: transform 0.5s ease-in-out;
  height: 100%; /* 화면 전체 높이를 차지하도록 설정 */
`;

const Slide = styled.div`
  width: 498px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Logo = styled.img`
  width: 240px;
  height: auto;
  margin-bottom: 250px;
  color: #fff;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* 내용이 중앙에 오도록 설정 */
`;

const IntroductionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #fff;
  margin-bottom: 20px;
`;

const Introduction = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #fff;
  margin-bottom: 20px; /* Peephole 텍스트를 위로 이동시키기 위해 추가된 여백 */
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const StartButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StartButton = styled.button`
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 16px;
  background-color: var(--main-blue);
  font-size: 24px;
  font-weight: 600;
  font-family: "Noto Sans KR";
  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  z-index: 100; /* 버튼이 맨 위에 있도록 설정 */

  &:disabled {
    background-color: rgba(175, 175, 175, 0.5);
    cursor: not-allowed;
  }
`;

export default LandingMain;
