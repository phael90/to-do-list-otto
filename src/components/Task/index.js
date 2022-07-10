const Task = ({ task, handleTaskUpdate, index }) => {
  return (
    <label htmlFor={`task-${index}`}>
      <input
        id={`task-${index}`}
        name={`task-${index}`}
        type="checkbox"
        checked={task.completed}
        onChange={(event) => {
          handleTaskUpdate(event.target.checked, index);
        }}
      ></input>
      {task.title}
    </label>
  );
};

export default Task;
