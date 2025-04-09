import type React from "react"
interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-wide text-slate-900 dark:text-slate-50">{heading}</h1>
        {text && <p className="text-slate-500 dark:text-slate-400">{text}</p>}
      </div>
      {children}
    </div>
  )
}

