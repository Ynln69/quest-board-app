import { useState, useEffect } from 'react';
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

import { selectFilterPriority } from 'redux/filter/filterSelector';
import { useSelector } from 'react-redux';

export const Column = ({ column, tasks, index, cardData, setCardData }) => {
  const property = useSelector(selectFilterPriority);
  const [visible, setVisible] = useState(false);
  const [dataForModal, setDataForModal] = useState(column);
  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

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
        description: descriptionTask,
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
                {filteredTasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
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
          <BtnColumn
            text={'Add another card'}
            onClick={() => {
              handleVisible();
              setIsOpen(true);
            }}
          />
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
              <AddEditCardModal
                setTitleTask={setTitleTask}
                setDescriptionTask={setDescriptionTask}
                handleSubmit={handleSubmit}
              />
            </Modal>
          )}
        </Container>
      )}
    </Draggable>
  );
};
