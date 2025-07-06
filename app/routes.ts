import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("calendar-booking", "routes/calendar-booking.tsx"),
] satisfies RouteConfig;
