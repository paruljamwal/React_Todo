import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import './Todo.css'
export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [showall, setShowAll] = useState();
  const handeladd = (title) => {
    const payload = {
      title,
      status: false,
      id: uuid(),
    };

    setTodo([...todo, payload]);
  };

  //toggle

  const handelToggle = (id) => {
    const updated = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(updated);
  };

  const handeldelete=(id)=>{
   const del= todo.filter((e)=>e.id !==id)
    setTodo(del)
  }

  return (
    <div>
      <TodoInput value={todo} onClick={handeladd}></TodoInput>
      {todo
        .filter((item) => (showall ? true : !item.status))
        .map((e) => (
          <TodoList handeldelete={handeldelete} handelToggle={handelToggle} key={e.id} {...e} />
        ))}
      <br />{" "}
      <button className="show" onClick={() => setShowAll(!showall)}>
        {showall ? "Show only unfinished" : "Show All"}
      </button>
    </div>
  );
};
