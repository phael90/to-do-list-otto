import { useState } from "react";

const NewTaskForm = ({ onSubmit }) => {
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event);
        onSubmit(newTaskName);
        setNewTaskName("");
      }}
    >
      <label htmlFor="new-task-name">New task name:</label>
      <input
        name="new-task-name"
        id="new-task-name"
        type="text"
        value={newTaskName}
        onChange={(event) => {
          setNewTaskName(event.target.value);
        }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
