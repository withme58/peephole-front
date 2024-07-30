import DdayCalculator from "../../utils/DdayCalculator";
import styled from "styled-components";

export default function CalculateDate() {
  const day = DdayCalculator("2024-03-01"); //Date는 user에서 createdAT으로 받아온다
  return <DateContainer>피폴과 함께한지 {day}일째 </DateContainer>;
}

const DateContainer = styled.div`
  color: #fff;
`;
