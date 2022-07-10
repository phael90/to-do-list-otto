import { useEffect, useState } from "react";
import NewTaskForm from "../NewTaskForm";
import Task from "../../components/Task";
import { Container, StyledList } from "./ToDoList.styles";

const ToDoList = () => {
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
        fetchToDoList();
        return response.json();
      })
      .catch((error) => {
        console.log("Error", error);
        setError(error);
      });
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
    <Container>
      <h2>Todo list:</h2>
      <StyledList>
        {toDoList?.map((task, i) => {
          return (
            <li key={task.id}>
              <Task task={task} handleTaskUpdate={handleTaskUpdate} index={i} />
            </li>
          );
        })}
      </StyledList>
      <NewTaskForm onSubmit={addNewTask} />
    </Container>
  );
};

export default ToDoList;
