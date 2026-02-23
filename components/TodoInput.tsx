'use client'

import { useState, KeyboardEvent } from 'react'

interface TodoInputProps {
  onAdd: (text: string) => void
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [input, setInput] = useState<string>('')

  const handleSubmit = () => {
    onAdd(input)
    setInput('')
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        />
        <button
          onClick={handleSubmit}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Add
        </button>
      </div>
    </div>
  )
}