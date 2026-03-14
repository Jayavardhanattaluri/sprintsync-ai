import { Sidebar } from "@/components/sidebar";
import { TicketView } from "@/components/ticket-view";
import { CodeEditor } from "@/components/code-editor";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      {/* Dark Mode Sidebar */}
      <Sidebar />

      {/* Main Content - Split Pane */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Pane - Jira Ticket View */}
        <div className="w-1/2 min-w-[400px]">
          <TicketView />
        </div>

        {/* Right Pane - Code Editor View */}
        <div className="flex-1">
          <CodeEditor />
        </div>
      </main>
    </div>
  );
}
