import React from "react";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import style from "./Todo.module.css";

const Todo = ({ todo, dellTodo, toggleTodo }) => {
  return (
    <div
      className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ""}`}
    >
      <RiTodoFill className={style.todoIcon} />
      <h3 className={style.todoText}>{todo.text}</h3>

      <RiDeleteBin2Line
        className={style.deleteIcon}
        onClick={() => dellTodo(todo.id)}
      />
      <FaCheck
        onClick={() => toggleTodo(todo.id)}
        className={style.checkIcon}
      />
    </div>
  );
};

export default Todo;
