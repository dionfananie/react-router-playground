import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const generateTimeSlots = (
  startTime: number,
  endTime: number,
  interval: number
) => {
  const times = [];
  let time = startTime;
  while (time <= endTime) {
    const timeStartParsed = dayjs
      .utc()
      .startOf("day")
      .add(time / 60, "hour");
    const timeEndParsed = dayjs
      .utc()
      .startOf("day")
      .add((time += interval) / 60, "hour");

    times.push({
      value: dayjs(timeStartParsed).valueOf(),
      time: dayjs(timeStartParsed).format("hh:mm A"),
      timeEnd: dayjs(timeEndParsed).format("hh:mm A"),
      interval,
    });
    time += interval;
  }

  return times;
};

export type TimeListType = ReturnType<typeof generateTimeSlots>;

// Function to map day string to dayjs compatible format
function getDayOfWeek(day: string): number {
  const daysMap: Record<string, number> = {
    "day-1": 1,
    "day-2": 2,
    "day-3": 3,
    "day-4": 4,
    "day-5": 5,
    "day-6": 6,
    "day-7": 7,
  };
  return daysMap[day.toLowerCase()];
}

// Create dayjs object
export function createDayjsFromData(data: Record<string, string>) {
  const dayIndex = getDayOfWeek(data.day);
  const time = data.time;
  const parsedTime = dayjs(time, "h:mm A");

  return dayjs()
    .day(dayIndex)
    .set("hour", parsedTime.hour())
    .set("minute", parsedTime.minute());
}
