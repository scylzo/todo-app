import { useTodos } from "../TodosProvider.jsx";
import Filter from "../components/Filter.jsx";
import TodosList from "../components/TodosList.jsx";
import AddTodoModal from "../components/modals/AddTodoModal.jsx";
import ModalWindow from "../components/modals/ModalWindow.jsx";

function Home() {
  const { modalIsActive } = useTodos();

  return (
    <>
      {modalIsActive && (
        <ModalWindow>
          <AddTodoModal />
        </ModalWindow>
      )}
      <div className="container">
        <Filter />

        <TodosList />
      </div>
    </>
  );
}

export default Home;
