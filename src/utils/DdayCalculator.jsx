export default function DdayCalculator(createdAt) {
  var today = new Date();
  var createdDate = new Date(createdAt); // createdAT 받아와서 계산

  // 두 날짜의 차이 계산
  var timeDiff = today.getTime() - createdDate.getTime();
  // 날짜 차이를 일 단위로 변환
  var dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return dDay;
}
