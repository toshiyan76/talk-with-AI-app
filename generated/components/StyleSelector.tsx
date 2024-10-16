'use client'

import React, { useState } from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import { Send } from 'lucide-react'

type ConversationStyle = '雑談' | '相談' | '議論'

const StyleSelector: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<ConversationStyle>('雑談')

  const handleStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStyle(event.target.value as ConversationStyle)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/conversation-style', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ style: selectedStyle }),
      })

      if (!response.ok) {
        throw new Error('スタイルの送信に失敗しました')
      }

      console.log('会話スタイルが正常に送信されました:', selectedStyle)
    } catch (error) {
      console.error('エラー:', error)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <FormControl component="fieldset">
        <FormLabel component="legend" className="text-lg font-semibold mb-4">
          会話スタイルを選択してください
        </FormLabel>
        <RadioGroup
          aria-label="conversation-style"
          name="conversation-style"
          value={selectedStyle}
          onChange={handleStyleChange}
          className="mb-4"
        >
          <FormControlLabel value="雑談" control={<Radio />} label="雑談" />
          <FormControlLabel value="相談" control={<Radio />} label="相談" />
          <FormControlLabel value="議論" control={<Radio />} label="議論" />
        </RadioGroup>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <Send className="mr-2" size={18} />
          スタイルを適用
        </button>
      </FormControl>
    </div>
  )
}

export default StyleSelector