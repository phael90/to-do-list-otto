import {
  HiddenTaskCheckbox,
  VisibleTaskCheckbox,
  CheckboxContainer,
  StyledIcon,
} from "./Task.styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, handleTaskUpdate, index }) => {
  return (
    <>
      <CheckboxContainer>
        <VisibleTaskCheckbox checked={task.completed}>
          <StyledIcon checked={task.completed} icon={faCheck} />
        </VisibleTaskCheckbox>

        <HiddenTaskCheckbox
          id={`task-${index}`}
          name={`task-${index}`}
          type="checkbox"
          checked={task.completed}
          onChange={(event) => {
            handleTaskUpdate(event.target.checked, index);
          }}
        />
        <label htmlFor={`task-${index}`}>{task.title}</label>
      </CheckboxContainer>
    </>
  );
};

export default Task;
