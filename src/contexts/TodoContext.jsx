import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({children}) {
    const [todos, setTodos] = useState([]);
    const [activeTodoId, setActiveTodoId] = useState(null);

    const addTodo = (value) => {
        const temp = [...todos];
        temp.push({
        content: value,
        })
        setTodos(temp);
    }

    const deleteTodo = (id) => {
        const temp = [...todos];
        temp.splice(id, 1);
        setTodos(temp);
    }

    const editTodo = (value) => {
        const temp = [...todos];
        temp[activeTodoId].content = value;
        setTodos(temp);
        setActiveTodoId(null);
    }

    return (
        <TodoContext.Provider value={{
            todos,
            activeTodoId,
            addTodo,
            deleteTodo,
            setActiveTodoId,
            editTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}