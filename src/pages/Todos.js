import {useContext} from "react";
import TodoContext from "../context/TodoContext";

const Todos = () => {
    const todoContext = useContext(TodoContext)
    console.log(todoContext);
    return (
        <h2>Todos page</h2>
    )
}

export default Todos