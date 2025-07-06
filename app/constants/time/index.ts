export const DAY_LIST_UNAVAILABLE = ["Saturday", "Sunday"];
export const DAY_LIST = [
  {
    value: "day-1",
    name: "Monday",
    status: 1,
    session: [{ id: "session-1", timeStart: "" }],
  },
  {
    value: "day-2",
    name: "Tuesday",
    status: 1,
    session: [{ id: "session-1", timeStart: "" }],
  },
  {
    value: "day-3",
    name: "Wednesday",
    status: 1,
    session: [{ id: "session-1", timeStart: "" }],
  },
  {
    value: "day-4",
    name: "Thursday",
    status: 1,
    session: [{ id: "session-1", timeStart: "" }],
  },
  {
    value: "day-5",
    name: "Friday",
    status: 1,
    session: [{ id: "session-1", timeStart: "" }],
  },
  { value: "day-6", name: "Saturday", status: 0, session: [] },
  { value: "day-7", name: "Sunday", status: 0, session: [] },
];

export const DURATION_LIST = [
  { value: "duration-1", duration: 15 },
  { value: "duration-2", duration: 30 },
  { value: "duration-3", duration: 45 },
  { value: "duration-4", duration: 60 },
  { value: "duration-5", duration: 90 },
];

export const DEFAULT_DURATION_LIST = DURATION_LIST[0].value;
