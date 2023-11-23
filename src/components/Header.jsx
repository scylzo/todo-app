import { useTodos } from "../TodosProvider";
import "./Header.scss";

function Header({ appName }) {
  const { setModalIsActive } = useTodos();

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-side">
            <h1>{appName}</h1>
          </div>
          <div className="header-side">
            <button
              className="btn secondary"
              onClick={() => setModalIsActive(true)}
            >
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
