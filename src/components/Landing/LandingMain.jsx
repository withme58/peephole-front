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
          <Introduction>소개 1</Introduction>
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
      <Dots>
        {[...Array(3)].map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </Dots>
      <StartButton onClick={onClose} disabled={currentIndex !== 2}>
        시작하기
      </StartButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #3d4954;
  overflow: hidden;
`;

const SwipeContainer = styled.div`
  display: flex;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: transform 0.5s ease-in-out;
  width: 300%;
`;

const Slide = styled.div`
  min-width: 100vw;
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
  font-size: 24px;
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
  font-size: 36px;
  color: #fff;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#fff" : "#888")};
`;

const StartButton = styled.button`
  margin-top: 20px;
  width: 140px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  font-weight: medium;
  font-family: "Noto Sans KR";
  color: #3d4954;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

export default LandingMain;
