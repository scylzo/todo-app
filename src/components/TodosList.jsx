import { useTodos } from "../TodosProvider.jsx";
import Todo from "./Todo.jsx";

function TodosList() {
  const { todos, filteredTodos } = useTodos();

  return (
    <>
      <div className="todos">
        {filteredTodos().length
          ? filteredTodos().map((todo) => <Todo key={todo.id} todo={todo} />)
          : "No to-dos to be shown. Try clearing the filter or add a new to-do."}
      </div>
    </>
  );
}

export default TodosList;
