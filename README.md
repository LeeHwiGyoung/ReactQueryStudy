# React Query 를 연습하는 Repo

Day1 : ReactQuery의 Doc를 통하여 QuickStart와 유사한 ToDoList 연습
  - App.tsx : queryClient 인스턴스를 생성하고 QueryClientProvider 설정
  - hooks/useToDo hooks : 
    - useQueryClient() 훅을 통해 queryClient 에 접근
    - toDoQuery :  useQuery 훅을 통해 쿼리 키가 ['todo']인 쿼리 결과와 상태를 제공하는 객체
    - addTodoMutation : useMutation 훅을 호출하여 mutate 함수를 통해 addToDo함수를 실행시키는 뮤테이션 객체
    - deleteTodoMutation : useMutation 훅을 호출하여 mutate 함수를 통해 deleteTodo 실행시키는 뮤테이션 객체
  - api/toDo : reactQuery에서 mutationFn과 queryFn으로 사용되는 함수 구현
  - components/ToDoList

정리한 블로그 : https://hwigaeng.tistory.com/28

Day2 : Query , QueryKey , QueryFunction , QueryOptions에 대한 정리
정리한 블로그 : https://hwigaeng.tistory.com/29
