import { generateTimeSlots } from "~/helpers/generateTimeList";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useBookingStore from "~/stores/booking";
import { DURATION_LIST } from "~/constants/time";

const useView = () => {
  const duration = useBookingStore((state) => state.duration);

  const listDuration = DURATION_LIST.find((item) => item.value === duration);

  const timeList = generateTimeSlots(
    7 * 60,
    19 * 60,
    listDuration?.duration || 30
  );
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: JSON.stringify(data, null, 2),
    });
  }

  const onEnableDay = () => {};
  return { timeList, form, onSubmit };
};

export default useView;
