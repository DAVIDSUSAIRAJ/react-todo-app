import { useState, useEffect } from "react";
import "./App.scss";
import Todo from "./component/Todo";

function App() {
  const [todoname, setTodoname] = useState("");
  const [todolist, setTodolist] = useState([]);

  //   TODO INPUT VALUE GET
  const updateTodoname = (e) => {
    const value = e.target.value;

    setTodoname(value);
  };
  // END TODO INPUT VALUE GET

  //START INPUT VALUE PUSH IN ARRAY OF OBJECT
  const clickAdd = () => {
    if (todoname != "") {
      setTodolist([...todolist, { name: todoname, isCompleted: false }]);
      setTodoname("");
    }
  };
  // END INPUT VALUE PUSH IN ARRAY OF OBJECT

  // LINTTHROUGH STYLE

  const handleMark = (index) => {
    const newtodolist = [...todolist];
    console.log(newtodolist[index]);

    if (newtodolist[index].isCompleted) {
      newtodolist[index].isCompleted = false;
    } else {
      newtodolist[index].isCompleted = true;
    }
    setTodolist(newtodolist);
  };
  // END LINETHROUGH STYLE

  // START DELETE LIST

  const handleDelete = (index) => {
    const newtodolist = [...todolist];
    newtodolist.splice(index, 1);
    setTodolist(newtodolist);
  };

  // END DELETE LIST

  // 2 USEEFFECT WORK AAGUM,  SECOND ONE BEST PRACTISE;
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeypress);
  // });
  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
  }, [clickAdd]);

  // END USEEFFECT TO ENTERKEY

  // KEYPRESSCODE GET AND ONCLICK FUNCTION ADDED

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      clickAdd();
    }
  };
  // END KEYPRESSCODE GET AND ONCLICK FUNCTION ADDED

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
        <button onClick={clickAdd} onKeyPress={handleKeypress}>
          Add todo
        </button>
        <br></br>

        {todolist.map((item, i) => (
          <div>
            <p>
              {i}
              {item.name}
            </p>
            <span
              className={item.isCompleted ? "linethrough" : "line"}
              onClick={() => handleMark(i)}
            >
              mark as done
            </span>{" "}
            &nbsp;
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>

      <Todo />
    </div>
  );
}

export default App;
