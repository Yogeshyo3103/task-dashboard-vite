import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";

export default function TaskForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "grid",
        gap: "10px",
        maxWidth: "400px",
        margin: "20px auto",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <input placeholder="Title" {...register("title", { required: true })} />
      <select {...register("type")}>
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
      </select>
      <input placeholder="Priority" {...register("priority")} />
      <input placeholder="Project" {...register("project")} />
      <input placeholder="Assignee" {...register("assignee")} />
      <textarea placeholder="Description" {...register("description")} />
      <input type="date" {...register("dueDate")} />
      <button type="submit">Add Task</button>
    </form>
  );
}
