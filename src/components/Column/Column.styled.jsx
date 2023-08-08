import styled from '@emotion/styled';

export const Container = styled.li`
  border-radius: 2px;
  max-width: 334px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const TitleBox = styled.div`
  min-height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-radius: 8px;

  background-color: var(--board_task_bgc);
`;

export const Title = styled.h3`
  color: var(--board_main_color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const BoxSvg = styled.div`
  display: flex;
  gap: 8px;
  > button {
    background-color: transparent;
    border: none;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--board_second_color);
  fill: transparent;
  &:hover {
    stroke: var(--active_btn);
  }
`;

export const TaskList = styled.ul`
  padding: 8px;
  max-height: 478px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'inherit' : 'inherit')};

  flex-grow: 1;
  min-height: 100px;
`;

export const ContainerModal = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #beb7b7;
  position: absolute;
  left: 800px;
  top: 200px;
`;
