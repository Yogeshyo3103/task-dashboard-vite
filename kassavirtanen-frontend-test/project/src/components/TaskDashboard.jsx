import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOAD_TASKS" });
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      {/* Removed duplicate title */}
      <TaskForm />
      <TaskList />
    </div>
  );
}
