import styled from '@emotion/styled';
import { Calendar } from 'components/Calendar/Calendar';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

  /* display: flex; */
  gap: 10px;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
`;

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {/* <button onClick={() => console.log('awdawd')}></button> */}
          <Handle />
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>{task.priority}</p>
          <p>{task.deadline}</p>
          <Calendar />
        </Container>
      )}
    </Draggable>
  );
};
