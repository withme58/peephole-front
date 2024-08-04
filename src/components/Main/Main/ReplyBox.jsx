import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ReplyBox() {
  const navigate = useNavigate();

  return (
    <ReplyContainer>
      <Title>인터뷰 하러 가기</Title>
      <ReplyContent>
        <ReplyQuote>
          <p>친구에게</p>
          <p>나의 생각을 알려줘요.</p>
        </ReplyQuote>
        <ReplyButton
          onClick={() => {
            navigate("/questionAll");
          }}
        >
          답변하기
        </ReplyButton>
      </ReplyContent>
    </ReplyContainer>
  );
}

const ReplyContainer = styled.div`
  width: 400px;
  height: 160px;
  margin: 30px;
`;
const Title = styled.div`
  color: #fff;
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
const ReplyContent = styled.div`
  width: 400px;
  height: 120px;
  border-radius: 30px;
  background-color: rgba(14, 105, 138, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const ReplyQuote = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 100;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-left: 26px;
`;
const ReplyButton = styled.button`
  width: 130px;
  height: 60px;
  margin-right: 26px;
  border: none;
  border-radius: 20px;
  background-color: #056675;
  font-size: 16px;
  font-weight: 600;
  font-family: "Noto Sans KR";
  color: #fff;
  cursor: pointer;
`;
