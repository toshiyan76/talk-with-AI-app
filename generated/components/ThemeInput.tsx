'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'

type ThemeInputProps = {
  onSubmit: (theme: string) => void
}

export default function ThemeInput({ onSubmit }: ThemeInputProps) {
  const [theme, setTheme] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateTheme(theme)) {
      onSubmit(theme)
      setTheme('')
      setError('')
    }
  }

  const validateTheme = (input: string): boolean => {
    if (input.trim().length === 0) {
      setError('テーマを入力してください')
      return false
    }
    if (input.length > 100) {
      setError('テーマは100文字以内で入力してください')
      return false
    }
    return true
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="flex items-center">
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="会話のテーマを入力してください"
            className="flex-grow px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send size={20} />
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </form>
    </div>
  )
}