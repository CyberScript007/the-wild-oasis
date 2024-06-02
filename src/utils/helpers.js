import { differenceInDays, formatDistance, parseISO } from "date-fns";

export const formatCurrency = function (number) {
  return Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const formatDistanceFromNow = function (dateStr) {
  return formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", " ")
    .replace("in", "In");
};

export const subtractDates = function (dateStr1, dateStr2) {
  return differenceInDays(
    parseISO(String(dateStr1)),
    parseISO(String(dateStr2))
  );
};

export const getToday = function (option = {}) {
  const today = new Date();

  if (option?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};
