"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, Circle, Clock, User } from "lucide-react";

const mockTicket = {
  id: "SPRINT-1234",
  title: "Implement user authentication flow with OAuth 2.0",
  status: "In Progress",
  priority: "High",
  assignee: "John Doe",
  sprint: "Sprint 24",
  storyPoints: 5,
  description: `As a user, I want to be able to log in using my Google or GitHub account so that I can access the application without creating a separate account.

This feature should integrate with our existing authentication system and properly handle token refresh and session management.`,
  acceptanceCriteria: [
    { id: 1, text: "User can click 'Sign in with Google' button on login page", completed: true },
    { id: 2, text: "User can click 'Sign in with GitHub' button on login page", completed: true },
    { id: 3, text: "OAuth flow redirects to provider and back to app", completed: true },
    { id: 4, text: "User session is created after successful authentication", completed: false },
    { id: 5, text: "Refresh tokens are stored securely and used to maintain session", completed: false },
    { id: 6, text: "Error handling displays appropriate messages for failed auth", completed: false },
  ],
};

export function TicketView() {
  const completedCriteria = mockTicket.acceptanceCriteria.filter((c) => c.completed).length;
  const totalCriteria = mockTicket.acceptanceCriteria.length;

  return (
    <div className="flex h-full flex-col bg-card border-r border-border">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-muted-foreground">{mockTicket.id}</span>
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
            {mockTicket.priority}
          </Badge>
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            {mockTicket.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{mockTicket.sprint}</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-xl font-semibold text-card-foreground leading-tight text-balance">
              {mockTicket.title}
            </h1>
            <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{mockTicket.assignee}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{mockTicket.storyPoints}</span>
                <span>points</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Description
            </h2>
            <p className="text-sm text-card-foreground leading-relaxed whitespace-pre-line">
              {mockTicket.description}
            </p>
          </div>

          <Separator />

          {/* Acceptance Criteria */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Acceptance Criteria
              </h2>
              <span className="text-sm text-muted-foreground">
                {completedCriteria}/{totalCriteria} completed
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${(completedCriteria / totalCriteria) * 100}%` }}
              />
            </div>

            <ul className="space-y-3">
              {mockTicket.acceptanceCriteria.map((criteria) => (
                <li
                  key={criteria.id}
                  className="flex items-start gap-3 text-sm"
                >
                  {criteria.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                  <span
                    className={
                      criteria.completed
                        ? "text-muted-foreground line-through"
                        : "text-card-foreground"
                    }
                  >
                    {criteria.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
