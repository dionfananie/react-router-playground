"use client";

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
  const { timeList, form, onSubmit } = useView();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DailyForm dayList={DAY_LIST} timeList={timeList} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}

export default Daily;
