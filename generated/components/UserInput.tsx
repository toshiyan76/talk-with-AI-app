'use client'

import React, { useState, useCallback } from 'react'
import { Send } from 'lucide-react'

interface UserInputProps {
  onSendMessage: (message: string) => void
}

const UserInput: React.FC<UserInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
    setIsTyping(e.target.value.length > 0)
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
      setIsTyping(false)
    }
  }, [message, onSendMessage])

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="メッセージを入力してください..."
          className="flex-grow px-4 py-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          <Send size={20} />
        </button>
      </form>
      {isTyping && (
        <div className="mt-2 text-sm text-gray-500">
          入力中...
        </div>
      )}
    </div>
  )
}

export default UserInput