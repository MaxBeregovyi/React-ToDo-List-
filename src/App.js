import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import "./App.css";
import TodosAction from "./components/Todos/Todos.action";
import button from "./components/UI/Button";

function App() {
  const [todos, setTodos] = useState([]);
  // const [isCompleted, setIsCompleted] = useState("");

  const addTodoHandler = (text) => {
    if (text.length) {
      const newTodo = {
        text: text,
        isCompleted: false,
        id: uuidv4(),
      };
      setTodos([...todos, newTodo]);
    }
  };

  const dellTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // const updTodo = [...todos];
    // updTodo.splice(index, 1);
    // setTodos(updTodo);
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        // if (todo.id === id) {
        //   return { ...todo, isCompleted: !todo.isCompleted };
        // }
        // return { ...todo };
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      }),
    );
  };
  const resetTodoHandler = () => {
    setTodos([]);
  };
  const clearCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const isCompletedTodo = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosAction
          resetTodo={resetTodoHandler}
          clearCompleted={clearCompletedHandler}
          isCompleted={!!isCompletedTodo}
        />
      )}

      <TodoList
        todos={todos}
        toggleTodo={toggleTodoHandler}
        dellTodo={dellTodoHandler}
      />
      {!!isCompletedTodo &&
        `You have ${isCompletedTodo} ${isCompletedTodo > 1 ? "tasks completed" : "task completed"}`}
    </div>
  );
}

export default App;
