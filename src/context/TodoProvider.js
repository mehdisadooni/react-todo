import TodoContext from "./TodoContext";
import {useCallback, useReducer} from "react";
import todoReducer from "./todoReducer";
import axios from "axios";

const TodoProvider = ({children}) => {

    const initialState = {
        todos: [],
        error: null
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)


    const getTodos = useCallback(async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch({
                type: 'SET_TODOS',
                payload: response.data
            })
            dispatch({
                type: 'SET_ERROR',
                payload: null
            })
            console.log('loop ...')
        } catch (error) {
            console.log(error.message)
            dispatch({
                type: 'SET_ERROR',
                payload: error.message
            })
            dispatch({
                type: 'SET_TODOS',
                payload: []
            })
        }
    }, [])

    return (
        <TodoContext.Provider value={{...state, dispatch, getTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider