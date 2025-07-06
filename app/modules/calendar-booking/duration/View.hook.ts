import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useBookingStore from "~/stores/booking";

const useView = () => {
  const form = useForm();
  const updateDuration = useBookingStore((state) => state.updateDuration);
  const updateSession = useBookingStore((state) => state.updateDuration);
  const updateAllowTour = useBookingStore((state) => state.updateAllowTour);
  const currDur = useBookingStore((state) => state.duration);
  const { subscribe } = form;

  useEffect(() => {
    // make sure to unsubscribe;
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        const { duration, session, tour } = values;
        if (duration) updateDuration(duration);
        if (session) updateSession(session);
        if (tour) updateAllowTour(tour);
        console.log(values);
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
