import { create } from "zustand";
import { DAY_LIST } from "~/constants/time";
import type { ScheduleDay, ScheduleStore } from "./index.types";
4;

const initialDays: Record<string, ScheduleDay> = DAY_LIST.reduce((acc, day) => {
  acc[day.value] = { day: "", timeStart: "", checked: false };
  return acc;
}, {} as Record<string, ScheduleDay>);

const useScheduleStore = create<ScheduleStore>((set) => ({
  scheduleDay: initialDays,

  updateSchedule: (time) => set({ scheduleDay: time }),
}));

export default useScheduleStore;
