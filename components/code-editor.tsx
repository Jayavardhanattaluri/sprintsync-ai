"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, FileCode, GitBranch } from "lucide-react"

export function CodeEditor() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-editor">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">auth/oauth2-handler.ts</span>
          <Badge variant="success">+142 -23</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GitBranch className="h-4 w-4" />
          <span>feature/oauth2-auth</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="h-full w-full bg-[#0d0d0d] p-4 font-mono text-sm">
          <div className="space-y-1 text-muted-foreground">
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">1</span>
              <span className="text-blue-400">import</span>
              <span className="text-foreground"> {"{"} OAuth2Client {"}"} </span>
              <span className="text-blue-400">from</span>
              <span className="text-emerald-400"> &apos;@auth/oauth2&apos;</span>
              <span className="text-foreground">;</span>
            </div>
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">2</span>
              <span className="text-blue-400">import</span>
              <span className="text-foreground"> {"{"} TokenStore {"}"} </span>
              <span className="text-blue-400">from</span>
              <span className="text-emerald-400"> &apos;./token-store&apos;</span>
              <span className="text-foreground">;</span>
            </div>
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">3</span>
            </div>
            <div className="flex bg-emerald-500/10 -mx-4 px-4">
              <span className="mr-4 w-8 text-right text-emerald-500">4</span>
              <span className="text-blue-400">export</span>
              <span className="text-purple-400"> async function </span>
              <span className="text-amber-400">handleOAuth2Callback</span>
              <span className="text-foreground">(</span>
            </div>
            <div className="flex bg-emerald-500/10 -mx-4 px-4">
              <span className="mr-4 w-8 text-right text-emerald-500">5</span>
              <span className="text-foreground">  provider: </span>
              <span className="text-amber-400">string</span>
              <span className="text-foreground">,</span>
            </div>
            <div className="flex bg-emerald-500/10 -mx-4 px-4">
              <span className="mr-4 w-8 text-right text-emerald-500">6</span>
              <span className="text-foreground">  code: </span>
              <span className="text-amber-400">string</span>
            </div>
            <div className="flex bg-emerald-500/10 -mx-4 px-4">
              <span className="mr-4 w-8 text-right text-emerald-500">7</span>
              <span className="text-foreground">) {"{"}</span>
            </div>
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">8</span>
              <span className="text-blue-400">  const</span>
              <span className="text-foreground"> client = </span>
              <span className="text-blue-400">new</span>
              <span className="text-amber-400"> OAuth2Client</span>
              <span className="text-foreground">(provider);</span>
            </div>
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">9</span>
            </div>
            <div className="flex bg-emerald-500/10 -mx-4 px-4">
              <span className="mr-4 w-8 text-right text-emerald-500">10</span>
              <span className="text-blue-400">  const</span>
              <span className="text-foreground"> tokens = </span>
              <span className="text-blue-400">await</span>
              <span className="text-foreground"> client.</span>
              <span className="text-amber-400">exchangeCode</span>
              <span className="text-foreground">(code);</span>
            </div>
            <div className="flex bg-emerald-500/10 -mx-4 px-4">
              <span className="mr-4 w-8 text-right text-emerald-500">11</span>
              <span className="text-blue-400">  await</span>
              <span className="text-foreground"> TokenStore.</span>
              <span className="text-amber-400">save</span>
              <span className="text-foreground">(tokens);</span>
            </div>
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">12</span>
            </div>
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">13</span>
              <span className="text-blue-400">  return</span>
              <span className="text-foreground"> tokens;</span>
            </div>
            <div className="flex">
              <span className="mr-4 w-8 text-right text-muted-foreground/50">14</span>
              <span className="text-foreground">{"}"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border bg-card px-4 py-3">
        <div className="text-sm text-muted-foreground">
          AI-generated code based on ticket requirements
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <X className="h-4 w-4" />
            Discard
          </Button>
          <Button className="gap-2 bg-emerald-600 text-white hover:bg-emerald-700">
            <Check className="h-4 w-4" />
            Approve & Merge
          </Button>
        </div>
      </div>
    </div>
  )
}
