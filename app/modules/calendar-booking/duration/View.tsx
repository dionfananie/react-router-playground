import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { DURATION_LIST } from "~/constants/time";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import useView from "./View.hook";

const Duration = () => {
  const { form } = useView();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visit Duration</CardTitle>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem className="flex items-center gap-16">
                <FormLabel className="w-[120px] shrink-0">
                  Time Duration
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select time duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {DURATION_LIST.map((item) => {
                      return (
                        <SelectItem key={item.value} value={item.value}>
                          {item.duration}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="session"
            render={({ field }) => (
              <FormItem className="flex items-center gap-16 mt-8">
                <FormLabel className="w-[120px] shrink-0">
                  No. of Booking/session
                </FormLabel>

                <FormControl>
                  <Input
                    onChange={field.onChange}
                    type="number"
                    id="count"
                    placeholder="input your booking session"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tour"
            render={({ field }) => (
              <FormItem className="flex items-center gap-16 mt-8">
                <Label className="w-[120px] shrink-0"></Label>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      // onCheckedChange={(checked) => {
                      //   console.log(checked);
                      // }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Allow video tour call
                  </FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </CardContent>
    </Card>
  );
};

export default Duration;
