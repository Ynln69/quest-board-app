import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarContainer } from './Calendar.styled';

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    style={{
      border: 'none',
      color: '#BEDBB0',
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      letterSpacing: '-0.28px',
    }}
  >
    {value}
  </button>
));

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const formatDate = date => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (isSameDate(date, today)) {
      return 'Today, ' + formatMonthDay(date);
    } else if (isSameDate(date, tomorrow)) {
      return 'Tomorrow, ' + formatMonthDay(date);
    } else {
      return formatDateDefault(date);
    }
  };

  const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const formatMonthDay = date => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatDateDefault = date => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput value={formatDate(startDate)} />}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [5, 10],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              rootBoundary: 'viewport',
              tether: false,
              altAxis: true,
            },
          },
        ]}
      />
    </CalendarContainer>
  );
};
