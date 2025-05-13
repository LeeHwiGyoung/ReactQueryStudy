import { useState } from "react";
import useToDo from "../hooks/useToDo"

export default function ToDoList() {
  const [newTodo , setNewTodo] = useState<string>("");
  const { toDoQuery , addTodoMutation , deleteTodoMutation } = useToDo();

  const {data : toDo , isLoading , isError , error} = toDoQuery;
  const {mutate : addToDo } = addTodoMutation;
  const {mutate : deleteToDoItem } = deleteTodoMutation;

  const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value)
  }
  
  const handleDeleteToDo = (toDoId : number) => {
    deleteToDoItem(toDoId);
  }

  const handleAddToDo = (newToDo : string) => {
    addToDo({toDo : newToDo , isDone : false})
    setNewTodo("");
  }
  

  if(isLoading) {
    return <p>loading</p>
  }

  if(isError) {
    return <p>Error : {error.message}</p>
  }

  return (
    <>
      <h1>TodoList</h1>
      <label htmlFor="toDo">Todo</label>
      <input placeholder='write your to do' id="toDo" name="toDo" value={newTodo} onChange={handleOnChange}/>
      <button onClick={() => handleAddToDo(newTodo)}>
          Add ToDo
      </button>
      <ul>
        {toDo?.map((toDoItem : {toDo : string , isDone : boolean , id: number}) => <li key={toDoItem.id}><p>{toDoItem.toDo}</p> <p>상태 : {toDoItem.isDone ? '완료' : '해야 할 일'}</p> <button onClick={()=> handleDeleteToDo(toDoItem.id)}> 삭제</button></li>)}
      </ul>
    </>
  )
}
