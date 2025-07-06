import { generateTimeSlots } from "~/helpers/generateTimeList";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useView = () => {
  const duration = 30;
  const timeList = generateTimeSlots(7 * 60, 19 * 60, duration || 30);
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
  return { timeList, form, onSubmit };
};

export default useView;
