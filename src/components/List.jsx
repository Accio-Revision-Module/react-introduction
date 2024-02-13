import { useContext } from "react"
import TodoComponent from "./TodoComponent"
import { TodoContext } from "../contexts/TodoContext";

function List() {
  const { todos } = useContext(TodoContext);

  return (
    <main>
        <h2>All todos</h2>
        <div className="list">
            {todos.length === 0 && (
                <p>No todos yet.</p>
            )}
            {todos.map((todo, i) => (
                <TodoComponent todo={todo} id={i} key={i} />
            ))}
        </div>
    </main>
  )
}

export default List