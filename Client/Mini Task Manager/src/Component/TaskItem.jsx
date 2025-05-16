import React from "react";

const TaskItem = ({ task, index, onStatusChange, onDelete }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.status === "Completed"}
        onChange={(e) => onStatusChange(e, index)}
      />
      <div className={task.status === "Completed" ? "completed" : ""}>
        {task.name}
      </div>
      <div>{task.status}</div>
      <button onClick={() => onDelete(task.name)}>DELETE</button>
    </li>
  );
};

export default TaskItem;
