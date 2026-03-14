"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  GitPullRequest,
  Settings,
  Zap,
  FolderKanban,
  History,
  Users,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, current: true },
  { name: "Pull Requests", icon: GitPullRequest, current: false },
  { name: "Projects", icon: FolderKanban, current: false },
  { name: "Activity", icon: History, current: false },
  { name: "Team", icon: Users, current: false },
  { name: "Settings", icon: Settings, current: false },
]

export function Sidebar() {
  return (
    <aside className="flex h-screen w-56 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold text-foreground">SprintSync</span>
      </div>
      
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              item.current
                ? "bg-sidebar-accent text-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </a>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
          <div className="flex-1 truncate">
            <p className="text-sm font-medium text-foreground">Alex Chen</p>
            <p className="text-xs text-muted-foreground">alex@team.io</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
