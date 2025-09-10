function formatMinutesToTime(minutes: number) {
  const MINUTES_PER_HOUR = 60;

  return minutes < MINUTES_PER_HOUR
    ? `${minutes}m`
    : `${Math.floor(minutes / MINUTES_PER_HOUR)}h ${
        minutes % MINUTES_PER_HOUR
      }m`;
}

export default formatMinutesToTime;
