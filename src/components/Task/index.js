import {
  HiddenTaskCheckbox,
  VisibleTaskCheckbox,
  CheckboxContainer,
  StyledIcon,
  StyledLabel,
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
        <StyledLabel htmlFor={`task-${index}`}>{task.title}</StyledLabel>
      </CheckboxContainer>
    </>
  );
};

export default Task;
