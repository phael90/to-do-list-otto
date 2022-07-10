import { SerializationError } from "@elastic/elasticsearch/lib/errors";
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

  useEffect(() => {
    fetchToDoList();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ul>
        {toDoList?.map((task) => {
          return (
            <li key={task.id}>
              <label>{task.title}</label>
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
