import { useState } from "react";
import "./App.scss";

function App() {
  const [todoname, setTodoname] = useState("");
  const [todolist, setTodolist] = useState([]);
  const updateTodoname = (e) => {
    const value = e.target.value;

    setTodoname(value);
  };

  const clickAdd = () => {
    if (todoname != "") {
      setTodolist([...todolist, { name: todoname, isCompleted: false }]);
      setTodoname("");
    }
  };

  return (
    <div className="App">
      <div>
        <h1>ToDo-List</h1>
        <input
          type="text"
          name="text "
          value={todoname}
          placeholder="Add your todo value"
          onChange={updateTodoname}
        ></input>
        <button onClick={clickAdd}>Add todo</button>
        <br></br>

        {todolist.map((item, i) => (
          <div>
            <p>
              {i}
              {item.name}
            </p>
            <span>mark as done</span> &nbsp;
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
