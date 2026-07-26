import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className="tasks-section">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;