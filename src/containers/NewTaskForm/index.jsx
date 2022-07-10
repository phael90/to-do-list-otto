import { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./NewTaskForm.styles";

const NewTaskForm = ({ onSubmit }) => {
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event);
        onSubmit(newTaskName);
        setNewTaskName("");
      }}
    >
      <StyledLabel htmlFor="new-task-name">New task name:</StyledLabel>
      <StyledInput
        name="new-task-name"
        id="new-task-name"
        type="text"
        value={newTaskName}
        onChange={(event) => {
          setNewTaskName(event.target.value);
        }}
      />
      <StyledButton type="submit">Add Task</StyledButton>
    </StyledForm>
  );
};

export default NewTaskForm;
