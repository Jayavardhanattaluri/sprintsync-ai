"use client";

import { Button } from "@/components/ui/button";
import { GitMerge, X, FileCode, GitBranch } from "lucide-react";

const mockCodeLines = [
  { lineNum: 1, content: "import { OAuth2Client } from 'google-auth-library';", type: "normal" },
  { lineNum: 2, content: "import { Octokit } from '@octokit/rest';", type: "normal" },
  { lineNum: 3, content: "", type: "normal" },
  { lineNum: 4, content: "export class AuthService {", type: "normal" },
  { lineNum: 5, content: "  private googleClient: OAuth2Client;", type: "added" },
  { lineNum: 6, content: "  private githubClient: Octokit;", type: "added" },
  { lineNum: 7, content: "", type: "normal" },
  { lineNum: 8, content: "  constructor() {", type: "normal" },
  { lineNum: 9, content: "    this.googleClient = new OAuth2Client({", type: "added" },
  { lineNum: 10, content: "      clientId: process.env.GOOGLE_CLIENT_ID,", type: "added" },
  { lineNum: 11, content: "      clientSecret: process.env.GOOGLE_CLIENT_SECRET,", type: "added" },
  { lineNum: 12, content: "    });", type: "added" },
  { lineNum: 13, content: "", type: "normal" },
  { lineNum: 14, content: "    this.githubClient = new Octokit({", type: "added" },
  { lineNum: 15, content: "      auth: process.env.GITHUB_TOKEN,", type: "added" },
  { lineNum: 16, content: "    });", type: "added" },
  { lineNum: 17, content: "  }", type: "normal" },
  { lineNum: 18, content: "", type: "normal" },
  { lineNum: 19, content: "  async authenticateWithGoogle(code: string) {", type: "added" },
  { lineNum: 20, content: "    const { tokens } = await this.googleClient.getToken(code);", type: "added" },
  { lineNum: 21, content: "    return this.createSession(tokens);", type: "added" },
  { lineNum: 22, content: "  }", type: "added" },
  { lineNum: 23, content: "", type: "normal" },
  { lineNum: 24, content: "  async authenticateWithGitHub(code: string) {", type: "added" },
  { lineNum: 25, content: "    // GitHub OAuth implementation", type: "added" },
  { lineNum: 26, content: "    const response = await fetch('https://github.com/login/oauth/access_token', {", type: "added" },
  { lineNum: 27, content: "      method: 'POST',", type: "added" },
  { lineNum: 28, content: "      headers: { 'Content-Type': 'application/json' },", type: "added" },
  { lineNum: 29, content: "      body: JSON.stringify({ code }),", type: "added" },
  { lineNum: 30, content: "    });", type: "added" },
  { lineNum: 31, content: "    return this.createSession(await response.json());", type: "added" },
  { lineNum: 32, content: "  }", type: "added" },
  { lineNum: 33, content: "}", type: "normal" },
];

export function CodeEditor() {
  return (
    <div className="flex h-full flex-col bg-editor">
      {/* Editor Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-editor-foreground">
            auth-service.ts
          </span>
          <span className="text-xs text-muted-foreground">+18 lines</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GitBranch className="h-4 w-4" />
          <span className="font-mono">feature/oauth-integration</span>
        </div>
      </div>

      {/* Code View */}
      <div className="flex-1 overflow-auto">
        <div className="min-w-max font-mono text-sm">
          {mockCodeLines.map((line) => (
            <div
              key={line.lineNum}
              className={`flex ${
                line.type === "added"
                  ? "bg-emerald-500/10"
                  : "bg-transparent"
              }`}
            >
              <span className="w-12 shrink-0 select-none px-3 py-0.5 text-right text-muted-foreground/50">
                {line.lineNum}
              </span>
              <span
                className={`w-6 shrink-0 select-none py-0.5 text-center ${
                  line.type === "added" ? "text-emerald-500" : ""
                }`}
              >
                {line.type === "added" ? "+" : ""}
              </span>
              <pre className="flex-1 py-0.5 pr-4 text-editor-foreground">
                {line.content || " "}
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 border-t border-border px-6 py-4">
        <Button variant="outline" className="gap-2">
          <X className="h-4 w-4" />
          Discard
        </Button>
        <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
          <GitMerge className="h-4 w-4" />
          Approve & Merge
        </Button>
      </div>
    </div>
  );
}
