import styled from '@emotion/styled';

export const Container = styled.li`
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;
export const TitleBox = styled.div`
  width: 334px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: calc(100vh - 324px);
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'inherit' : 'inherit')};

  flex-grow: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    position: absolute;
    right: -16px;
    border-radius: 12px;
    width: 8px;
    background: var(--scroll);
  }

  &::-webkit-scrollbar-thumb {
    position: absolute;
    right: -16px;
    background-color: var(--scroll-wrapp);
    border-radius: 12px;
    width: 8px;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 324px);
  }
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
