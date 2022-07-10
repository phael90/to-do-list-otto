import { useEffect, useState } from "react";

const ToDoList = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //GET
  const fetchToDoList = () => {
    setIsLoading(true);
    setError(null);
    fetch("http://localhost:4000/toDoList")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Oops something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setToDoList(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //PUT
  const updateTask = (task) => {
    setError(null);
    fetch(`http://localhost:4000/toDoList/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Oops something went wrong when updating your task");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  const handleTaskUpdate = (value, taskIndex) => {
    const updateToDoList = [...toDoList];
    updateToDoList[taskIndex].completed = value;

    setToDoList(updateToDoList);
    updateTask(updateToDoList[taskIndex]);
  };

  useEffect(() => {
    fetchToDoList();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <ul>
        {toDoList?.map((task, i) => {
          return (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(event) => {
                    handleTaskUpdate(event.target.checked, i);
                  }}
                ></input>
                {task.title}
              </label>
            </li>
          );
        })}
      </ul>
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
