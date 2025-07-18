import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useBookingStore from "~/stores/booking";

const useView = () => {
  const form = useForm();
  const updateDuration = useBookingStore((state) => state.updateDuration);
  const updateSession = useBookingStore((state) => state.updateSession);
  const updateAllowTour = useBookingStore((state) => state.updateAllowTour);
  const { subscribe } = form;

  useEffect(() => {
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        const { duration, session, tour } = values;
        if (duration) updateDuration(duration);
        if (session) updateSession(session);
        if (tour) updateAllowTour(tour);
      },
    });

    return () => callback();

    // You can also just return the subscribe
    // return subscribe();
  }, [subscribe]);

  return { form };
};

export default useView;
``;
