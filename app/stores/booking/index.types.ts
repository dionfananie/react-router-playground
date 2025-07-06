export interface BookingStore {
  duration: string;
  session: number;
  allowTour: boolean;
  updateDuration: (duration: string) => void;
  updateSession: (time: number) => void;
  updateAllowTour: (tour: boolean) => void;
  resetDuration: () => void;
  resetSession: () => void;
  resetAllowTour: () => void;
}
