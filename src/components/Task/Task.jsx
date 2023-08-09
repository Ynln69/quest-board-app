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
import { Draggable } from 'react-beautiful-dnd';
import sprite from '../../images/sprite.svg';

export const Task = ({ task, index }) => {
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
                <button>
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
        </TaskContainer>
      )}
    </Draggable>
  );
};
