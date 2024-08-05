import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../Molcules/Input";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function MyPageForm() {
  const [name, setName] = useState("으깬 감자");
  const navigate = useNavigate();
  const [email, setEmail] = useState("abc@naver.com");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/member/me");
      console.log("Mypage response:", response.data.body); // 응답 데이터
      setName(response.data.body.name);
      setEmail(response.data.body.email);
    } catch (error) {
      console.error("마이페이지 데이터 로드 실패:", error);
    }
  };

  const goFriendList = () => {
    navigate("/list");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Form>
      <Title>
        <Name>{`${name}`}</Name>님 <br /> 건강한 하루 보내세요!
      </Title>
      <Profile
        src={`${process.env.PUBLIC_URL}/images/profile.png`}
        alt="logo"
      />
      <SendButton onClick={goFriendList}>친구 목록</SendButton>
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
  display: flex;
  flex-direction: column;
  align-items: center;
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

const UserInfoBox = styled.div`
  width: 400px;
  margin: 10px;
  text-align: left;
`;

const InputBox = styled.div`
  margin: 20px 0px 10px 0px;
`;
const SendButton = styled.button`
  padding: 12px;
  width: 400px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #85b1bf;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
