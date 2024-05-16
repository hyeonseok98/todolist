import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "working", "done"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
