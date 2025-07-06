import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Card, CardContent } from "../ui/card";

export default function Calendar() {
  return (
    <div className="sticky top-4 h-fit">
      <Card>
        <CardContent>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            contentHeight={500}
            events={[
              { title: "event 1", date: "2024-09-01" },
              { title: "event 2", date: "2024-09-02" },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
}
