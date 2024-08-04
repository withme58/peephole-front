import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AskBox() {
  const navigate = useNavigate();
  return (
    <AskBoxContainer>
      <AskBoxTitle>
        하루에 한 명, <span>인터뷰</span>를 해볼까요?
      </AskBoxTitle>
      <AskBoxContent>
        <AskBoxQuote>
          <p>매일매일 색다른 질문을 받아</p>
          <p>친구의 생각도 들어보고,</p>
          <p>스스로도 사고해 봅시다.</p>
        </AskBoxQuote>
        <AskBoxButton
          onClick={() => {
            navigate("/interview");
          }}
        >
          질문하기
        </AskBoxButton>
      </AskBoxContent>
    </AskBoxContainer>
  );
}
const AskBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 400px;
  height: 448px;
  padding: 10px;
  background-color: rgba(61, 73, 84, 0.3);
  border-radius: 10px;
`;
const AskBoxTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #fff;
  text-align: center;
  span {
    color: var(--main-blue);
  }
`;

const AskBoxContent = styled.div`
  text-align: center;
  /* gap: 10px; */
`;
const AskBoxQuote = styled.div`
  font-size: 20px;
  font-weight: medium;
  font-family: "Noto Sans KR";
  color: #fff;
`;
const AskBoxButton = styled.button`
  margin-top: 50px;
  width: 140px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background-color: var(--tapped-blue);
  font-size: 16px;
  font-weight: 600;
  font-family: "Noto Sans KR";
  color: #fff;
  cursor: pointer;
`;
