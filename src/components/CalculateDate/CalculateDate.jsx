import DdayCalculator from "../../utils/DdayCalculator";
import styled from "styled-components";

export default function CalculateDate() {
  const day = DdayCalculator("2024-03-01"); //Date는 user에서 createdAt으로 받아온다
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
