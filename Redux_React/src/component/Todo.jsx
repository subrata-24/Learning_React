import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncActionCreator } from '../services/actions/Actions';

const Todo = () => {

    const {isLoading,error,todo}= useSelector((state) => state);

    const dispatch  = useDispatch()
    useEffect(() => {
        dispatch(asyncActionCreator())
    },[])
    

  return (
    <div>
          <h1>Todo App</h1>
          {isLoading && <h4>Loading...</h4>}
          {error && <h4>{error}</h4> }
          {todo && todo.map((todo) =>(
                      <article key={todo.id}>
                          <h2>{todo.id}</h2>
                          <h2>{todo.title}</h2>
                      </article>
                  ))
          }
    </div>
  )
}

export default Todo
