export const formatStartDateTime = (startDate: string, startTime: string) => {
  const startDateTime = new Date(`${startDate}T${startTime}`);

  return new Intl.DateTimeFormat(['de-DE'], {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(startDateTime);
};
