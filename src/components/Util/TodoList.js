import React,{useEffect, useState} from 'react'
import TodoListItem from './TodoListItem';
import "./TodoList.css";

const local_storage_key = "react-app-accio-todos";

function TodoList(props) {

 
  // whenever the dependency get change useEffect runs
    // const [todos, setTodos] = React.useState();
    // all todo
    const [todos, setTodos] = useState([]);

    // array, object ==> string JSON.stringify
    // string ==> array, object JSON.parse
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(local_storage_key));
      if(storedTodos) setTodos(storedTodos);
    }, [])

    useEffect(() => {
      if(todos.length > 0)
      localStorage.setItem(local_storage_key, JSON.stringify(todos));
    }, [todos]);

    function deleteItem(id) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
    // todo input
    const [todoInput, setTodoInput] = useState("");
    const handleInput = (e) => {
        setTodoInput(e.target.value);   
    }
    // useEffect(() => {
    //   console.log("Input todo", todoInput);

    // }, [todoInput]);

    const handleSubmit = (e) => {
      if(todoInput === "") return;
      // setTodos([...todos, {id: todos.length + 1, text: todoInput}
      setTodos([ {
        id: Math.random() * 1000,
        text: todoInput,

      },...todos
      
      ]);
      setTodoInput("");
    }
  return (
    <div className='list-container'>
       {/* Todo form */}

        <div className="todo-input-form">
           <input type="text" placeholder="Add a todo..." onChange={handleInput} value={todoInput} />
           <button className="button" onClick={handleSubmit}>Add Todo</button>

        </div>


        {/* rendering the list */}
      {
        todos.map((todo) => {
            return <TodoListItem key={todo.id} id={todo.id} text={todo.text} deleteItem={deleteItem} />
        })
      }
    {/* <TodoListItem key={todos[0].id} text={todos[0].text} isCompleted={todos[0].isCompleted} />
    <TodoListItem key={todos[1].id} text={todos[1].text} isCompleted={todos[0].isCompleted} />
    <TodoListItem key={todos[2].id} text={todos[2].text} isCompleted={todos[0].isCompleted} />
    <TodoListItem key={todos[3].id} text={todos[3].text} isCompleted={todos[0].isCompleted} /> */}
    </div>
  )
}

export default TodoList;
