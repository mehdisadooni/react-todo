import TodoContext from "./TodoContext";
import {useReducer} from "react";
import todoReducer from "./todoReducer";

const TodoProvider = ({children}) => {

    const initialState =  {
        todos:[]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider