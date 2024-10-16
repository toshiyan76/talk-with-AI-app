import HistoryList from './HistoryList'
import ConversationDetail from './ConversationDetail'

// 仮のデータ
const conversations = [
  {
    id: 1,
    theme: '人工知能の倫理',
    participants: ['ユーザー', 'AI-1', 'AI-2', 'AI-3'],
    date: '2023-06-01',
    time: '14:30',
  },
  {
    id: 2,
    theme: '宇宙開発の未来',
    participants: ['ユーザー', 'AI-1', 'AI-2', 'AI-3'],
    date: '2023-05-28',
    time: '10:15',
  },
  {
    id: 3,
    theme: '持続可能なエネルギー',
    participants: ['ユーザー', 'AI-1', 'AI-2', 'AI-3'],
    date: '2023-05-25',
    time: '16:45',
  },
]

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">会話履歴</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <HistoryList conversations={conversations} />
        </div>
        <div className="md:col-span-2">
          <ConversationDetail conversation={conversations[0]} />
        </div>
      </div>
    </div>
  )
}