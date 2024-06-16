import Todo from "./Todo";
import style from "./TodoList.module.css";

const TodoList = ({ todos, dellTodo, toggleTodo }) => {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h3>Push your todo-text</h3>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          dellTodo={dellTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
