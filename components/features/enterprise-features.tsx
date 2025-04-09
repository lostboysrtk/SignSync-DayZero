"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, Clock, Download, FileText, MessageSquare, PieChart, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function EnterpriseFeatures() {
  const [selectedMeeting, setSelectedMeeting] = useState("weekly-standup")
  const [activeTab, setActiveTab] = useState("meeting-assistant")

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-slate-200 dark:border-slate-800">
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Enterprise Communication Features
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="meeting-assistant" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <TabsTrigger
                value="meeting-assistant"
                className={`py-2.5 ${activeTab === "meeting-assistant" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Meeting Assistant
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className={`py-2.5 ${activeTab === "analytics" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Analytics Dashboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="meeting-assistant" className="space-y-6">
              <div className="flex items-center space-x-4">
                <Select value={selectedMeeting} onValueChange={setSelectedMeeting}>
                  <SelectTrigger className="w-[250px] border-slate-200 dark:border-slate-700">
                    <SelectValue placeholder="Select meeting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly-standup">Weekly Standup (Today)</SelectItem>
                    <SelectItem value="product-review">Product Review (Yesterday)</SelectItem>
                    <SelectItem value="client-meeting">Client Meeting (3 days ago)</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="space-x-2 text-slate-700 dark:text-slate-300">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
              </div>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-medium text-lg text-slate-900 dark:text-white">Weekly Standup</h3>
                      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>April 7, 2025</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>10:00 AM - 10:30 AM</span>
                      </div>
                    </div>
                    <Badge className="bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 border-0">
                      Completed
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Participants (5)</h4>
                      <div className="flex -space-x-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-medium text-teal-600 dark:text-teal-400"
                          >
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Meeting Summary</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                        The team discussed progress on the SignSync project, including the completion of the hand
                        tracking module and the start of the translation engine development. John reported issues with
                        the WebRTC implementation that need to be addressed by Friday.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Action Items</h4>
                      <ul className="text-sm space-y-2">
                        {[
                          { person: "Sarah", task: "Fix WebRTC connection issues by Friday" },
                          { person: "Mike", task: "Complete the avatar animation prototype by Monday" },
                          { person: "Alex", task: "Schedule user testing session for next Wednesday" },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-md"
                          >
                            <div className="w-4 h-4 rounded-full border border-teal-600 dark:border-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                            </div>
                            <span>
                              <span className="font-medium text-slate-900 dark:text-white">{item.person}:</span>{" "}
                              {item.task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Emotional Tone Analysis
                      </h4>
                      <div className="grid grid-cols-4 gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                        {[
                          { name: "Excitement", value: 75 },
                          { name: "Urgency", value: 40 },
                          { name: "Concern", value: 25 },
                          { name: "Satisfaction", value: 60 },
                        ].map((emotion, index) => (
                          <div key={index} className="space-y-1">
                            <div className="text-xs text-center text-slate-600 dark:text-slate-400">{emotion.name}</div>
                            <Progress value={emotion.value} className="h-2 bg-slate-200 dark:bg-slate-700">
                              <div
                                className="h-full bg-teal-600 dark:bg-teal-400 rounded-full"
                                style={{ width: `${emotion.value}%` }}
                              />
                            </Progress>
                            <div className="text-xs text-center text-slate-500 dark:text-slate-400">
                              {emotion.value}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                  <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                    Full Transcript
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    {[
                      {
                        initial: "A",
                        name: "Alex (Team Lead)",
                        time: "10:02 AM",
                        message:
                          "Good morning everyone! Let's go through our progress updates for the SignSync project. Sarah, can you start with the WebRTC implementation?",
                      },
                      {
                        initial: "S",
                        name: "Sarah (Developer)",
                        time: "10:03 AM",
                        message:
                          "I've made progress on the video call integration, but we're having some connection issues with multiple participants. I'll need to fix those by Friday.",
                      },
                      {
                        initial: "M",
                        name: "Mike (Designer)",
                        time: "10:05 AM",
                        message:
                          "I'm working on the 3D avatar animations for the text-to-sign feature. I should have a prototype ready by Monday for everyone to review.",
                      },
                      {
                        initial: "J",
                        name: "John (ML Engineer)",
                        time: "10:08 AM",
                        message:
                          "The hand tracking module is working well now. We're getting 95% accuracy in controlled environments and about 85% in variable lighting conditions.",
                      },
                    ].map((message, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-xs font-medium text-teal-600 dark:text-teal-400 flex-shrink-0">
                          {message.initial}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-slate-900 dark:text-white">{message.name}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">{message.time}</span>
                          </div>
                          <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Communication Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="h-[300px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-md">
                      <BarChart3 className="h-16 w-16 text-slate-300 dark:text-slate-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Participation Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div className="h-[150px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-md">
                      <PieChart className="h-12 w-12 text-slate-300 dark:text-slate-600" />
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: "Alex", percentage: 35, color: "bg-teal-600 dark:bg-teal-400" },
                        { name: "Sarah", percentage: 25, color: "bg-blue-500 dark:bg-blue-400" },
                        { name: "Mike", percentage: 20, color: "bg-green-500 dark:bg-green-400" },
                        { name: "John", percentage: 15, color: "bg-orange-500 dark:bg-orange-400" },
                        { name: "Lisa", percentage: 5, color: "bg-purple-500 dark:bg-purple-400" },
                      ].map((participant, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${participant.color}`}></div>
                            <span className="text-sm text-slate-700 dark:text-slate-300">{participant.name}</span>
                          </div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">{participant.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Conversation Heatmap
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="h-[200px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-md">
                      <MessageSquare className="h-12 w-12 text-slate-300 dark:text-slate-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Follow-up Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {[
                      {
                        icon: FileText,
                        title: "WebRTC Implementation Review",
                        date: "April 10, 2025",
                        priority: "High Priority",
                      },
                      {
                        icon: Users,
                        title: "User Testing Session",
                        date: "April 14, 2025",
                        priority: "Medium Priority",
                      },
                      {
                        icon: Calendar,
                        title: "Monthly Progress Report",
                        date: "April 30, 2025",
                        priority: "Low Priority",
                      },
                    ].map((reminder, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-md border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                            <reminder.icon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white">{reminder.title}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Due: {reminder.date}</p>
                          </div>
                        </div>
                        <Badge
                          variant={reminder.priority.includes("High") ? "default" : "outline"}
                          className={
                            reminder.priority.includes("High")
                              ? "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 border-0"
                              : ""
                          }
                        >
                          {reminder.priority}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

