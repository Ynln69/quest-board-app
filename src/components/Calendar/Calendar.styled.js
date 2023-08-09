import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  & .react-datepicker {
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;
    padding: 18px;
    border: 1px solid var(--cal_border);
    background: var(--cal_background);
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
    border-color: var(--cal_arrows);
    border-width: 2px 2px 0 0;
    transition: border-color 250ms ease-in;
  }

  & .react-datepicker__navigation-icon--next:before {
    left: -12px;
    border-color: var(--cal_arrows);
    border-width: 2px 2px 0 0;
    transition: border-color 250ms ease-in;
  }

  &
    .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon--previous:before,
  &
    .react-datepicker__navigation:hover
    .react-datepicker__navigation-icon--next:before {
    border-color: var(--cal_arrows_active);
  }

  & .react-datepicker__current-month {
    font-family: 'Poppins', sans-serif;
    color: var(--cal_month);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.32px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--cal_month_border);
  }

  & .react-datepicker__day-names {
    margin: 12px 0 0 0;
  }

  & .react-datepicker__day-name {
    color: var(--cal_day_name);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
  }

  & .react-datepicker__month {
    margin: 0;
  }

  & .react-datepicker__day {
    font-family: 'Poppins', sans-serif;
    color: var(--cal_days);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    border-radius: 50%;
    transition: background-color 250ms ease-in, color 250ms ease-in,
      color 250ms ease-in, color 250ms ease-in;
  }

  & .react-datepicker__day--selected,
  & .react-datepicker__day--outside-month:hover,
  & .react-datepicker__day:hover {
    background: var(--cal_days_bc_hover);
    border-radius: 50%;
    border: none;
    color: var(--cal_days_hover);
  }

  & .react-datepicker__day--outside-month,
  & .react-datepicker__day--disabled {
    color: var(--cal_days_disabled);
  }

  & .react-datepicker__day--disabled:hover {
    background: var(--cal_bg_out_hover);
    color: var(--cal_days_out_hover);
  }

  & .react-datepicker__day--keyboard-selected {
    background: transparent;
  }
`;

export const Button = styled.button`
  color: var(--cal_btn_color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--cal_btn_color);
`;
