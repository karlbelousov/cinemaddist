import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

function formatMinutesToTime(minutes: number) {
  return dayjs.duration(minutes, "minutes").format("H[h] mm[m]");
}

export default formatMinutesToTime;
