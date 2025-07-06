import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useForm } from "react-hook-form";
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
import Calendar from "~/components/Calendar";
import Daily from "~/modules/daily";

const CalendarBooking = () => {
  const form = useForm();

  return (
    <div className="container px-20 py-4 mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Visit Duration</CardTitle>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-16">
                <Label className="w-[120px] shrink-0" htmlFor="duration">
                  Time Duration
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-16 mt-4">
                <Label className="w-[120px] shrink-0" htmlFor="count">
                  No. of Booking/session
                </Label>
                <Input
                  type="number"
                  id="count"
                  placeholder="input your booking session"
                />
              </div>
              <div className="flex items-center gap-16 mt-8">
                <Label className="w-[120px] shrink-0"></Label>
                <div className="flex items-center gap-3">
                  <Checkbox id="allow-tour" />
                  <Label htmlFor="allow-tour">Allow video tour call</Label>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Availability</CardTitle>
              <CardDescription>
                Set your weekly recurring schedule
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Daily />
            </CardContent>
          </Card>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarBooking;
