import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from 'components/Task/Task';
import AddColumn from './AddColumn/AddColumn';
import Modal from '../Modal/Modal';
import BtnColumn from './BtnColumn/BtnColumn';
import AddEditCardModal from '../AddEditCard/AddEditCard';
import {
  Container,
  Title,
  TitleBox,
  TaskList,
  Svg,
  BoxSvg,
} from './Column.styled';
import sprite from '../../images/sprite.svg';

export const Column = ({ column, tasks, index, cardData, setCardData }) => {
  const [visible, setVisible] = useState(false);
  const [dataForModal, setDataForModal] = useState(column);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showEditCardModal, setShowEditCardModal] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const handleShowEditCardModal = task => {
    setEditedTask(task);
    setShowEditCardModal(true);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleVisibleEdit = () => {
    setShowEditModal(!showEditModal);
  };

  const handleSubmitAdd = (title, description) => {
    const taskId = `1${uuidv4().replace(/-/g, '')}`;

    const newTask = {
      [taskId]: {
        id: taskId,
        title: title,
        description: description,
        priority: 'over',
        deadline: '22.33.44',
      },
    };

    const columnId = dataForModal.id;
    console.log(setDataForModal);

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

  const handleSubmitEditCard = (id, title, description) => {
    const updatedTask = {
      ...cardData.tasks[id],
      title: title,
      description: description,
      priority: 'over',
      deadline: '22.33.44',
    };

    setCardData(prevCardData => ({
      ...prevCardData,
      tasks: {
        ...prevCardData.tasks,
        [id]: updatedTask,
      },
    }));

    setShowEditCardModal(false);
  };

  const handleSubmitDeleteCard = id => {
    const newTasks = { ...cardData.tasks };
    delete newTasks[id];

    const newColumns = { ...cardData.columns };
    const columnId = dataForModal.id;

    const newColumn = {
      ...newColumns[columnId],
      taskIds: newColumns[columnId].taskIds.filter(taskId => taskId !== id),
    };

    setCardData(prevCardData => ({
      ...prevCardData,
      tasks: newTasks,
      columns: {
        ...prevCardData.columns,
        [columnId]: newColumn,
      },
    }));
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
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    handleShowEditCardModal={handleShowEditCardModal}
                    handleSubmitDeleteCard={handleSubmitDeleteCard}
                  />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <BtnColumn
            text={'Add another card'}
            onClick={() => {
              handleVisible();
              setIsOpen(true);
            }}
          />
          {showEditCardModal && (
            <Modal
              heading={'Edit card'}
              handleClose={() => setShowEditCardModal(false)}
              isOpen={showEditCardModal}
            >
              <AddEditCardModal
                editedTask={editedTask}
                handleSubmit={handleSubmitEditCard}
              />
            </Modal>
          )}
          {showEditModal && (
            <AddColumn
              title={'Edit column'}
              nameTitle={column.title}
              closeColumnModal={handleVisibleEdit}
              handleSubmit={handleSubmitEdit}
            />
          )}
          {visible && (
            <Modal
              handleClose={() => setIsOpen(false)}
              isOpen={isOpen}
              heading={'Add card'}
            >
              <AddEditCardModal handleSubmit={handleSubmitAdd} />
            </Modal>
          )}
        </Container>
      )}
    </Draggable>
  );
};
