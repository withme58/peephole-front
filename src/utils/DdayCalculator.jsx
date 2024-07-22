export default function DdayCalculator() {
  var today = new Date();
  var createdAt = new Date("2024-07-18"); // createdAT 받아와서 계산

  var timeDiff = today.getTime() - createdAt.getTime();
  var dDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);

  return dDay;
}
