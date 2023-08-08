import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Column } from 'components/Column/Column';
//add Elvira
import AddColumn from 'components/Column/AddColumn/AddColumn';
import {
  MainContainer,
  Container,
  Button,
  BoxSvg,
  SvgAdd,
} from './MainDashboard.styled';
import sprite from '../../images/sprite.svg';

export const MainDashboard = ({ cardData, setCardData }) => {
  // кто будет делать этот блок, обратите внимание что именно приходит в cardData
  const [visible, setVisible] = useState(false);

  const handlerVisible = () => {
    setVisible(!visible);
  };

  const handleSubmit = data => {
    const columnId = `2${uuidv4().replace(/-/g, '')}`;

    const newColumn = {
      [columnId]: {
        id: columnId,
        title: data,
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

    handlerVisible();
  };
  // Эти три функции ниже отвечают за главный функционал переставления карточек между колонками и в колонках
  // а так же за анимацию при их передвижение
  const onDragStart = () => {
    document.body.style.color = 'inherit';
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
    <MainContainer>
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
                if (!column) {
                  return null;
                }
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
      <div>
        <Button onClick={handlerVisible}>
          <BoxSvg>
            <SvgAdd>
              <use href={`${sprite}#icon-plus`} />
            </SvgAdd>
          </BoxSvg>
          Add another column
        </Button>
      </div>
      {visible && (
        <>
          <AddColumn
            closeColumnModal={handlerVisible}
            handleSubmit={handleSubmit}
            title={'Add column'}
          />
        </>
      )}
    </MainContainer>
  );
};
