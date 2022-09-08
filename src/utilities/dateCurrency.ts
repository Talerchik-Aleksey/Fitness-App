const CURRENCY_FORMATTER_DATE = new Intl.DateTimeFormat("en-Us", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

const CURRENCY_FORMATTER_DATE_WITH_YEAR = new Intl.DateTimeFormat("en-Us", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

export function formatCurrency(date: number) {
  return CURRENCY_FORMATTER_DATE.format(date);
}

export function formatCurrencyWithYear(date: number) {
  return CURRENCY_FORMATTER_DATE_WITH_YEAR.format(date);
}
