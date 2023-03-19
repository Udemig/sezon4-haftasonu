import {createContext, useState} from "react"

export const TodoListContext = createContext({})

export default function TodoListContextProvider(props) {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Erken uyan",
            is_done: false
        },
        {
            id: 2,
            title: "Kıyafetlerini giy",
            is_done: false
        },
        {
            id: 3,
            title: "Kahvaltı hazırla",
            is_done: false
        },
        {
            id: 4,
            title: "Çay demle",
            is_done: false
        },
    ])

    const todoListValue = {todos, setTodos}
    /**
     {
        todos: todos,
        setTodos: setTodos
    }
     */

    return <TodoListContext.Provider value={todoListValue}>
        {props.children}
    </TodoListContext.Provider>
}
