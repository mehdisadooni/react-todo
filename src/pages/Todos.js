import {useContext, useEffect, useState} from "react";
import TodoContext from "../context/TodoContext";

const Todos = () => {

    const {todos, error, getTodos} = useContext(TodoContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            await getTodos()
            setLoading(false)
        })()
    }, [getTodos])

    return (
        <div className='container mt-5'>
            <div className='row'>
                {error && <div className='alert alert-danger text-center'>{error}</div>}
                {loading && (
                    <div className='col-md-12 text-center'>
                        <div className='spinner-border mt-5'></div>
                    </div>
                )}
                {todos && todos.map(todo => (
                    <h1 key={todo.id}>{todo.title}</h1>
                ))}
            </div>
        </div>

    )
}

export default Todos