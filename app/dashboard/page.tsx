import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardTabs } from "@/components/dashboard/tabs"

export const metadata: Metadata = {
  title: "SignSync Dashboard",
  description: "Real-time sign language recognition and translation platform",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="SignSync Dashboard" text="Access all SignSync features in one place" />
      <DashboardTabs />
    </DashboardShell>
  )
}

