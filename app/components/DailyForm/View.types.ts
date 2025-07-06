import type { DayList } from "~/constants/time/index.types";

export interface DailyFormProps {
  timeList: {
    value: string;
    time: string;
    timeEnd: string;
    interval: number;
  }[];
  dayList: DayList;
}
