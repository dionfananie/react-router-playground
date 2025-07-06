import type { DayList } from "~/constants/time/index.types";
import type { ScheduleDay } from "~/types/schedule";

export interface DailyFormProps {
  timeList: {
    value: number;
    time: string;
    timeEnd: string;
    interval: number;
  }[];
  dayList: DayList;
  onSetSchedule: (data: SetScheduleDay) => void;
  onEnableDay: (data: EnableDay) => void;
  scheduleDay: Record<string, ScheduleDay>;
}

export interface EnableDay {
  day: string;
  enable: boolean;
}
export interface SetScheduleDay {
  day: string;
  timeStart: string;
}
