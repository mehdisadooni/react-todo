import TodoContext from "./TodoContext";
import {useCallback, useReducer} from "react";
import todoReducer from "./todoReducer";
import axios from "axios";

const TodoProvider = ({children}) => {

    const initialState = {
        todos: [],
        error: null,
        loading: true
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
            dispatch({
                type: 'SET_LOADING',
                payload: false
            })
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
            dispatch({
                type: 'SET_LOADING',
                payload: false
            })
        }
    }, [])


    const filterTodos = async (value) => {
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            })
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${value}`)
            dispatch({
                type: 'FILTER_TODOS',
                payload: response.data
            })
            dispatch({
                type: 'SET_ERROR',
                payload: null
            })
            dispatch({
                type: 'SET_LOADING',
                payload: false
            })
        } catch (error) {
            console.log(error.message)
            dispatch({
                type: 'SET_ERROR',
                payload: error.message
            })
            dispatch({
                type: 'FILTER_TODOS',
                payload: []
            })
            dispatch({
                type: 'SET_LOADING',
                payload: false
            })
        }
    }

    return (
        <TodoContext.Provider value={{...state, dispatch, getTodos, filterTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider