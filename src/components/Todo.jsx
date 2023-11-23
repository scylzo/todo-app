import { useTodos } from "../TodosProvider";
import "./Todo.scss";

function Todo({ todo }) {
  const { dispatch } = useTodos();

  return (
    <>
      <div className={`todo ${todo.isDone ? "done" : ""}`}>
        <button
          className="erase"
          onClick={() =>
            dispatch({
              type: "deleted",
              id: todo.id,
            })
          }
        >
          x erase
        </button>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <div className="task-check">
          <input
            type="checkbox"
            defaultChecked={todo.isDone}
            onClick={() =>
              dispatch({
                type: "toggledIsDone",
                id: todo.id,
              })
            }
          />
          <label>{!todo.isDone ? "To-Do" : "Done"}</label>
        </div>
      </div>
    </>
  );
}

export default Todo;
