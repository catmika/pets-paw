import { format, isToday, isThisYear } from "date-fns";

const formatDate = (date) => {
  const dateFormat = isToday(date)
    ? "HH:mm"
    : isThisYear(date)
    ? "d/MM, HH:mm"
    : "MMMM d, yyyy HH:mm";

  return format(date, dateFormat);
};

export { formatDate };
