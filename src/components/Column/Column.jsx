import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from 'components/Task/Task';
import AddColumn from './AddColumn/AddColumn';
import BtnColumn from './BtnColumn/BtnColumn';
import {
  Container,
  Title,
  TitleBox,
  TaskList,
  ContainerModal,
  Svg,
  BoxSvg,
} from './Column.styled';
import sprite from '../../images/sprite.svg';

export const Column = ({ column, tasks, index, cardData, setCardData }) => {
  const [visible, setVisible] = useState(false);
  const [dataForModal, setDataForModal] = useState(column);
  const [titleTask, setTitleTask] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  if (true === false) {
    console.log(setDataForModal);
  }

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleVisibleEdit = () => {
    setShowEditModal(!showEditModal);
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

    handleVisible();
  };

  const handleEdit = e => {
    handleVisibleEdit();
  };

  const handleSubmitEdit = data => {
    column.title = data;
    handleVisibleEdit();
  };

  const handleDelete = () => {
    if (tasks.length === 0) {
      const newColumns = { ...cardData.columns };
      delete newColumns[column.id];

      setCardData(prevCardData => ({
        ...prevCardData,
        columns: newColumns,
      }));
    }
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <TitleBox {...provided.dragHandleProps}>
            <Title>{column.title}</Title>
            <BoxSvg>
              <button onClick={handleEdit}>
                <Svg>
                  <use href={`${sprite}#icon-pencil`} />
                </Svg>
              </button>
              <button onClick={handleDelete}>
                <Svg>
                  <use href={`${sprite}#icon-trash`} />
                </Svg>
              </button>
            </BoxSvg>
          </TitleBox>
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
          <BtnColumn text={'Add another card'} onClick={handleVisible} />
          {showEditModal && (
            <AddColumn
              title={'Edit column'}
              nameTitle={column.title}
              closeColumnModal={handleVisibleEdit}
              handleSubmit={handleSubmitEdit}
            />
          )}
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
