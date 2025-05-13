import {useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToDo, deleteTodo, fetchToDo } from '../api/toDo';
const useToDo = () =>  {
    // 가장 가까운 queryClient 인스턴스에 접근하는 hook provider에 설정한 queryClient 인스턴스에 접근
    const queryClient = useQueryClient();  
    
    const toDoQuery = useQuery({
        queryKey : ['todo'], //쿼리를 식별할 고유한 쿼리 키
        queryFn : fetchToDo, // 실제로 실행되어 데이터를 가지고 올 함수
    })

    const addTodoMutation = useMutation({
        mutationFn : addToDo,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey : ['todo']});
        }
    })

    const deleteTodoMutation = useMutation({
        mutationFn : deleteTodo,
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ['todo']})
        }
    })

    return {
        toDoQuery, addTodoMutation , deleteTodoMutation
    }
}

export default useToDo;