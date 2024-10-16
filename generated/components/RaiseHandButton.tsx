'use client'

import React, { useState, useCallback } from 'react'
import { Hand } from 'lucide-react'
import { useChat } from '../hooks/useChat'

const RaiseHandButton: React.FC = () => {
  const [isRaised, setIsRaised] = useState(false)
  const { notifyHandRaised } = useChat()

  const toggleHand = useCallback(() => {
    const newState = !isRaised
    setIsRaised(newState)
    notifyHandRaised(newState)
  }, [isRaised, notifyHandRaised])

  return (
    <button
      onClick={toggleHand}
      className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
        isRaised
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
      aria-label={isRaised ? '挙手を下ろす' : '挙手する'}
      title={isRaised ? '挙手を下ろす' : '挙手する'}
    >
      <Hand
        size={24}
        className={`transform transition-transform duration-300 ${
          isRaised ? 'rotate-0' : '-rotate-45'
        }`}
      />
    </button>
  )
}

export default RaiseHandButton