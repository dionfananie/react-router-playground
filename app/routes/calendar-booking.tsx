import Calendar from "~/components/Calendar";
import NoSSR from "~/components/noSSR";
import Daily from "~/modules/calendar-booking/daily";
import Duration from "~/modules/calendar-booking/duration";

const CalendarBooking = () => {
  return (
    <div className="container px-20 py-4 mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Duration />
          <Daily />
        </div>
        <NoSSR loading={<p>loading...</p>}>
          <Calendar />
        </NoSSR>
      </div>
    </div>
  );
};

export default CalendarBooking;
