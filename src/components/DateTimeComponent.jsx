import { useEffect, useState } from 'react';
import moment from 'moment-timezone';
const DateTimeComponent= ({timeZone}) => {
  const locale = 'en';
  const [today, setDate] = useState(new Date());
  const [date, setDateText] = useState('');
  const [time, setTimeText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate(now);
      setDateText(formatDate(now, timeZone));
      setTimeText(formatTime(now, timeZone));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeZone]);

  const formatDate = (date, timeZone) => {
    const tzDate = moment.tz(date, timeZone);
    const formattedDate = tzDate.format('ddd MMM D YYYY');
    return formattedDate;
  };

 const formatTime = (date, timeZone) => {
    const tzDate = moment.tz(date, timeZone);
    const formattedTime = tzDate.format('h:mm A');
    return formattedTime;
  };

  return { date, time };
};

export default DateTimeComponent;