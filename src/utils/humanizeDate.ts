import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

function humanizeDate(date: string) {
  const timeDiff = dayjs(date).diff(dayjs());
  return dayjs.duration(timeDiff).humanize(true);
}

export default humanizeDate;
