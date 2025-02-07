export const formatStartDateTime = (startDate: string, startTime: string) => {
  const startDateTime = new Date(`${startDate}T${startTime}`);

  return new Intl.DateTimeFormat(['de-DE'], {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(startDateTime);
};

export const getEventStartDateTimeParts = (startDate: string, startTime: string) => {
  const startDateTime = new Date(`${startDate}T${startTime}`);

  const parts = new Intl.DateTimeFormat(['de-DE'], {
    dateStyle: 'full',
    timeStyle: 'short'
  }).formatToParts(startDateTime);

  const getPart = (type: string) => {
    return parts.find((part) => part.type === type).value;
  };

  const weekday = getPart('weekday');
  const month = getPart('month');
  const day = getPart('day');
  const hour = getPart('hour');
  const minute = getPart('minute');

  return { weekday, day, month, hour, minute };
};
