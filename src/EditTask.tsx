import React, { useState } from 'react';
import { Task } from './types';

interface EditTaskProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onCancel: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ task, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    onSave({ ...task, title: editedTitle });
  };

  return (
    <div>
      <label htmlFor="task-edit">Edit Task: </label>
      <input
        id="task-edit"
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditTask;
