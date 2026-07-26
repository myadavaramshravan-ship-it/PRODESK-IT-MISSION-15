import { useState } from "react";
import { createTask } from "../services/taskService";
import { toast } from "react-toastify";
import "../App.css"

const TaskForm = ({ onTaskCreated }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createTask(task);

      onTaskCreated(res.data);
     toast.success("Task created successfully");
      setTask({
        title: "",
        description: "",
        status: "Pending",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Task creation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;