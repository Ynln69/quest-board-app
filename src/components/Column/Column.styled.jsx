import styled from '@emotion/styled';

export const Container = styled.li`
  border-radius: 2px;
  max-width: 334px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 18px 20px 17px 20px;
  border-radius: 8px;
  background-color: #fff;
`;

export const Title = styled.h3`
  color: #161616;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};

  flex-grow: 1;
  min-height: 100px;
  overflow-y: auto;
  max-height: 478px;
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
  z-index: 999;
  left: 800px;
  top: 200px;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(22, 22, 22, 0.5);
  fill: #fff;
  cursor: pointer;
`;

export const BoxSvg = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  min-width: 334px;
  min-height: 56px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  border-radius: 8px;
  border: none;

  padding: 14px 78px;

  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  font-family: inherit;
  color: #161616;
  background: #bedbb0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #9dc888;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SvgAdd = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #ffffff;
  cursor: pointer;
`;
export const BoxAddSvg = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 7px;
  border-radius: 6px;
  background: #161616;
  margin-right: 7px;
`;
