import DdayCalculator from "../../utils/DdayCalculator";
import styled from "styled-components";
import axios from "../../api/axios";
import { useEffect, useState } from "react";

export default function CalculateDate() {
  const [day, setDay] = useState(null);

  async function getDday() {
    try {
      const response = await axios.get("/api/member/me");
      const createdAt = response.data.body.createdAt;
      const calculateDay = DdayCalculator(createdAt);
      console.log(createdAt);
      setDay(calculateDay);
      console.log("Dday response:", response);
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
