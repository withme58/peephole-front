import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LibraryBox() {
  const navigate = useNavigate();

  return (
    <LibraryContainer>
      <Title>인터뷰 모아 보기</Title>
      <LibraryContent>
        <LibraryQuote>
          <p>친구들의 생각을</p>
          <p>들어볼까요?</p>
        </LibraryQuote>
        <LibraryButton
          onClick={() => {
            navigate("/library");
          }}
        >
          책장 보러가기
        </LibraryButton>
      </LibraryContent>
    </LibraryContainer>
  );
}

const LibraryContainer = styled.div`
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

const LibraryContent = styled.div`
  width: 400px;
  height: 120px;
  border-radius: 30px;
  background-color: rgba(14, 105, 138, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LibraryQuote = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 100;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-left: 26px;
`;

const LibraryButton = styled.button`
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
