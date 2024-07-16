import React from "react";
import styled from "styled-components";

export default function Advertise({ image, title, content }) {
  return (
    <Container>
      <ImageArea>
        <img src={image} alt={title || "설명 이미지"} />
      </ImageArea>
      <TextBox>
        <TitleArea>{title}</TitleArea>
        <ContentArea>{content}</ContentArea>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: #fff; */
  align-items: center;
`;

const TextBox = styled.div`
  padding: 20px;
`;

const ImageArea = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
`;

const TitleArea = styled.div`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height, or 138% */
  text-align: center;
  letter-spacing: -0.025em;

  color: #535353;
`;

const ContentArea = styled.div`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  /* or 157% */
  text-align: center;
  letter-spacing: -0.025em;

  color: #979797;
`;
