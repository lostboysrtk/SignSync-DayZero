"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  BookOpen,
  Calendar,
  Camera,
  ChevronRight,
  Flame,
  GraduationCap,
  LayoutGrid,
  Play,
  Star,
  Trophy,
  MessageSquare,
} from "lucide-react"

export function LearningSystem() {
  const [currentStreak, setCurrentStreak] = useState(7)
  const [totalXP, setTotalXP] = useState(1250)
  const [completedLessons, setCompletedLessons] = useState(24)
  const [totalLessons, setTotalLessons] = useState(50)
  const [activeTab, setActiveTab] = useState("lessons")

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-slate-200 dark:border-slate-800">
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Adaptive Learning System
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="lessons" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <TabsTrigger
                value="lessons"
                className={`py-2.5 ${activeTab === "lessons" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Lessons
              </TabsTrigger>
              <TabsTrigger
                value="practice"
                className={`py-2.5 ${activeTab === "practice" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Practice
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className={`py-2.5 ${activeTab === "achievements" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Achievements
              </TabsTrigger>
              <TabsTrigger
                value="progress"
                className={`py-2.5 ${activeTab === "progress" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Progress
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lessons" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-900/20">
                      <CardContent className="p-4 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-2">
                          <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Basics</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">100% Complete</p>
                        <Progress value={100} className="h-1 mt-2 bg-teal-200 dark:bg-teal-900">
                          <div className="h-full bg-teal-600 dark:bg-teal-400 rounded-full" />
                        </Progress>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200 dark:border-slate-800">
                      <CardContent className="p-4 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2">
                          <BookOpen className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        </div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Phrases</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">65% Complete</p>
                        <Progress value={65} className="h-1 mt-2 bg-slate-200 dark:bg-slate-700">
                          <div className="h-full bg-teal-600 dark:bg-teal-400 rounded-full" />
                        </Progress>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200 dark:border-slate-800">
                      <CardContent className="p-4 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2">
                          <LayoutGrid className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        </div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Grammar</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">30% Complete</p>
                        <Progress value={30} className="h-1 mt-2 bg-slate-200 dark:bg-slate-700">
                          <div className="h-full bg-teal-600 dark:bg-teal-400 rounded-full" />
                        </Progress>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                      <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                        Recommended Lessons
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        {[
                          {
                            icon: BookOpen,
                            title: "Common Greetings",
                            description: "Learn everyday greeting signs",
                          },
                          {
                            icon: LayoutGrid,
                            title: "ASL Sentence Structure",
                            description: "Master ASL grammar rules",
                          },
                          {
                            icon: Calendar,
                            title: "Time Expressions",
                            description: "Learn to sign dates and times",
                          },
                        ].map((lesson, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                <lesson.icon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-900 dark:text-white text-sm">{lesson.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{lesson.description}</p>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-slate-400" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Flame className="h-5 w-5 text-orange-500" />
                          <h3 className="font-medium text-slate-900 dark:text-white">Daily Streak</h3>
                        </div>
                        <Badge variant="outline" className="text-orange-500 border-orange-500">
                          {currentStreak} days
                        </Badge>
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <div
                            key={i}
                            className={`aspect-square rounded-md flex items-center justify-center ${
                              i < currentStreak % 7
                                ? "bg-orange-100 dark:bg-orange-900/30 text-orange-500"
                                : "bg-slate-100 dark:bg-slate-800"
                            }`}
                          >
                            {i < currentStreak % 7 && <Flame className="h-4 w-4" />}
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        <Play className="h-4 w-4 mr-2" />
                        Start Today's Lesson
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4 space-y-4">
                      <h3 className="font-medium text-slate-900 dark:text-white">Your Stats</h3>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 dark:text-slate-400">Total XP</span>
                          <span className="font-medium text-slate-900 dark:text-white">{totalXP}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 dark:text-slate-400">Lessons Completed</span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {completedLessons}/{totalLessons}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 dark:text-slate-400">Overall Progress</span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {Math.round((completedLessons / totalLessons) * 100)}%
                          </span>
                        </div>
                        <Progress
                          value={(completedLessons / totalLessons) * 100}
                          className="h-2 mt-2 bg-slate-200 dark:bg-slate-700"
                        >
                          <div
                            className="h-full bg-teal-600 dark:bg-teal-400 rounded-full"
                            style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
                          />
                        </Progress>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4 space-y-2">
                      <h3 className="font-medium text-slate-900 dark:text-white">Recent Achievements</h3>

                      <div className="flex items-center space-x-2 p-2 rounded-md bg-teal-50 dark:bg-teal-900/20">
                        <Award className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white">7-Day Streak</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Practice for 7 days in a row</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 p-2 rounded-md bg-teal-50 dark:bg-teal-900/20">
                        <Star className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white">Perfect Score</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Complete a lesson with 100% accuracy
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="practice" className="space-y-6">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
                  <CardTitle className="text-lg font-medium text-slate-900 dark:text-slate-100">
                    Practice with Camera
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative">
                    <Camera className="h-16 w-16 text-slate-400 opacity-20" />
                    <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-teal-600 hover:bg-teal-700">
                      Start AR Practice Session
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    Practice your sign language skills using your camera. The system will provide real-time feedback on
                    your signing technique.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Daily Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-md border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white text-sm">Conversation Challenge</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Practice a full conversation</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                        Start
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-md border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                          <Star className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white text-sm">Speed Challenge</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Sign as many words as possible in 60s
                          </p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                        Start
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Practice History
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    {[
                      { name: "Alphabet Practice", days: 2, accuracy: 92 },
                      { name: "Common Phrases", days: 5, accuracy: 85 },
                      { name: "Numbers 1-20", days: 7, accuracy: 78 },
                    ].map((practice, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{practice.name}</span>
                          <Badge variant="outline" className="text-slate-500 dark:text-slate-400">
                            {practice.days} {practice.days === 1 ? "day" : "days"} ago
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Accuracy</span>
                          <span className="text-teal-600 dark:text-teal-400">{practice.accuracy}%</span>
                        </div>
                        <Progress value={practice.accuracy} className="h-1 bg-slate-200 dark:bg-slate-700">
                          <div
                            className="h-full bg-teal-600 dark:bg-teal-400 rounded-full"
                            style={{ width: `${practice.accuracy}%` }}
                          />
                        </Progress>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "7-Day Streak",
                    description: "Practice for 7 days in a row",
                    icon: Flame,
                    completed: true,
                  },
                  {
                    title: "Perfect Score",
                    description: "Complete a lesson with 100% accuracy",
                    icon: Star,
                    completed: true,
                  },
                  {
                    title: "Alphabet Master",
                    description: "Learn all alphabet signs",
                    icon: BookOpen,
                    completed: true,
                  },
                  {
                    title: "Conversation Pro",
                    description: "Complete 10 conversation practices",
                    icon: MessageSquare,
                    completed: false,
                  },
                  {
                    title: "Speed Demon",
                    description: "Sign 30 words in 60 seconds",
                    icon: Trophy,
                    completed: false,
                  },
                  {
                    title: "Grammar Expert",
                    description: "Master ASL sentence structure",
                    icon: GraduationCap,
                    completed: false,
                  },
                ].map((achievement, index) => (
                  <Card
                    key={index}
                    className={`border-slate-200 dark:border-slate-800 ${
                      achievement.completed ? "bg-teal-50/50 dark:bg-teal-900/20" : ""
                    }`}
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                          achievement.completed ? "bg-teal-100 dark:bg-teal-900/30" : "bg-slate-100 dark:bg-slate-800"
                        }`}
                      >
                        <achievement.icon
                          className={`h-8 w-8 ${
                            achievement.completed
                              ? "text-teal-600 dark:text-teal-400"
                              : "text-slate-400 dark:text-slate-500"
                          }`}
                        />
                      </div>
                      <h3 className="font-medium text-slate-900 dark:text-white">{achievement.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{achievement.description}</p>
                      {achievement.completed ? (
                        <Badge className="mt-3 bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 border-0">
                          Completed
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="mt-3 text-slate-500 dark:text-slate-400">
                          In Progress
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
                  <CardTitle className="text-lg font-medium text-slate-900 dark:text-slate-100">
                    Learning Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative w-48 h-48 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-4xl font-bold text-slate-900 dark:text-white">
                            {Math.round((completedLessons / totalLessons) * 100)}%
                          </div>
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-slate-200 dark:text-slate-700 stroke-current"
                            strokeWidth="10"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                          <circle
                            className="text-teal-600 dark:text-teal-400 stroke-current"
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - completedLessons / totalLessons)}`}
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                      </div>
                      <p className="mt-4 text-slate-500 dark:text-slate-400">
                        You've completed {completedLessons} out of {totalLessons} lessons
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Skill Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    {[
                      { name: "Alphabet", progress: 100 },
                      { name: "Numbers", progress: 90 },
                      { name: "Common Phrases", progress: 65 },
                      { name: "Grammar", progress: 30 },
                      { name: "Conversation", progress: 45 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{skill.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} className="h-2 bg-slate-200 dark:bg-slate-700">
                          <div
                            className="h-full bg-teal-600 dark:bg-teal-400 rounded-full"
                            style={{ width: `${skill.progress}%` }}
                          />
                        </Progress>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                    <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                      Learning Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    {[
                      {
                        title: "Focus on Grammar",
                        description:
                          "Your grammar skills need improvement. We recommend completing the ASL Sentence Structure lessons.",
                      },
                      {
                        title: "Practice Conversations",
                        description: "To improve fluency, try more conversation practice sessions with the AR feature.",
                      },
                      {
                        title: "Review Common Phrases",
                        description:
                          "You're making good progress with phrases, but regular review will help retention.",
                      },
                    ].map((recommendation, index) => (
                      <div key={index} className="p-3 rounded-md border border-slate-200 dark:border-slate-700">
                        <h4 className="font-medium text-slate-900 dark:text-white text-sm">{recommendation.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{recommendation.description}</p>
                        <Button size="sm" className="mt-2 bg-teal-600 hover:bg-teal-700">
                          Start Lesson
                        </Button>
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

