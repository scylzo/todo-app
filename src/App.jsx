import Header from "./components/Header.jsx";
import Home from "./views/Home.jsx";
import "./App.scss";
import TodosProvider from "./TodosProvider.jsx";

function App() {
  return (
    <>
      <main>
        <TodosProvider>
          <Header appName="To-Do List with React" />
          <Home />
        </TodosProvider>
      </main>
    </>
  );
}

export default App;
