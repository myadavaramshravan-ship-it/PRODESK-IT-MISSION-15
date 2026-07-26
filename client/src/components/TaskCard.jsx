import { useState } from "react";
import { toast } from "react-toastify";
import { updateTask } from "../services/taskService";

const TaskCard = ({ task, onDelete, onUpdate }) => {
  if (!task) return null;

  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    title: task.title || "",
    description: task.description || "",
    status: task.status || "Pending",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveTask = async () => {
    try {
      const res = await updateTask(task._id, form);
      onUpdate(res.data);
      toast.success("Task Updated");
      setEditing(false);
    } catch {
      toast.error("Update Failed");
    }
  };

  if (editing) {
    return (
      <div className="task-row edit-row">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          className="save-btn"
          onClick={saveTask}
        >
          Save
        </button>

        <button
          className="cancel-btn"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="task-row">

      <div className="task-title">
        {task.title}
      </div>

      <div className="task-description">
        {task.description}
      </div>

      <div className="task-status">
        {task.status}
      </div>

      <button
        className="edit-btn"
        onClick={() => setEditing(true)}
      >
        Edit
      </button>

      <button
        className="delete-btn"
        onClick={() => onDelete(task._id)}
      >
        Delete
      </button>

    </div>
  );
};

export default TaskCard;