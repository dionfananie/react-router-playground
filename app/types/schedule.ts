export interface ScheduleDay {
  day: string;
  session: { id: string; timeStart: string }[];
  checked: boolean;
}
