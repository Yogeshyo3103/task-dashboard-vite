import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../store/selectors";

export default function TaskList() {
  const tasks = useSelector(selectTasks);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{task.title}</h3>
          <p>
            <b>Type:</b> {task.type}
          </p>
          <p>
            <b>Priority:</b> {task.priority}
          </p>
          <p>
            <b>Assignee:</b> {task.assignee}
          </p>
          <p>
            <b>Description:</b> {task.description}
          </p>
          <p>
            <b>Due Date:</b> {task.dueDate}
          </p>
        </div>
      ))}
    </div>
  );
}
