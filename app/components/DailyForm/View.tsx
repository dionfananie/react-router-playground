import type { DailyFormProps } from "./View.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { CirclePlus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const DailyForm = ({ dayList, timeList }: DailyFormProps) => {
  return (
    <>
      {dayList.map((item, idx) => {
        return (
          <div
            key={`${item.name}-${item.value}-${idx}`}
            className="grid gap-2 mb-1"
            style={{ gridTemplateColumns: "120px 400px auto" }}
          >
            <div className="flex items-center gap-3">
              <Checkbox id={item.value} disabled={!item.status} />
              <Label htmlFor={item.value}>{item.name}</Label>
            </div>
            {item.status ? (
              <>
                <div className="flex items-center gap-3">
                  <Select>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Time start session" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeList.map((item) => {
                        return (
                          <SelectItem key={item.value} value={item.value}>
                            {item.time}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  -
                  <Select>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Time end session" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeList.map((item) => {
                        return (
                          <SelectItem
                            disabled
                            key={item.value}
                            value={item.value}
                          >
                            {item.timeEnd}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-1 justify-end">
                  <Button variant="secondary" size="icon" className="size-8">
                    <CirclePlus />
                  </Button>
                  <Button variant="secondary" size="icon" className="size-8">
                    <Trash2 />
                  </Button>
                </div>
              </>
            ) : (
              <p>unavailable</p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default DailyForm;
