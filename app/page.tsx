import TodoApp from '../components/TodoApp'

export default function Home() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <TodoApp />
      </div>
    </main>
  )
}