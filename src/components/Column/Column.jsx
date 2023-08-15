import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { showToast } from '../Notification/ToastNotification';

import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from 'components/Task/Task';
import Modal from '../Modal/Modal';
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
import { selectFilterPriority } from 'redux/filter/filterSelector';
import { useSelector } from 'react-redux';
import MainButton from 'components/MainButton';
import ModalColumn from '../ModalColumn/ModalColumn';

export const Column = ({
  column,
  tasks,
  index,
  cardData,
  setCardData,
  setEditFlag,
}) => {
  const property = useSelector(selectFilterPriority);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const [visible, setVisible] = useState(false);
  const [dataForModal, setDataForModal] = useState(column);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showEditCardModal, setShowEditCardModal] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {
    const newFilteredTasks = tasks.filter(task => {
      if (property === 'all') {
        return true;
      }
      return task.priority === property;
    });

    setFilteredTasks(newFilteredTasks);
  }, [property, tasks]);

  if (true === false) {
    console.log(setDataForModal);
  }

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

  const handleSubmitAdd = (title, description, priority) => {
    const taskId = `1${uuidv4().replace(/-/g, '')}`;

    const newTask = {
      [taskId]: {
        id: taskId,
        // title: titleTask,
        title: title,
        description: description,
        priority: priority,
        deadline: '22.33.44',
      },
    };

    const columnId = dataForModal.id;
    // console.log(setDataForModal);

    const newColumn = {
      ...cardData.columns[columnId],
      taskIds: [...cardData.columns[columnId].taskIds, taskId],
    };

    setEditFlag(true);
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

    setEditFlag(true);
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

    setEditFlag(true);
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
    if (tasks.length > 0) {
      showToast(
        'error',
        'You cannot delete as long as there are uncompleted tasks in the column!'
      );
      return;
    }
    if (tasks.length === 0) {
      const newColumns = { ...cardData.columns };
      delete newColumns[column.id];
      const newColumnOrder = cardData.columnOrder.filter(
        order => order !== column.id
      );

      setEditFlag(true);
      setCardData(prevCardData => ({
        ...prevCardData,
        columnOrder: newColumnOrder,
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
                {/* {tasks.map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  handleShowEditCardModal={handleShowEditCardModal}
                  handleSubmitDeleteCard={handleSubmitDeleteCard}
                />
              ))} */}

                {filteredTasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    handleShowEditCardModal={handleShowEditCardModal}
                    handleSubmitDeleteCard={handleSubmitDeleteCard}
                  />
                ))}
                {/* {tasks.map((task, index) => {
                  // return <Task key={task.id} task={task} index={index} />;
                  if (property === 'all') {
                    return <Task key={task.id} task={task} index={index} />;
                  }
                  if (property === task.priority) {
                    return <Task key={task.id} task={task} index={index} />;
                  }
                })} */}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <MainButton
            showPlus={true}
            onClick={() => {
              handleVisible();
              setIsOpen(true);
            }}
          >
            Add another card
          </MainButton>
          {showEditCardModal && (
            <Modal
              handleClose={() => setShowEditCardModal(false)}
              isOpen={isOpen}
              heading={'Edit card'}
              modalType={'modalColumn'}
            >
              <AddEditCardModal
                editedTask={editedTask}
                handleSubmit={handleSubmitEditCard}
              />
            </Modal>
          )}
          {showEditModal && (
            <Modal
              isOpen={showEditModal}
              handleClose={handleVisibleEdit}
              heading={'Edit column'}
              modalType={'modalBoard'}
            >
              <ModalColumn
                handleSubmit={handleSubmitEdit}
                nameTitle={column.title}
              />
            </Modal>
          )}
          {visible && (
            <Modal
              handleClose={() => setIsOpen(false)}
              isOpen={isOpen}
              heading={'Add card'}
              modalType={'modalCard'}
            >
              <AddEditCardModal handleSubmit={handleSubmitAdd} />
            </Modal>
          )}
        </Container>
      )}
    </Draggable>
  );
};
