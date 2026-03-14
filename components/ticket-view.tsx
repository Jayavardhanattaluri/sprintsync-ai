"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, ExternalLink, User } from "lucide-react"

export function TicketView() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <Badge variant="info">SPRINT-142</Badge>
          <Badge variant="warning">In Progress</Badge>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="mb-4 text-xl font-semibold text-foreground">
          Implement user authentication flow with OAuth2
        </h1>

        <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>Assigned to Alex Chen</span>
          </div>
          <span>Priority: High</span>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Description
            </h2>
            <div className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-foreground">
              <p className="mb-3">
                We need to implement a complete OAuth2 authentication flow that supports
                multiple providers including Google, GitHub, and Microsoft. The implementation
                should follow security best practices and integrate with our existing user
                management system.
              </p>
              <p>
                The flow should include proper token refresh handling, secure storage of
                credentials, and graceful error handling for network failures or invalid tokens.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Acceptance Criteria
            </h2>
            <div className="space-y-2">
              {[
                { text: "User can sign in with Google OAuth2", done: true },
                { text: "User can sign in with GitHub OAuth2", done: true },
                { text: "User can sign in with Microsoft OAuth2", done: false },
                { text: "Token refresh happens automatically before expiry", done: false },
                { text: "Failed auth attempts show appropriate error messages", done: false },
                { text: "Session persists across browser restarts", done: false },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 text-sm"
                >
                  {item.done ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className={item.done ? "text-muted-foreground line-through" : "text-foreground"}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Related Links
            </h2>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                <ExternalLink className="h-4 w-4" />
                OAuth2 Provider Documentation
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                <ExternalLink className="h-4 w-4" />
                Security Requirements Spec
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
