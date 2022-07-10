import { useEffect, useState } from "react";
import NewTaskForm from "../NewTaskForm";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

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

  //CREATE
  const addNewTask = (newTaskName) => {
    setError(null);
    fetch("http://localhost:4000/toDoList", {
      method: "POST",
      body: JSON.stringify({
        title: newTaskName,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Add new task completed");
        fetchToDoList();
        return response.json();
      })
      .catch((error) => {
        console.log("Error", error);
        setError(error);
      });
    setNewTaskName("");
  };

  //UPDATE
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
      <NewTaskForm onSubmit={addNewTask} />
    </div>
  );
};

export default ToDoList;
