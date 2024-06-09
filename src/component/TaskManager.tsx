import React from 'react';

interface Task {
  title: string;
  description: string;
  dueDate: string;
  status: 'Completed' | 'Pending';
}

interface TaskManagerProps {
  tasks: Task[];
}

const TaskManager: React.FC<TaskManagerProps> = ({ tasks }) => {
    
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskManager;