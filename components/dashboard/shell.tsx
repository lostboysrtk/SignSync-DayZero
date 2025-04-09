import type React from "react"
import { DashboardTopNav } from "@/components/dashboard/top-nav"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <DashboardTopNav />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl space-y-6">{children}</div>
      </main>
    </div>
  )
}

