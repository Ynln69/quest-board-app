import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  & .react-datepicker {
    width: 233px;
    height: 254px;
    border-radius: 8px;
    border: 1px solid #bedbb0;
    background: #fff;
    padding: 18px;
  }

  & .react-datepicker-popper[data-placement^='bottom'] {
    padding: 0px;
  }

  & .react-datepicker__triangle {
    display: none;
  }

  & .react-datepicker__header {
    width: 197px;
    height: 38px;
    background: transparent;
    padding: 0px;
    border: none;
  }

  & .react-datepicker__current-month {
    color: #161616;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    border-bottom: 1px solid rgba(22, 22, 22, 0.2);
  }

  & .react-datepicker__day-names {
    margin: 14px 0px 11px 0px;
  }

  & .react-datepicker__day-name {
    color: rgba(22, 22, 22, 0.5);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    margin: 0px;
  }

  & .react-datepicker__day {
    margin: 0;
    color: #161616;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  & .react-datepicker__day--selected,
  & .react-datepicker__day--today,
  & .react-datepicker__day--selected:hover,
  & .react-datepicker__day--today:hover {
    background: #bedbb0;
    border-radius: 50%;
  }

  & .react-datepicker__day--outside-month {
    color: rgba(22, 22, 22, 0.2);
  }

  & .react-datepicker__week {
    margin-top: 11px;
  }

  & .react-datepicker__month {
    position: absolute;
    bottom: 18px;
  }
`;
