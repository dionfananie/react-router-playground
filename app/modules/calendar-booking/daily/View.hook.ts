import { generateTimeSlots } from "~/helpers/generateTimeList";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useBookingStore from "~/stores/booking";
import { DAY_LIST, DURATION_LIST } from "~/constants/time";
import { useMemo, useState } from "react";
import type { ScheduleDay } from "~/types/schedule";
import type { EnableDay, SessionList, SetScheduleDay } from "./View.types";

const initialDays: Record<string, ScheduleDay> = DAY_LIST.reduce((acc, day) => {
  acc[day.value] = {
    day: "",
    session: day.session,
    checked: false,
  };
  return acc;
}, {} as Record<string, ScheduleDay>);

const useView = () => {
  const duration = useBookingStore((state) => state.duration);
  const session = useBookingStore((state) => state.session);

  const listDuration = DURATION_LIST.find((item) => item.value === duration);
  const [scheduleDay, setScheduleDay] =
    useState<Record<string, ScheduleDay>>(initialDays);

  const [sessionList, setSessionList] =
    useState<Record<string, SessionList[]>>();

  const interval = (listDuration?.duration || 15) * session;
  const timeList = useMemo(
    () => generateTimeSlots(7 * 60, 19 * 60, interval),
    [listDuration, session]
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
    console.log(data);

    setScheduleDay((v) => {
      const currData = v[data.day];
      const updatedSession = currData.session.map((session) => {
        if (session.id === data.id) {
          return { id: data.id, timeStart: data.timeStart };
        } else return session;
      });
      const newData = {
        ...v,
        [data.day]: {
          ...currData,
          session: updatedSession,
        },
      };
      return newData;
    });
  };

  const onAddSession = (data: SetScheduleDay) => {
    setScheduleDay((v) => ({
      ...v,
      [data.day]: {
        ...v[data.day],
        session: [...v[data.day].session, { id: data.id, timeStart: "" }],
      },
    }));
  };
  return {
    timeList,
    form,
    sessionList,
    scheduleDay,
    onSubmit,
    onEnableDay,
    onSetSchedule,
    onAddSession,
  };
};

export default useView;
