import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import axios from "../../api/axios";

const Modal = ({ isOpen, onClose, questionId }) => { 
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://52.78.139.165:8080/api/answer/one?questionId=${questionId}`);
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
    transform: isOpen ? "rotateY(0deg)" : "rotateY(-90deg)",
    config: { tension: 300, friction: 20 },
  });

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <animated.div style={springProps}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
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
  perspective: 1000px; 
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
