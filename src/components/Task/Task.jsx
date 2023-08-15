import { Draggable } from 'react-beautiful-dnd';

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

export const Task = ({
  task,
  index,
  handleShowEditCardModal,
  handleSubmitDeleteCard,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   console.log(isModalOpen);
  //   setIsModalOpen(true);
  // };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <LineContainer priority={task.priority} />
          {/* <button onClick={() => console.log('awdawd')}></button> */}
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDesc>{task.description}</TaskDesc>
          <TaskVector />
          <TaskBox>
            <TaskContent>
              <TaskPrior priority={task.priority}>
                <p>{task.priority}</p>
                {/* <p>Priority</p> */}
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
                <button onClick={() => handleSubmitDeleteCard(task.id)}>
                  <svg width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-trash`} />
                  </svg>
                </button>
              </li>
            </TestListIcon>
          </TaskBox>
          {/* {isModalOpen && (
            <Modal heading={'Edit card'} isOpen={isOpen}>
              <AddEditCardModal />
            </Modal>
          )} */}
        </TaskContainer>
      )}
    </Draggable>
  );
};
