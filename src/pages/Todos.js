import {useContext, useEffect, useState} from "react";
import TodoContext from "../context/TodoContext";
import FilterTodos from "../components/FilterTodos";

const Todos = () => {

    const {todos, error, getTodos, loading} = useContext(TodoContext)

    useEffect(() => {
        (async () => {
            await getTodos()
        })()
    }, [getTodos])

    return (
        <div className='container mt-5'>
            <FilterTodos/>
            <div className='row'>
                {error && <div className='alert alert-danger text-center'>{error}</div>}
                {loading && (
                    <div className='col-md-12 text-center'>
                        <div className='spinner-border mt-5'></div>
                    </div>
                )}

                {todos && todos.map(todo => (
                    <div className='col-md-4' key={todo.id}>
                        <div className={"card " + (!todo.completed && "bg-secondary")}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>{todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}</div>
                                <div className='d-flex align-items-end'>
                                    {todo.completed ?
                                        <i className='bi bi-check-all fs-4'></i> :
                                        <i className='bi bi-check fs-4'></i>}
                                    <i className='bi bi-trash-fill fs-5'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Todos