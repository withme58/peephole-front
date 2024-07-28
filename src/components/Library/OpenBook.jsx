import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

const Modal = ({ isOpen, onClose, title }) => {
  // Modal 전체의 애니메이션 설정
  const springProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "rotateY(0deg)" : "rotateY(-90deg)",
    config: { tension: 300, friction: 20 },
  });

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <animated.div style={springProps}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {/* <CloseButton onClick={onClose}>X</CloseButton> */}
          {/* <BookTitle>{title}</BookTitle> */}
          <Page height={100}>
		        	제목
          </Page>
          <Page height={350}>
            페이지 내용
          </Page>
        </ModalContent>
      </animated.div>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 450px;
  height: auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px; /* 3D 효과를 위해 */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff0000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookTitle = styled.h1`
  margin-bottom: 20px;
`;

const Page = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background: #f0f0f0;
  // border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden; /* 페이지의 뒷면을 숨김 */
  margin-bottom: 10px; /* 페이지 사이의 간격 */
`;

export default Modal;
