import {useContext, useRef, useState} from "react"
import {TodoListContext} from "./todo-list-context-provider"

export default function TodoList() {
    const todoListData = useContext(TodoListContext)
    const inputTitleRef = useRef()
    const inputIsDoneRef = useRef()

    console.log('>> TODO LIST DATA', todoListData)

    return <>

        <div className="mb-3">
            <label className="form-label">
                Todo Title
            </label>
            <input ref={inputTitleRef} type="text" className="form-control"/>
        </div>
        <div className="mb-3 form-check">
            <input ref={inputIsDoneRef} type="checkbox" className="form-check-input"/>
            <label className="form-check-label">Is Done?</label>
        </div>
        <button
            onClick={() => {
                //alert(inputTitleRef.current.value)
                //alert(inputIsDoneRef.current.checked)

                let newId = todoListData
                    .todos[todoListData.todos.length - 1]
                    .id + 1

                const newItemData = {
                    id: newId,
                    title: inputTitleRef.current.value,
                    is_done: inputIsDoneRef.current.checked
                }
                console.log(newItemData)

                const newTodos = [...todoListData.todos]
                newTodos.push(newItemData)

                todoListData.setTodos(newTodos)
            }}
            type="button"
            className="btn btn-primary"
        >
            Add New Item
        </button>

        <hr/>

        <table className="table table-hover">
            <thead>
            <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Done</th>
                <th>Action</th>
            </tr>

            </thead>

            <tbody>

            {todoListData.todos.map((item, index) => {
                return (<tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.is_done ? 'Yapıldı' : 'Yapılmadı'}</td>
                    <td>Action</td>
                </tr>)
            })}


            </tbody>
        </table>

    </>
}
