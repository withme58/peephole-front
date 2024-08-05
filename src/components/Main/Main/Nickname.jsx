import { useState, useEffect } from "react";
import axios from "../../../api/axios";
import styled from "styled-components";

export default function Nickname() {
  const [name, setName] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/member/me");
      console.log("Mypage response:", response.data.body); // 응답 데이터
      setName(response.data.body.name);
    } catch (error) {
      console.error("마이페이지 데이터 로드 실패:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Name>{name}</Name>;
}

const Name = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
`;
