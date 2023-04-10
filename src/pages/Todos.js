import {useContext, useEffect} from "react";
import TodoContext from "../context/TodoContext";
import axios from "axios";

const Todos = () => {
    const todoContext = useContext(TodoContext)


    useEffect(() => {

        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(res => res.json())
        //     .then(data => {
        //         todoContext.dispatch({type: 'SET_TODOS', payload: data})
        //     });
        //
        // axios.get('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => {
        //         todoContext.dispatch({type: 'SET_TODOS', payload: response.data})
        //     }).catch(error => {
        //     console.log(error)
        // })
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                console.log(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchData()

    }, [])

    return (
        <h2>Todos page</h2>
    )
}

export default Todos