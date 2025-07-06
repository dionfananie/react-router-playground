import dayjs from "dayjs";
import dayjsPlugin from "dayjs/plugin/customParseFormat";
dayjs.extend(dayjsPlugin);

const generateTime = (time: number) => {
  let hours = Math.floor(time / 60);
  let minutes: string | number = time % 60;
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return { hours, minutes, period };
};
export const generateTimeSlots = (
  startTime: number,
  endTime: number,
  interval: number
) => {
  const times = [];
  let time = startTime;
  while (time <= endTime) {
    const { hours, minutes, period } = generateTime(time);
    const {
      hours: hoursEnd,
      minutes: minutesEnd,
      period: periodEnd,
    } = generateTime((time += interval));

    times.push({
      value: `${hours}:${minutes} ${period}`,
      time: `${hours}:${minutes} ${period}`,
      timeEnd: `${hoursEnd}:${minutesEnd} ${periodEnd}`,
      interval,
    });
    time += interval;
  }

  return times;
};

export type TimeListType = ReturnType<typeof generateTimeSlots>;

export const addTime = (startTime: string, durationMinutes: number) => {
  // Split the hh:mm string into hours and minutes
  const [hours, minutes] = startTime.split(":").map(Number);

  // Create a new Date object for the current date with the given hours and minutes
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0); // Reset seconds for clean output
  date.setMilliseconds(0); // Reset milliseconds for clean output

  // Add the duration in minutes
  const endTime = new Date(date.getTime() + durationMinutes * 60 * 1000);

  // Format the time back to hh:mm format
  const formattedHours = String(endTime.getHours()).padStart(2, "0");
  const formattedMinutes = String(endTime.getMinutes()).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

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
