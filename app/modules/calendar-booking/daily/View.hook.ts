import { generateTimeSlots } from "~/helpers/generateTimeList";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useBookingStore from "~/stores/booking";
import { DAY_LIST, DURATION_LIST } from "~/constants/time";
import { useState } from "react";
import type { ScheduleDay } from "~/types/schedule";
import type { EnableDay, SetScheduleDay } from "./View.types";

const initialDays: Record<string, ScheduleDay> = DAY_LIST.reduce((acc, day) => {
  acc[day.value] = { day: "", timeStart: "", checked: false };
  return acc;
}, {} as Record<string, ScheduleDay>);

const useView = () => {
  const duration = useBookingStore((state) => state.duration);

  const listDuration = DURATION_LIST.find((item) => item.value === duration);
  const [scheduleDay, setScheduleDay] =
    useState<Record<string, ScheduleDay>>(initialDays);
  console.log(scheduleDay);

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

  const onEnableDay = (data: EnableDay) => {
    setScheduleDay((v) => ({
      ...v,
      [data.day]: { ...v[data.day], checked: data.enable },
    }));
  };
  const onSetSchedule = (data: SetScheduleDay) => {
    setScheduleDay((v) => ({
      ...v,
      [data.day]: { ...v[data.day], timeStart: data.timeStart },
    }));
  };
  return { timeList, form, scheduleDay, onSubmit, onEnableDay, onSetSchedule };
};

export default useView;
