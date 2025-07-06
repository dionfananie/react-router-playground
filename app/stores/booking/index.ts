import { create } from "zustand";
import { DEFAULT_DURATION_LIST } from "~/constants/time";
import type { BookingStore } from "./index.types";

const useBookingStore = create<BookingStore>((set) => ({
  duration: DEFAULT_DURATION_LIST,
  session: 1,
  allowTour: false,
  updateDuration: (time) => set({ duration: time }),
  updateSession: (time) => set({ session: time }),
  updateAllowTour: (tour) => set({ allowTour: tour }),
  resetDuration: () => set({ duration: DEFAULT_DURATION_LIST }),
  resetSession: () => set({ session: 1 }),
  resetAllowTour: () => set({ allowTour: false }),
}));

export default useBookingStore;
