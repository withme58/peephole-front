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
          <Logo>Peephole.</Logo>
        </Slide>
        <Slide>
          <Introduction>Peephole.</Introduction>
        </Slide>
        <Slide>
          <Introduction>소개 2</Introduction>
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
      <DotsContainer>
        <Dots>
          {[...Array(3)].map((_, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </Dots>
        <StartButton onClick={onClose} disabled={currentIndex !== 2}>
          시작하기
        </StartButton>
      </DotsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("images/background_blue.png");
  background-size: 500px auto; /* 너비를 500px로 설정하고 높이를 화면 전체 높이로 설정 */

  overflow: hidden;
  position: relative;
  width: 498px;
  height: 100vh;
`;

const SwipeContainer = styled.div`
  display: flex;
  width: 300%;
  transform: ${({ currentIndex }) =>
    `translateX(-${(currentIndex * 100) / 3}%)`};
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: 48px;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #fff;
`;

const Introduction = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #fff;
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

const DotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

const Dots = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#fff" : "#888")};
`;

const StartButton = styled.button`
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 16px;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(175, 175, 175, 0.5)" : "var(--main-blue)"};
  font-size: 24px;
  font-weight: 600;
  font-family: "Noto Sans KR";
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity 0.3s ease, background-color 0.3s ease;
  z-index: 100; /* Ensure button is on top */
`;

export default LandingMain;
