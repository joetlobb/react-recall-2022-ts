import TodoItem from "./TodoItem";
import todo from "../models/todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
