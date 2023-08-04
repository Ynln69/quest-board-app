import { useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from 'components/Task/Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: white;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};

  flex-grow: 1;
  min-height: 100px;
`;

const ContainerModal = styled.div`
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

export const Column = ({ column, tasks, index, cardData, setCardData }) => {
  const [visible, setVisible] = useState(false);
  const [dataForModal, setDataForModal] = useState(column);
  const [titleTask, setTitleTask] = useState('');

  if (true === false) {
    console.log(setDataForModal);
  }

  const hendleVisible = () => {
    setVisible(!visible);
  };

  const handleSubmit = () => {
    const taskId = `1${uuidv4().replace(/-/g, '')}`;

    const newTask = {
      [taskId]: {
        id: taskId,
        title: titleTask,
        description: 'awdawd',
        priority: 'over',
        deadline: '22.33.44',
      },
    };

    const columnId = dataForModal.id;

    const newColumn = {
      ...cardData.columns[columnId],
      taskIds: [...cardData.columns[columnId].taskIds, taskId],
    };

    setCardData(prevCardData => ({
      ...prevCardData,
      tasks: {
        ...prevCardData.tasks,
        ...newTask,
      },
      columns: {
        ...prevCardData.columns,
        [columnId]: newColumn,
      },
    }));

    hendleVisible();
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <button onClick={hendleVisible}>Add another card</button>

          {visible && (
            <ContainerModal>
              Add Task
              <label>
                Task title
                <input
                  type="text"
                  value={titleTask}
                  onChange={e => {
                    setTitleTask(e.target.value);
                  }}
                />
              </label>
              <button type="submit" onClick={handleSubmit}>
                Add Task
              </button>
            </ContainerModal>
          )}
        </Container>
      )}
    </Draggable>
  );
};
