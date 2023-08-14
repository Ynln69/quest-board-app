import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LineContainer = styled.div`
  position: absolute;
  width: 4px;
  top: 0;
  left: 0px;
  height: 100%;
  border-radius: 4px 0px 0px 4px;
  background-color: #bab8b8;

  ${props =>
    props.priority === 'low' &&
    css`
      background-color: #8fa1d0;
    `}

  ${props =>
    props.priority === 'medium' &&
    css`
      background-color: #e09cb5;
    `}

    ${props =>
    props.priority === 'high' &&
    css`
      background-color: #bedbb0;
    `}
`;

export const TaskContainer = styled.li`
  position: relative;
  padding: 14px 20px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${props =>
    props.isDragging ? 'var(--board_task_bgc)' : 'var(--board_task_bgc)'};
  margin-bottom: 8px;
`;

export const TaskTitle = styled.h2`
  margin-bottom: 8px;

  color: var(--board_main_color);
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const TaskDesc = styled.p`
  margin-bottom: 14px;
  width: 290px;
  height: 38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: var(--board_filter_color);
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: -0.24px;
`;

export const TaskVector = styled.div`
  width: 290px;
  height: 1px;
  background-color: var(--line_color);
  margin-bottom: 14px;
`;

export const TaskBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TaskContent = styled.div`
  display: flex;
  gap: 14px;
`;

export const TaskPrior = styled.div`
  > p {
    margin-bottom: 5.5px;

    color: var(--board_second_color);
    font-family: 'Poppins';
    font-size: 8px;
    line-height: normal;
    letter-spacing: -0.16px;
  }
  > div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #bab8b8;

    ${props =>
      props.priority === 'low' &&
      css`
        background-color: #8fa1d0;
      `}

    ${props =>
      props.priority === 'medium' &&
      css`
        background-color: #e09cb5;
      `}

    ${props =>
      props.priority === 'high' &&
      css`
        background-color: #bedbb0;
      `}
  }
`;

export const TaskDeadline = styled.div`
  > p {
    margin-bottom: 5.5px;

    color: var(--board_second_color);
    font-family: 'Poppins';
    font-size: 8px;
    line-height: normal;
    letter-spacing: -0.16px;
  }
  > span {
    color: var(--board_main_color);
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.2px;
  }
`;

export const TestListIcon = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  > li {
    display: flex;
    align-items: center;
    > button {
      padding: 0;
      border: none;
      background-color: rgba(0, 0, 0, 0);
      > svg {
        stroke: var(--modal_second_color);
        fill: rgba(0, 0, 0, 0);
        &:hover,
        &:focus,
        &:active {
          stroke: var(--icon_active_color);
        }
      }
    }
  }
`;
