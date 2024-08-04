export default function DdayCalculator(createdAt) {
  var today = new Date();
  var createdDate = new Date(createdAt);

  var timeDiff = today.getTime() - createdDate.getTime();
  var dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return dDay;
}
