import { Todo } from './TodoApp'

interface TodoStatsProps {
  todos: Todo[]
  onClearCompleted: () => void
}

export default function TodoStats({ todos, onClearCompleted }: TodoStatsProps) {
  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length
  const pendingTodos = totalTodos - completedTodos

  if (totalTodos === 0) {
    return null
  }

  return (
    <div className="bg-gray-100 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-6 text-sm">
          <span className="text-gray-600">
            Total: <span className="font-semibold text-gray-800">{totalTodos}</span>
          </span>
          <span className="text-gray-600">
            Pending: <span className="font-semibold text-blue-600">{pendingTodos}</span>
          </span>
          <span className="text-gray-600">
            Completed: <span className="font-semibold text-green-600">{completedTodos}</span>
          </span>
        </div>
        
        {completedTodos > 0 && (
          <button
            onClick={onClearCompleted}
            className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
          >
            Clear Completed
          </button>
        )}
      </div>
      
      {totalTodos > 0 && (
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(completedTodos / totalTodos) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  )
}