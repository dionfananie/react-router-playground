export interface EnableDay {
  day: string;
  enable: boolean;
}
export interface SetScheduleDay {
  day: string;
  timeStart: string;
  id: string;
}
export interface SessionList {
  sessionKey: string;
  value: string;
}
