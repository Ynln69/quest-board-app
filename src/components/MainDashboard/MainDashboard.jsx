import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Column } from 'components/Column/Column';
import {
  MainContainer,
  Container,
  Button,
  BoxSvg,
  SvgAdd,
} from './MainDashboard.styled';
import sprite from '../../images/sprite.svg';
import Modal from 'components/Modal/Modal';
import ModalColumn from 'components/ModalColumn/ModalColumn';

export const MainDashboard = ({ cardData, setCardData, setEditFlag }) => {
  const [visible, setVisible] = useState(false);

  const handlerVisible = () => {
    setVisible(!visible);
  };

  const handleSubmit = data => {
    const columnId = `2${uuidv4().replace(/-/g, '')}`;

    const newColumn = {
      id: columnId,
      title: data,
      taskIds: [],
    };

    setEditFlag(true);
    setCardData({
      ...cardData,
      columns: {
        ...cardData.columns,
        [columnId]: newColumn,
      },
      columnOrder: [...cardData.columnOrder, columnId],
    });

    handlerVisible();
  };

  const onDragEnd = result => {
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

      setEditFlag(true);
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

      setEditFlag(true);
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

    setEditFlag(true);
    setCardData(newState);
  };

  return (
    <MainContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {cardData?.columnOrder.map((columnId, index) => {
                const column = cardData.columns[columnId];
                if (!column) {
                  return null;
                }
                const tasks = column.taskIds.map(taskId => cardData.tasks[taskId]);

                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                    cardData={cardData}
                    setCardData={setCardData}
                    setEditFlag={setEditFlag}
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
        <Modal
          handleClose={handlerVisible}
          heading={'Add column'}
          isOpen={visible}
          modalType={'modalColumn'}
        >
          <ModalColumn handleSubmit={handleSubmit} />
        </Modal>
      )}
    </MainContainer>
  );
};
 