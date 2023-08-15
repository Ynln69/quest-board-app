import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';

import { Button, Icon, CalendarContainer } from './Calendar.styled';
import Sprite from '../../images/sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
    const formatDate = () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (selectedDate.toDateString() === today.toDateString()) {
        return 'Today,';
      } else if (selectedDate.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow,';
      } else {
        return '';
      }
    };
    return (
      <Button type="button" onClick={onClick} ref={ref}>
        {formatDate(value)} {value}
        <Icon>
          <use href={`${Sprite}#icon-chevron-down-1`} />
        </Icon>
      </Button>
    );
  });

  return (
    <CalendarContainer>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="MMMM d"
        customInput={<ExampleCustomInput value={selectedDate} />}
        onChangeRaw={e => {
          const newDate = new Date(e.target.value);
          setSelectedDate(newDate);
        }}
        minDate={subDays(new Date(), 0)}
        maxDate={addDays(new Date(), 365)}
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
