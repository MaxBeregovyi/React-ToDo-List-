import React from "react";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodosAction({ resetTodo, clearCompleted, isCompleted }) {
  return (
    <div>
      <Button onClick={resetTodo} title={"Reset todos"}>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={clearCompleted}
        title={"Clear completed todos"}
        disabled={!isCompleted}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;
