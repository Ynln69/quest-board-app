import { useState } from 'react';
import styled from '@emotion/styled';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import { Column } from 'components/Column/Column';

const Container = styled.div`
  display: flex;

  position: relative;
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
  left: 50%;
  top: 50%;
`;

export const MainDashboard = ({ cardData, setCardData }) => {
  // кто будет делать этот блок, обратите внимание что именно приходит в cardData

  const [visible, setVisible] = useState(false);
  const [titleColumn, setTitleColumn] = useState('');

  const hendleVisible = () => {
    setVisible(!visible);
  };

  const handleSubmit = () => {
    const columnId = `2${uuidv4().replace(/-/g, '')}`;

    const newColumn = {
      [columnId]: {
        id: columnId,
        title: titleColumn,
        taskIds: [],
      },
    };

    setCardData({
      ...cardData,
      columns: {
        ...cardData.columns,
        ...newColumn,
      },
      columnOrder: [...cardData.columnOrder, ...[columnId]],
    });

    hendleVisible();
  };

  // Эти три функции ниже отвечают за главный функционал переставления карточек между колонками и в колонках
  // а так же за анимацию при их передвижение
  const onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  };

  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(cardData.tasks).length
      : 0;

    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  const onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(cardData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...cardData,
        columnOrder: newColumnOrder,
      };

      setCardData(newState);

      return;
    }

    const start = cardData.columns[source.droppableId];
    const finish = cardData.columns[destination.droppableId];

    if (start === finish) {
      const newTaskId = Array.from(start.taskIds);
      newTaskId.splice(source.index, 1);
      newTaskId.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskId,
      };

      const newState = {
        ...cardData,
        columns: {
          ...cardData.columns,
          [newColumn.id]: newColumn,
        },
      };

      console.log(newState);

      setCardData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...cardData,
      columns: {
        ...cardData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setCardData(newState);
  };

  return (
    <div style={{ display: 'flex' }}>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {cardData.columnOrder.map((columnId, index) => {
                const column = cardData.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => cardData.tasks[taskId]
                );

                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                    cardData={cardData}
                    setCardData={setCardData}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>

      <button
        style={{ height: '50px', width: '200px' }}
        onClick={hendleVisible}
      >
        Add another card
      </button>

      {visible && (
        <ContainerModal>
          Add Column
          <label>
            Column title
            <input
              type="text"
              value={titleColumn}
              onChange={e => {
                setTitleColumn(e.target.value);
              }}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Add Column
          </button>
        </ContainerModal>
      )}
    </div>
  );
};
