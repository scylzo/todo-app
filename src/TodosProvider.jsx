import { createContext, useContext, useReducer, useState } from "react";
export const todosContext = createContext("");

const initialTodos = [
  {
    id: 0,
    title: "Do Groceries",
    description: "Buy apples, rice, juice and toilet paper.",
    isDone: true,
  },
  {
    id: 1,
    title: "Study React",
    description: "Understand context, reducers.",
    isDone: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "Learn state management with Redux.",
    isDone: false,
  },
];

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
      }
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
