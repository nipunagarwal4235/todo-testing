import React from 'react';

interface DeleteTaskProps {
  taskId: number;
  onDelete: (taskId: number) => void;
  onCancel: () => void;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({
  taskId,
  onDelete,
  onCancel,
}) => {
  const handleDelete = () => {
    onDelete(taskId);
  };

  return (
    <div>
      <p>Are you sure you want to delete this task?</p>
      <button onClick={handleDelete}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteTask;
