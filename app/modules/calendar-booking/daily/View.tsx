"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";

import DailyForm from "~/components/DailyForm";
import { DAY_LIST } from "~/constants/time";
import useView from "./View.hook";

function Daily() {
  const {
    timeList,
    form,
    scheduleDay,
    onSubmit,
    onEnableDay,
    onSetSchedule,
    onAddSession,
  } = useView();

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Availability</CardTitle>
        <CardDescription>Set your weekly recurring schedule</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DailyForm
                      scheduleDay={scheduleDay}
                      dayList={DAY_LIST}
                      timeList={timeList}
                      onEnableDay={onEnableDay}
                      onSetSchedule={onSetSchedule}
                      onAddSession={onAddSession}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Daily;
