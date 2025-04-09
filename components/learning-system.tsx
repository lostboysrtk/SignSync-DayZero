"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

  return (
    <div className="space-y-4">
      <Tabs defaultValue="lessons" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>ASL Skill Tree</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-primary/10 border-primary">
                      <CardContent className="p-4 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-medium">Basics</h4>
                        <p className="text-xs text-muted-foreground mt-1">100% Complete</p>
                        <Progress value={100} className="h-1 mt-2" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-medium">Phrases</h4>
                        <p className="text-xs text-muted-foreground mt-1">65% Complete</p>
                        <Progress value={65} className="h-1 mt-2" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                          <LayoutGrid className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-medium">Grammar</h4>
                        <p className="text-xs text-muted-foreground mt-1">30% Complete</p>
                        <Progress value={30} className="h-1 mt-2" />
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Recommended Lessons</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <BookOpen className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Common Greetings</h4>
                              <p className="text-xs text-muted-foreground">Learn everyday greeting signs</p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <LayoutGrid className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">ASL Sentence Structure</h4>
                              <p className="text-xs text-muted-foreground">Master ASL grammar rules</p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <Calendar className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Time Expressions</h4>
                              <p className="text-xs text-muted-foreground">Learn to sign dates and times</p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Flame className="h-5 w-5 text-orange-500" />
                      <h3 className="font-medium">Daily Streak</h3>
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
                          i < currentStreak % 7 ? "bg-orange-500/20 text-orange-500" : "bg-muted"
                        }`}
                      >
                        {i < currentStreak % 7 && <Flame className="h-4 w-4" />}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Start Today's Lesson
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-4">
                  <h3 className="font-medium">Your Stats</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total XP</span>
                      <span className="font-medium">{totalXP}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lessons Completed</span>
                      <span className="font-medium">
                        {completedLessons}/{totalLessons}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Overall Progress</span>
                      <span className="font-medium">{Math.round((completedLessons / totalLessons) * 100)}%</span>
                    </div>
                    <Progress value={(completedLessons / totalLessons) * 100} className="h-2 mt-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-medium">Recent Achievements</h3>

                  <div className="flex items-center space-x-2 p-2 rounded-md bg-primary/5">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="text-sm font-medium">7-Day Streak</h4>
                      <p className="text-xs text-muted-foreground">Practice for 7 days in a row</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 p-2 rounded-md bg-primary/5">
                    <Star className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="text-sm font-medium">Perfect Score</h4>
                      <p className="text-xs text-muted-foreground">Complete a lesson with 100% accuracy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice with Camera</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-black/5 rounded-md flex items-center justify-center relative">
                <Camera className="h-16 w-16 text-muted-foreground opacity-20" />
                <Button className="absolute bottom-4 left-1/2 -translate-x-1/2">Start AR Practice Session</Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Practice your sign language skills using your camera. The system will provide real-time feedback on your
                signing technique.
              </p>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Conversation Challenge</h4>
                        <p className="text-xs text-muted-foreground">Practice a full conversation</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Speed Challenge</h4>
                        <p className="text-xs text-muted-foreground">Sign as many words as possible in 60s</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practice History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Alphabet Practice</span>
                      <Badge variant="outline">2 days ago</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Accuracy</span>
                      <span className="text-green-500">92%</span>
                    </div>
                    <Progress value={92} className="h-1" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Common Phrases</span>
                      <Badge variant="outline">5 days ago</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Accuracy</span>
                      <span className="text-green-500">85%</span>
                    </div>
                    <Progress value={85} className="h-1" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Numbers 1-20</span>
                      <Badge variant="outline">1 week ago</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Accuracy</span>
                      <span className="text-green-500">78%</span>
                    </div>
                    <Progress value={78} className="h-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
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
              <Card key={index} className={achievement.completed ? "border-primary/50" : ""}>
                <CardContent className="p-4 text-center">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                      achievement.completed ? "bg-primary/20" : "bg-muted"
                    }`}
                  >
                    <achievement.icon
                      className={`h-8 w-8 ${achievement.completed ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                  {achievement.completed ? (
                    <Badge className="mt-3 bg-primary/20 text-primary border-0">Completed</Badge>
                  ) : (
                    <Badge variant="outline" className="mt-3">
                      In Progress
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold">{Math.round((completedLessons / totalLessons) * 100)}%</div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="10"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-primary stroke-current"
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
                  <p className="mt-4 text-muted-foreground">
                    You've completed {completedLessons} out of {totalLessons} lessons
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Skill Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Alphabet</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Numbers</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Common Phrases</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Grammar</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Conversation</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-md border">
                    <h4 className="font-medium">Focus on Grammar</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your grammar skills need improvement. We recommend completing the ASL Sentence Structure lessons.
                    </p>
                    <Button size="sm" className="mt-2">
                      Start Lesson
                    </Button>
                  </div>

                  <div className="p-3 rounded-md border">
                    <h4 className="font-medium">Practice Conversations</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      To improve fluency, try more conversation practice sessions with the AR feature.
                    </p>
                    <Button size="sm" className="mt-2">
                      Start Practice
                    </Button>
                  </div>

                  <div className="p-3 rounded-md border">
                    <h4 className="font-medium">Review Common Phrases</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      You're making good progress with phrases, but regular review will help retention.
                    </p>
                    <Button size="sm" className="mt-2">
                      Review Phrases
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">About Adaptive Learning System</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The adaptive learning system provides a gamified learning path for sign language with AR practice
                sessions, skill trees for different ASL dialects, and daily streaks. The system personalizes lesson
                plans based on your progress analytics, common recognition errors, and frequently used vocabulary.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

