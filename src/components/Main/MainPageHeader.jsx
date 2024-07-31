import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { IoIosChatbubbles } from "react-icons/io";

export default function MainPageHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoButton
        onClick={() => {
          navigate("/");
        }}
      >
        피폴
      </LogoButton>
      <ButtonContainer>
        <MypageButton
          onClick={() => {
            navigate("/mypage");
          }}
        >
          <IoPersonSharp size={20} />
        </MypageButton>
        <LibraryButton
          onClick={() => {
            navigate("/library");
          }}
        >
          <BiLibrary />
        </LibraryButton>
        <InterviewButton
          onClick={() => {
            navigate("/interview");
          }}
        >
          <IoIosChatbubbles />
        </InterviewButton>
      </ButtonContainer>
    </HeaderContainer>
  );
}

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 추가된 부분 */
  padding: 20px;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  flex: 1; /* 추가된 부분 */
  text-align: center; /* 추가된 부분 */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const MypageButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

const LibraryButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

const InterviewButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;
