import React from 'react';
import { Task } from './types';

interface TaskListItemProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
  task,
  onEdit,
  onDelete,
}) => {
  return (
    <li>
      <div>{task.title}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TaskListItem;
