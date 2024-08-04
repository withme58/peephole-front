// Modal.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import axios from "../../api/axios";

const Modal = ({ isOpen, onClose, questionId }) => { 
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/answer/one?questionId=${questionId}`);
        console.log(response.data);
        setData(response.data.body);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen, questionId]); 

  // Modal 전체의 애니메이션 설정
  const springProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
    config: { tension: 0, friction: 10 },
  });

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <animated.div style={springProps}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>×</CloseButton> 
          {data ? (
            <>
              <Page height={100}>{data.questionTitle}</Page>
              <Page height={350}>{data.content}</Page>
            </>
          ) : (
            <>
              <Page height={100}>제목 로딩 중...</Page>
              <Page height={350}>페이지 내용 로딩 중...</Page>
            </>
          )}
        </ModalContent>
      </animated.div>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed; 
  top: 80px;
  left: 0;
  width: 100%;
  // height: calc(100% - 500px); 
  // background: rgba(0, 0, 0, 0.5);
  background:none;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 501px; //498 
  height: 1001px;
  background: #D9D9D9;
  border-top-left-radius: 8px; 
  border-top-right-radius: 8px; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  
`;

const Page = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background: #f0f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  margin-bottom: 10px; 
`;

export default Modal;
