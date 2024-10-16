'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { User, Bot, UserCircle2 } from 'lucide-react';

type Message = {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
};

type Agent = {
  id: string;
  name: string;
  avatar: string;
};

type ChatDisplayProps = {
  messages: Message[];
  agents: Agent[];
};

const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages, agents }) => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getAgentAvatar = (senderId: string) => {
    const agent = agents.find(a => a.id === senderId);
    return agent ? (
      <Image
        src={agent.avatar}
        alt={agent.name}
        width={40}
        height={40}
        className="rounded-full"
      />
    ) : (
      <UserCircle2 size={40} className="text-gray-400" />
    );
  };

  const getMessageSender = (senderId: string) => {
    const agent = agents.find(a => a.id === senderId);
    return agent ? agent.name : 'ユーザー';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-[600px] overflow-y-auto">
      {messages.map((message) => (
        <div key={message.id} className="mb-4 flex items-start">
          <div className="mr-3">
            {message.sender === 'user' ? (
              <User size={40} className="text-blue-500" />
            ) : (
              getAgentAvatar(message.sender)
            )}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm text-gray-700">
              {message.sender === 'user' ? 'ユーザー' : getMessageSender(message.sender)}
            </p>
            <div className="bg-gray-100 rounded-lg p-3 mt-1">
              <p className="text-gray-800">{message.content}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
          </div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatDisplay;
import ChatDisplay from '../components/ChatDisplay';

// ... (メッセージとエージェントデータの取得ロジック)

return <ChatDisplay messages={messages} agents={agents} />;