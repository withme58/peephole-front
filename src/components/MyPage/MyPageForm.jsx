import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Molcules/Input";

import axios from "../../api/axios";

export default function MyPageForm() {
  const [name, setName] = useState("으깬 감자");
  const [receivedCount, setReceivedCount] = useState(3);
  const [givenCount, setGivenCount] = useState(1);
  const [receivedTotalCount, setReceivedTotalCount] = useState(11);
  const [givenTotalCount, setGivenTotalCount] = useState(4);
  const [email, setEmail] = useState("abc@naver.com");

  const fetchData = async () => {
    try {
      const response = axios.get(`/member/me`);
      if (response.result.resultCode === 200) {
        // 성공
      }
    } catch (error) {}
  };

  return (
    <Form>
      <Title>
        <Name>{`${name}`}</Name>님 <br /> 건강한 하루 보내세요!
      </Title>
      <Profile
        src={`${process.env.PUBLIC_URL}/images/profile.png`}
        alt="logo"
      />
      <InfoBox>
        <CountDiv>
          <CountTitle>도움 받은 횟수</CountTitle>
          <CountNum>{receivedCount}</CountNum>
          <CountNumTotal>{receivedTotalCount}회</CountNumTotal>
        </CountDiv>
        <CountDiv>
          <CountTitle>도움을 준 횟수</CountTitle>
          <CountNum>{givenCount}</CountNum>
          <CountNumTotal>{givenTotalCount}회</CountNumTotal>
        </CountDiv>
      </InfoBox>
      <UserInfoBox>
        <InputBox>
          <Input
            title="닉네임"
            placeholder={name}
            name="nickname"
            disabled={true}
          />
        </InputBox>
        <InputBox>
          <Input
            title="이메일"
            placeholder={email}
            name="email"
            disabled={true}
          />
        </InputBox>
      </UserInfoBox>
    </Form>
  );
}

const Form = styled.div`
  padding: 20px 20px 0;
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

const Name = styled.span`
  color: #42aacb;
`;

const Profile = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
`;

const InfoBox = styled.div`
  width: 400px;
  height: 157px;
  border: 2px solid #42aacb;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3d495430;
`;

const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

const CountTitle = styled.div`
  color: white;
  font-size: 18px;
`;

const CountNum = styled.div`
  color: #42aacb;
  font-size: 60px;
`;

const CountNumTotal = styled.div`
  color: #8e8e8e;
  font-size: 18px;
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const UserInfoBox = styled.div`
  margin: 10px;
  text-align: left;
`;

const InputBox = styled.div`
  margin: 20px 0px 10px 0px;
`;
