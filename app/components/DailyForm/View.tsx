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
import { Fragment } from "react/jsx-runtime";

const DailyForm = ({
  dayList,
  timeList,
  onSetSchedule,
  onEnableDay,
  scheduleDay,
  onAddSession,
}: DailyFormProps) => {
  return (
    <>
      {dayList.map((item, idx) => {
        const { value, name, status } = item;
        const disabledMode = !scheduleDay[value].checked;

        return (
          <div
            key={`${name}-${value}-${idx}`}
            className="grid gap-2 mb-1"
            style={{ gridTemplateColumns: "120px 1fr" }}
          >
            <div className="flex items-center gap-3">
              <Checkbox
                id={value}
                disabled={!status}
                onCheckedChange={(v) => {
                  onEnableDay({ day: value, enable: v ? true : false });
                }}
              />
              <Label htmlFor={value}>{name}</Label>
            </div>
            {status ? (
              <div
                className="grid gap-2"
                style={{ gridTemplateColumns: "400px auto" }}
              >
                {scheduleDay[value].session.map((sessionDay, idx) => {
                  return (
                    <Fragment key={`${value}-session-${idx}`}>
                      <div className="flex items-center gap-3">
                        <Select
                          onValueChange={(v) => {
                            onSetSchedule({
                              day: value,
                              id: sessionDay.id,
                              timeStart: v,
                            });
                          }}
                        >
                          <SelectTrigger
                            className="w-[280px]"
                            disabled={disabledMode}
                          >
                            <SelectValue placeholder="Time start session" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeList.map((v) => {
                              return (
                                <SelectItem
                                  key={v.value}
                                  value={String(v.value)}
                                >
                                  {v.time}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        -
                        <Select value={sessionDay.timeStart}>
                          <SelectTrigger
                            className="w-[280px]"
                            disabled={disabledMode}
                          >
                            <SelectValue placeholder="Time end session" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeList.map((v) => {
                              return (
                                <SelectItem
                                  disabled
                                  key={v.value}
                                  value={String(v.value)}
                                >
                                  {v.timeEnd}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="size-8"
                          onClick={() => {
                            onAddSession({
                              day: value,
                              id: `session-${
                                scheduleDay[value].session.length + 1
                              }`,
                              timeStart: "",
                            });
                          }}
                          disabled={disabledMode}
                        >
                          <CirclePlus />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="size-8"
                          disabled={disabledMode}
                        >
                          <Trash2 />
                        </Button>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
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
