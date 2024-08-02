import DdayCalculator from "../../utils/DdayCalculator";
import styled from "styled-components";
import axios from "../../api/axios";
import { useEffect, useState } from "react";

export default function CalculateDate() {
  const [day, setDay] = useState(null); //Date는 user에서 createdAt으로 받아온다

  async function getDday() {
    try {
      const response = await axios.get("/api");
      const createdAt = response.data.body.createdAt;
      const calculateDay = DdayCalculator(createdAt);
      setDay(calculateDay);
      console.log("Dday response:", response); // 응답 데이터
    } catch (error) {
      console.error("Dday 데이터 로드 실패:", error);
    }
  }

  useEffect(() => {
    getDday();
  }, []);

  return (
    <DateContainer>
      피폴과 성장하기 <Date>Day {day}</Date>
    </DateContainer>
  );
}

const DateContainer = styled.div`
  color: var(--main-blue);
  font-size: 16px;
  font-weight: medium;
`;

const Date = styled.span`
  font-weight: bold;
`;
