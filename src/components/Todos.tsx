import TodoItem from "./TodoItem";
import todo from "../models/todo";

const Todos: React.FC<{ items: todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
