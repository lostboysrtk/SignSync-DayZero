import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { AlphabetLearning } from "@/components/features/alphabet-learning"

export const metadata: Metadata = {
  title: "ASL Learning - SignSync",
  description: "Learn American Sign Language with interactive lessons",
}

export default function LearningPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="ASL Learning" text="Master American Sign Language with interactive lessons" />
      <AlphabetLearning />
    </DashboardShell>
  )
}

