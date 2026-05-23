import dayjs from "dayjs";

function formatStringToYear(date: string) {
  return dayjs(date).format("YYYY");
}

export default formatStringToYear;
