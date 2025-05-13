const API_URL = 'http://localhost:5000'

export const fetchToDo = async() => {
    const response = await fetch(`${API_URL}/toDo`);
    if(!response.ok){
        throw new Error('투두 리스트를 불러오는데 실패하였습니다.')
    }
    const data = await response.json();
    console.log('data', data.toDoList)
    return data.toDoList;
}

export const addToDo = async(newTodo : {toDo : string , isDone : boolean}) => {
    const response = await fetch(`${API_URL}/toDo`, {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(newTodo) 
    })
    if(!response.ok){
        throw new Error('할 일을 추가하는데 실패했습니다.')
    }
    return response.json();
} 

export const deleteTodo = async (todoId : number) => {
    const response = await fetch(`${API_URL}/toDo?id=${todoId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`TodoId:  ${todoId}를 제거하는데 실패했습니다. `);
    }
    return response.text();
};