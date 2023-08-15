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
  IconBell,
} from './Task.styled';
import sprite from '../../images/sprite.svg';
import { format } from 'date-fns';

export const Task = ({
  task,
  index,
  handleShowEditCardModal,
  handleSubmitDeleteCard,
}) => {
  const formatDate = format(new Date(), 'dd/MM/yyyy');

  const isDeadline = task.deadline === formatDate;
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

          <TaskTitle>{task.title}</TaskTitle>
          <TaskDesc>{task.description}</TaskDesc>
          <TaskVector />
          <TaskBox>
            <TaskContent>
              <TaskPrior priority={task.priority}>
                <p>{task.priority}</p>

                <div />
              </TaskPrior>
              <TaskDeadline>
                <p>Deadline</p>
                <span>{task.deadline}</span>
              </TaskDeadline>
            </TaskContent>
            <TestListIcon>
              <li>
                <IconBell isActive={isDeadline} width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-bell`} />
                </IconBell>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleShowEditCardModal(task)}
                >
                  <svg width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-pencil`} />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSubmitDeleteCard(task.id)}
                >
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
