import { useEffect, useState } from "react";

import "../scss/Todo.scss";

export default function Todo(params) {
  const [state, setState] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleSubmit = (e) => {
    setList([...list, state]);
    setState("");
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
  }, [handleSubmit]);
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div>
      <h2>Todo-app</h2>
      <div className="todo">
        <p>name</p>

        <input onChange={handleChange} value={state}></input>
        <button
          onClick={handleSubmit}
          type="submit"
          onKeyPress={handleKeypress}
        >
          add
        </button>

        <br></br>
        <br></br>
        {list.map((list) => (
          <div>
            <p>{list}</p>
          </div>
        ))}
        <button>Mark as drop</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
