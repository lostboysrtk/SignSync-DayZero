"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignRecognition } from "@/components/features/sign-recognition"
import { TranslationEngine } from "@/components/features/translation-engine"
import { VideoCallIntegration } from "@/components/features/video-call-integration"
import { LearningSystem } from "@/components/features/learning-system"
import { EnterpriseFeatures } from "@/components/features/enterprise-features"

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("recognition")

  return (
    <Tabs defaultValue="recognition" className="mt-6" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <TabsTrigger
          value="recognition"
          className={`py-2.5 ${activeTab === "recognition" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
        >
          Recognition
        </TabsTrigger>
        <TabsTrigger
          value="translation"
          className={`py-2.5 ${activeTab === "translation" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
        >
          Translation
        </TabsTrigger>
        <TabsTrigger
          value="video-call"
          className={`py-2.5 ${activeTab === "video-call" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
        >
          Video Call
        </TabsTrigger>
        <TabsTrigger
          value="learning"
          className={`py-2.5 ${activeTab === "learning" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
        >
          Learning
        </TabsTrigger>
        <TabsTrigger
          value="enterprise"
          className={`py-2.5 ${activeTab === "enterprise" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
        >
          Enterprise
        </TabsTrigger>
      </TabsList>

      <TabsContent value="recognition" className="mt-6">
        <SignRecognition />
      </TabsContent>

      <TabsContent value="translation" className="mt-6">
        <TranslationEngine />
      </TabsContent>

      <TabsContent value="video-call" className="mt-6">
        <VideoCallIntegration />
      </TabsContent>

      <TabsContent value="learning" className="mt-6">
        <LearningSystem />
      </TabsContent>

      <TabsContent value="enterprise" className="mt-6">
        <EnterpriseFeatures />
      </TabsContent>
    </Tabs>
  )
}

