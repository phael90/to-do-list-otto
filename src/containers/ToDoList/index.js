import { useState } from "react";

const ToDoList = () => {
  const [newTaskName, setNewTaskName] = useState("");
  return (
    <div>
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
    </div>
  );
};

export default ToDoList;
