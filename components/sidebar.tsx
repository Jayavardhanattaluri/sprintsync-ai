"use client";

import {
  LayoutDashboard,
  Ticket,
  GitBranch,
  Settings,
  Users,
  BarChart3,
  FolderKanban,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Ticket, label: "Tickets", active: true },
  { icon: GitBranch, label: "Branches", active: false },
  { icon: FolderKanban, label: "Sprints", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
];

const bottomNavItems = [
  { icon: Users, label: "Team", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-60 flex-col bg-sidebar border-r border-border">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Zap className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-sidebar-foreground">
          SprintSync
        </span>
      </div>

      <Separator />

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-sidebar-accent text-sidebar-foreground"
                    : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <Separator />

      {/* Bottom Navigation */}
      <nav className="px-3 py-4">
        <ul className="space-y-1">
          {bottomNavItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-sidebar-accent text-sidebar-foreground"
                    : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Section */}
      <div className="border-t border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs font-medium text-secondary-foreground">
              JD
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              John Doe
            </p>
            <p className="text-xs text-sidebar-muted truncate">Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
