import AgentSettings from './AgentSettings'
import StyleCustomizer from './StyleCustomizer'
import UserProfile from './UserProfile'

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">設定</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AIエージェント設定</h2>
        <AgentSettings />
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">会話スタイルカスタマイズ</h2>
        <StyleCustomizer />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">ユーザープロフィール</h2>
        <UserProfile />
      </section>
    </div>
  )
}