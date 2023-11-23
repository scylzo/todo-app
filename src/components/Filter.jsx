import "./Filter.scss";
import { useTodos } from "../TodosProvider";

function Filter() {
  const { filterBy, setFilterBy } = useTodos();

  return (
    <>
      <div className="filters">
        <div>
          <p>Filter by state</p>
          <div className="badges">
            <div
              className={`badge ${filterBy === "to-do" ? "selected" : ""}`}
              onClick={() => setFilterBy("to-do")}
            >
              To-Do
            </div>
            <div
              className={`badge ${filterBy === "done" ? "selected" : ""}`}
              onClick={() => setFilterBy("done")}
            >
              Done
            </div>
            {filterBy && (
              <span className="clear" onClick={() => setFilterBy("")}>
                x clear
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
