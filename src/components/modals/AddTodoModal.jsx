import { useTodos } from "../../TodosProvider";

function AddTodoModal() {
  const { todos, setTodos, dispatch, setModalIsActive } = useTodos();

  const addTaskHandler = () => {
    const newTodo = { isDone: false };
    newTodo.title = document.querySelector("input[name=title]").value;
    newTodo.description = document.querySelector(
      "textarea[name=description]"
    ).value;

    if (newTodo.title && newTodo.description) {
      dispatch({
        type: "added",
        newTodo,
      });
      setModalIsActive(false);
    } else {
      alert("Please enter the title and the description for the to-do.");
    }
  };

  return (
    <>
      <div className="form">
        <h3>Add a new task</h3>
        <label htmlFor="title">Title *</label>
        <input type="text" name="title" placeholder="Enter a title..." />
        <br />
        <label htmlFor="description">Description *</label>
        <textarea
          name="description"
          rows="4"
          placeholder="Enter a description..."
        />
        <br />
        <button className="btn gray" onClick={addTaskHandler}>
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddTodoModal;
