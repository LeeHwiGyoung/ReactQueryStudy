import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ToDoList from "./components/ToDoList";

const queryClient = new QueryClient(); //QueryClient 인스턴스 생성

function App() {
  return (
    
    <QueryClientProvider client={queryClient}> 
    {/* QueryClientProvider를 이용하여 App 컴포넌트와 하위 컴포넌트에서 ReactQuery 훅을 사용할 수 있게 설정 */}
    <ToDoList/>
    </QueryClientProvider>
  )
}

export default App;
