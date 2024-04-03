import React from 'react';
import { Task } from './types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = React.useState<number | null>(null);
  const [deletingTaskId, setDeletingTaskId] = React.useState<number | null>(
    null,
  );

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: taskName,
        isCompleted: false,
      },
    ]);
  };

  const onSaveTask = (editedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task,
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  const onDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setDeletingTaskId(null);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList>
        <TaskListHeader count={tasks.length} />
        {tasks.map((task) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              <EditTask
                task={task}
                onSave={onSaveTask}
                onCancel={() => setEditingTaskId(null)}
              />
            ) : (
              <TaskListItem
                task={task}
                onEdit={() => setEditingTaskId(task.id)}
                onDelete={() => setDeletingTaskId(task.id)}
              />
            )}
          </div>
        ))}
      </TaskList>
      {deletingTaskId && (
        <DeleteTask
          taskId={deletingTaskId}
          onDelete={onDeleteTask}
          onCancel={() => setDeletingTaskId(null)}
        />
      )}
    </div>
  );
}

export default App;

// import React from 'react';
// import { Task } from './types';
// import AddTask from './AddTask';
// import TaskList from './TaskList';
// import TaskListItem from './TaskListItem';
// import TaskListHeader from './TaskListHeader';

// function App() {
//   const [tasks, setTasks] = React.useState<Task[]>([]);

//   const onAddTask = (taskName: string) => {
//     setTasks([
//       ...tasks,
//       {
//         id: new Date().getTime(), // Not a great way to generate IDs
//         title: taskName,
//         isCompleted: false,
//       },
//     ]);
//   };
//   return (
//     <div>
//       <h1>Tasks</h1>
//       <AddTask onAddTask={onAddTask} />
//       <TaskList>
//         <TaskListHeader count={tasks.length} />
//         {tasks.map((task) => (
//           <TaskListItem key={task.id}>{task.title}</TaskListItem>
//         ))}
//       </TaskList>
//     </div>
//   );
// }

// export default App;
