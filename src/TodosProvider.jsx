import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
export const todosContext = createContext("");

const initialTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [modalIsActive, setModalIsActive] = useState(false);
  const [filterBy, setFilterBy] = useState("");

  const filteredTodos = () => {
    switch (filterBy) {
      case "to-do": {
        return todos.filter((todo) => todo.isDone === false);
      }
      case "done": {
        return todos.filter((todo) => todo.isDone === true);
      }
      default:
        return todos;
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <todosContext.Provider
      value={{
        todos,
        dispatch,
        modalIsActive,
        setModalIsActive,
        filterBy,
        setFilterBy,
        filteredTodos,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodosProvider;

export const useTodos = () => {
  return useContext(todosContext);
};

function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const todo = action.newTodo;
      todo.id = todos.length
        ? Math.max(...todos.map((todo) => todo.id)) + 1
        : 1;
      return [...todos, todo];
    }
    case "deleted": {
      if (confirm("Are you sure you want to delete the to-do ?")) {
        return todos.filter((todo) => todo.id !== action.id);
      } else return todos;
    }
    case "toggledIsDone": {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      });
    }
    case "allTodos": {
      return [...todos];
    }
    case "filtred": {
      return todos.filter((todo) => todo.isDone === true);
    }
  }
}
