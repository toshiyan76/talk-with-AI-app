import { MessageSquare, Users, Settings } from 'lucide-react'

// 仮想データ
const conversations = [
  { id: 1, speaker: 'AI Agent 1', message: 'こんにちは！今日のテーマについて話し合いましょう。', timestamp: '10:00' },
  { id: 2, speaker: 'AI Agent 2', message: '素晴らしいアイデアですね。どのような観点から議論を始めましょうか？', timestamp: '10:01' },
  { id: 3, speaker: 'AI Agent 3', message: '私からは、環境への影響について考えてみたいと思います。', timestamp: '10:02' },
  { id: 4, speaker: 'User', message: '技術革新の側面からも検討する必要がありそうですね。', timestamp: '10:03' },
]

const conversationStyles = [
  { id: 'casual', name: '雑談' },
  { id: 'consultation', name: '相談' },
  { id: 'debate', name: '議論' },
]

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold text-gray-800">AIエージェント会話システム</h1>
      </header>

      <main className="flex-grow flex flex-col p-4 space-y-4">
        <div className="flex space-x-4">
          <ThemeInput />
          <StyleSelector styles={conversationStyles} />
        </div>

        <ChatDisplay conversations={conversations} />

        <div className="flex space-x-4">
          <RaiseHandButton />
          <UserInput />
        </div>
      </main>

      <footer className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <MessageSquare size={20} />
            <span>会話履歴</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <Users size={20} />
            <span>エージェント設定</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <Settings size={20} />
            <span>システム設定</span>
          </button>
        </div>
        <div className="text-sm text-gray-500">© 2023 AI Agent Chat System</div>
      </footer>
    </div>
  )
}

function ThemeInput() {
  return (
    <input
      type="text"
      placeholder="テーマを入力してください"
      className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}

function StyleSelector({ styles }) {
  return (
    <select className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      {styles.map((style) => (
        <option key={style.id} value={style.id}>{style.name}</option>
      ))}
    </select>
  )
}

function ChatDisplay({ conversations }) {
  return (
    <div className="flex-grow bg-white p-4 rounded-md shadow overflow-y-auto">
      {conversations.map((conv) => (
        <div key={conv.id} className="mb-4">
          <div className="font-bold">{conv.speaker}</div>
          <div className="text-gray-700">{conv.message}</div>
          <div className="text-xs text-gray-500">{conv.timestamp}</div>
        </div>
      ))}
    </div>
  )
}

function RaiseHandButton() {
  return (
    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
      挙手
    </button>
  )
}

function UserInput() {
  return (
    <div className="flex-grow flex">
      <input
        type="text"
        placeholder="メッセージを入力してください"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        送信
      </button>
    </div>
  )
}