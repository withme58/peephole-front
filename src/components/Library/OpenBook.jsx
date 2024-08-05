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

  const springProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
    config: { tension: 0, friction: 10 },
  });

  if (!isOpen) return null;

  const formatReceiverName = (name) => {
    return name.length > 10 ? `${name.slice(0, 10)}...` : name;
  };

  return (
    <ModalOverlay onClick={onClose}>
      <animated.div style={springProps}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>×</CloseButton> 
          {data ? (
            <>
              <Header>
                <ReceiverName>{formatReceiverName(data.receiverName)}</ReceiverName> 님의 인터뷰
              </Header> 
              <QuestionTitle>{data.questionTitle}</QuestionTitle>
              <Content>{data.content}</Content>
            </>
          ) : (
            <>
              <Header>
                <ReceiverName>닉네임</ReceiverName> 로딩 중...
              </Header> 
              <QuestionTitle>제목 로딩 중...</QuestionTitle>
              <Content>페이지 내용 로딩 중...</Content>
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
  background: none;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 501px; 
  height: 1001px;
  background: #F8F8F8;
  border-top-right-radius: 28px; 
  border-top-left-radius: 28px; 
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
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Header = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: 59px; 
  left: 55px; 
  font-size: 21px;
  font-weight: Normal;
  color: #8E8E8E;
`;


const ReceiverName = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  color: #2E90AF;
  font-size: 30px;
  font-weight: Bold;
`;

const QuestionTitle = styled.div`
  width: 388px;
  height: 180px;
  // background: #f0f0f0;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 24px; 
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  backface-visibility: hidden;
  position: absolute; 
  top: 150px; 
`;

const Content = styled.div`
  width: 388px;
  height: 550px;
  // background: #f0f0f0;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20px; 
  font-weight: regular;

  font-family: 'Noto Sans KR', sans-serif;
  backface-visibility: hidden;
  position: absolute; 
  top: 330px; 
  overflow-y: auto; /* 추가된 부분 */
  &::-webkit-scrollbar {
      display: none;
    }
`;

export default Modal;
