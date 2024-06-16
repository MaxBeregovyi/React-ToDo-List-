import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder={"Your text"}
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
