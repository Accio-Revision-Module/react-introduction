import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Form() {
    const [value, setValue] = useState("");
    const {addTodo, activeTodoId, todos, editTodo} = useContext(TodoContext);

    useEffect(() => {
        if(activeTodoId != null) {
            setValue(todos[activeTodoId].content)
        }
    }, [activeTodoId])

    const resetValues = () => {
        setValue("");
    }

    const validate = () => {
        if(value.length > 0) return true;
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validate()) return;

        if(activeTodoId != null) {
            editTodo(value);
            return;
        }

        addTodo(value);

        resetValues();
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your todo" value={value} onChange={(e) => setValue(e.target.value)} />
        <button>{activeTodoId != null ? "Edit" : "Add"}</button>
    </form>
  )
}

export default Form