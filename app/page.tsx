import { Sidebar } from "@/components/sidebar"
import { TicketView } from "@/components/ticket-view"
import { CodeEditor } from "@/components/code-editor"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-border bg-card">
          <TicketView />
        </div>
        
        <div className="w-1/2">
          <CodeEditor />
        </div>
      </main>
    </div>
  )
}
