import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import AddEditCardModal from 'components/AddEditCard/AddEditCard';
import Modal from 'components/Modal/Modal';

import {
  LineContainer,
  TaskContainer,
  TaskTitle,
  TaskDesc,
  TaskVector,
  TaskBox,
  TaskContent,
  TaskPrior,
  TaskDeadline,
  TestListIcon,
} from './Task.styled';
import sprite from '../../images/sprite.svg';

export const Task = ({ task, index, isOpen, handleShowEditCardModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log(isModalOpen);
    setIsModalOpen(true);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <LineContainer />
          {/* <button onClick={() => console.log('awdawd')}></button> */}
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDesc>{task.description}</TaskDesc>
          <TaskVector />
          <TaskBox>
            <TaskContent>
              <TaskPrior>
                {/* <p>{task.priority}</p> */}
                <p>Priority</p>
                <div />
              </TaskPrior>
              <TaskDeadline>
                <p>Deadline</p>
                <span>{task.deadline}</span>
              </TaskDeadline>
            </TaskContent>
            <TestListIcon>
              <li>
                <button>
                  <svg width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-bell`} />
                  </svg>
                </button>
              </li>
              <li>
                <button onClick={() => handleShowEditCardModal(task)}>
                  <svg width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-pencil`} />
                  </svg>
                </button>
              </li>
              <li>
                <button>
                  <svg width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-trash`} />
                  </svg>
                </button>
              </li>
            </TestListIcon>
          </TaskBox>
          {isModalOpen && (
            <Modal heading={'Edit card'} isOpen={isOpen}>
              <AddEditCardModal />
            </Modal>
          )}
        </TaskContainer>
      )}
    </Draggable>
  );
};
