
import { TodoList } from "./components/todo-list";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <TodoList />
      </div>
    </div>
  );
}

export default App;