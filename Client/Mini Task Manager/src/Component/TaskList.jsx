import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import "./taskList.css";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  // Load tasks from localStorage on first render
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever taskList changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  // Handle task name input change
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return; // ignore empty input

    const newTask = {
      name: taskName.trim(),
      status: "Active",
    };

    setTaskList((prevTasks) => [...prevTasks, newTask]);
    setTaskName("");
  };

  // Delete task by name
  const handleDeleteTask = (taskNameToDelete) => {
    setTaskList((prevTasks) =>
      prevTasks.filter((task) => task.name !== taskNameToDelete)
    );
  };

  // Toggle task status (Active / Completed)
  const handleCheckboxChange = (e, index) => {
    const isChecked = e.target.checked;

    setTaskList((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        status: isChecked ? "Completed" : "Active",
      };
      return updatedTasks;
    });
  };

  // Filter change handler
  const handleSelectChange = (e) => {
    setSelectedFilterValue(e.target.value);
  };

  // Update filtered task list whenever taskList or filter changes
  useEffect(() => {
    if (selectedFilterValue === "" || selectedFilterValue === "All") {
      setFilteredTasks(taskList);
    } else {
      setFilteredTasks(
        taskList.filter((task) => task.status === selectedFilterValue)
      );
    }
  }, [selectedFilterValue, taskList]);

  // Count of pending (active) tasks
  const pendingTaskCount = taskList.filter(
    (task) => task.status === "Active"
  ).length;

  return (
    <div className="container">
      <form onSubmit={handleAddTask}>
        <input
          value={taskName}
          type="text"
          onChange={handleChange}
          placeholder="Add task name"
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        <select
          value={selectedFilterValue}
          onChange={handleSelectChange}
          name="tasks"
          id="tasks"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <h2>Pending Tasks: {pendingTaskCount}</h2>
      <h2>List of Tasks</h2>

      <ul>
        <li className="task-header">
          <div></div>
          <div>Task Name</div>
          <div>Status</div>
          <div>Action</div>
        </li>

        {filteredTasks.length === 0 ? (
          <li className="task-item no-tasks">No tasks found.</li>
        ) : (
          filteredTasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              onStatusChange={handleCheckboxChange}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;