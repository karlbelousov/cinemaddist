import dayjs from "dayjs";

function formatStringToDate(date: string) {
  return dayjs(date).format("DD MMMM YYYY");
}

export default formatStringToDate;
