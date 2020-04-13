export const formatDate = (dateToFormat: string) => {
  const [year, month, day] = dateToFormat
    .split('-')
    .map((datePart) => +datePart);

  if (year < 1900 || year > 2100) {
    return null;
  }

  if (month < 1 || month > 12) {
    return null;
  }

  if (day < 1 || day > 31) {
    return null;
  }

  return {
    year,
    month,
    day,
  };
}