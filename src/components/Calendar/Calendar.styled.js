import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  & .react-datepicker {
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;
    padding: 18px;
    border: 1px solid #bedbb0;
    background: #fff;
  }

  & .react-datepicker-popper[data-placement^='bottom'] {
    padding: 0px;
  }

  & .react-datepicker__triangle {
    display: none;
  }

  & .react-datepicker__header {
    background: transparent;
    border: none;
    padding: 0;
  }

  & .react-datepicker__navigation {
    position: absolute;
    top: 12px;
  }

  & .react-datepicker__navigation-icon--previous:before {
    right: -12px;
    border-color: #161616cc;
    border-width: 2px 2px 0 0;
    transition: border-color 250ms ease-in;
  }

  & .react-datepicker__navigation-icon--next:before {
    left: -12px;
    border-color: #161616cc;
    border-width: 2px 2px 0 0;
    transition: border-color 250ms ease-in;
  }

  &
    .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon--previous:before,
  &
    .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon--next:before {
    border-color: #bedbb0;
  }

  & .react-datepicker__current-month {
    font-family: 'Poppins', sans-serif;
    color: #161616;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.32px;
    padding-bottom: 14px;
    border-bottom: 1px solid #16161633;
  }

  & .react-datepicker__day-names {
    margin: 12px 0 0 0;
  }

  & .react-datepicker__day-name {
    color: rgba(22, 22, 22, 0.5);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
  }

  & .react-datepicker__month {
    margin: 0;
  }

  & .react-datepicker__day {
    font-family: 'Poppins', sans-serif;
    color: #161616;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    border-radius: 50%;
    transition: background-color 250ms ease-in, color 250ms ease-in;
  }

  & .react-datepicker__day--selected,
  & .react-datepicker__day:hover {
    background: #bedbb0;
    border-radius: 50%;
    border: none;
  }

  & .react-datepicker__day--outside-month,
  & .react-datepicker__day--disabled {
    color: rgba(22, 22, 22, 0.2);
  }

  & .react-datepicker__day--outside-month:hover,
  & .react-datepicker__day--disabled:hover {
    background: rgba(22, 22, 22, 0.1);
  }

  & .react-datepicker__day--keyboard-selected {
    background: transparent;
  }
`;

export const Button = styled.button`
  color: #bedbb0;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
`;
