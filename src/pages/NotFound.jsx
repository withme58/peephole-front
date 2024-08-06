import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <FzFError src="images/page-not-found.png" />
      <NotFoundQuote>앗! 여기가 아닌데요;;;</NotFoundQuote>
      <ReturnButton>돌아가기</ReturnButton>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const NotFoundQuote = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  font-family: "Noto sans KR";
`;

const ReturnButton = styled.button``;

const FzFError = styled.img`
  width: 435px;
  height: auto;
  display: flex;
  margin-top: 300px;
`;
