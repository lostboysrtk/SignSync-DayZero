"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Camera, Flame, GraduationCap, Hand, Play, Star, Trophy } from "lucide-react"

export function AlphabetLearning() {
  const [activeTab, setActiveTab] = useState("alphabet")
  const [currentStreak, setCurrentStreak] = useState(7)
  const [totalXP, setTotalXP] = useState(450)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

  // ASL alphabet data with letter, image path, and description
  const aslAlphabet = [
    { letter: "A", description: "Make a fist with your thumb resting on the side of your index finger." },
    { letter: "B", description: "Hold your hand flat, fingers together, thumb tucked into palm." },
    { letter: "C", description: "Curve your fingers and thumb to form a 'C' shape." },
    { letter: "D", description: "Make a 'C' shape, then extend your index finger upward." },
    { letter: "E", description: "Curl your fingers in, with thumb resting against fingertips." },
    { letter: "F", description: "Touch your thumb to your index finger, with other fingers extended." },
    { letter: "G", description: "Extend your index finger and thumb, pointing thumb to the side." },
    { letter: "H", description: "Extend your index and middle fingers together, with thumb to the side." },
    { letter: "I", description: "Make a fist with your pinky finger extended upward." },
    { letter: "J", description: "Start with 'I' hand shape, then trace a 'J' in the air with your pinky." },
    { letter: "K", description: "Extend your index finger and middle finger in a 'V', with thumb between them." },
    { letter: "L", description: "Extend your thumb and index finger to form an 'L' shape." },
    { letter: "M", description: "Place your thumb between your ring and pinky fingers, with fingers folded down." },
    { letter: "N", description: "Place your thumb between your middle and ring fingers, with fingers folded down." },
    { letter: "O", description: "Form a circle with all fingertips touching your thumb." },
    { letter: "P", description: "Point your middle finger down with index finger and thumb extended." },
    { letter: "Q", description: "Point your index finger down with thumb extended to the side." },
    { letter: "R", description: "Cross your middle finger over your index finger, with thumb tucked in." },
    { letter: "S", description: "Make a fist with your thumb wrapped over your fingers." },
    { letter: "T", description: "Make a fist with your thumb between your index and middle fingers." },
    { letter: "U", description: "Extend your index and middle fingers together, pointing up." },
    { letter: "V", description: "Extend your index and middle fingers in a 'V' shape." },
    { letter: "W", description: "Extend your index, middle, and ring fingers to form a 'W' shape." },
    { letter: "X", description: "Make a fist with your index finger bent in a hook shape." },
    { letter: "Y", description: "Extend your thumb and pinky finger, with other fingers closed." },
    { letter: "Z", description: "Trace the letter 'Z' in the air with your index finger." },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="alphabet" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <TabsTrigger
            value="alphabet"
            className={`py-2.5 ${activeTab === "alphabet" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
          >
            Alphabet
          </TabsTrigger>
          <TabsTrigger
            value="practice"
            className={`py-2.5 ${activeTab === "practice" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
          >
            Practice
          </TabsTrigger>
          <TabsTrigger
            value="progress"
            className={`py-2.5 ${activeTab === "progress" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
          >
            Progress
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alphabet" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    ASL Alphabet
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-2">
                    {aslAlphabet.map((item) => (
                      <button
                        key={item.letter}
                        className={`aspect-square rounded-md flex items-center justify-center text-xl font-bold border-2 transition-all ${
                          selectedLetter === item.letter
                            ? "border-teal-600 bg-teal-50 text-teal-600 dark:border-teal-400 dark:bg-teal-900/30 dark:text-teal-400"
                            : "border-slate-200 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 dark:border-slate-700 dark:hover:border-teal-400 dark:hover:bg-teal-900/30 dark:hover:text-teal-400"
                        }`}
                        onClick={() => setSelectedLetter(item.letter)}
                      >
                        {item.letter}
                      </button>
                    ))}
                  </div>

                  {selectedLetter && (
                    <div className="mt-8 flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full md:w-1/2 aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                        <div className="text-8xl font-bold text-teal-600 dark:text-teal-400">{selectedLetter}</div>
                      </div>
                      <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Letter {selectedLetter}</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {aslAlphabet.find((item) => item.letter === selectedLetter)?.description}
                        </p>
                        <div className="flex gap-2">
                          <Button className="bg-teal-600 hover:bg-teal-700">
                            <Play className="h-4 w-4 mr-2" />
                            Watch Video
                          </Button>
                          <Button variant="outline">Practice Now</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Learning Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                        <Hand className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">Hand Positioning</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Pay attention to the exact position of your fingers and thumb. Small differences can change
                          the meaning of a sign.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                        <Camera className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">Record Yourself</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Use your camera to record yourself signing and compare it to the examples. This helps you
                          identify areas for improvement.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                        <Trophy className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">Daily Practice</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Spend at least 15 minutes each day practicing the alphabet. Consistency is key to mastering
                          sign language.
                        </p>
                      </div>
                    </div>
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
                      <span className="text-sm text-slate-500 dark:text-slate-400">Alphabet Mastery</span>
                      <span className="font-medium text-slate-900 dark:text-white">65%</span>
                    </div>
                    <Progress value={65} className="h-2 mt-2 bg-slate-200 dark:bg-slate-700">
                      <div className="h-full bg-teal-600 dark:bg-teal-400 rounded-full" style={{ width: "65%" }} />
                    </Progress>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-medium text-slate-900 dark:text-white">Learning Path</h3>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 rounded-md bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-900/30">
                      <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                        <span className="font-bold text-teal-600 dark:text-teal-400">1</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">ASL Alphabet</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">In progress (65%)</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 p-2 rounded-md border border-slate-200 dark:border-slate-700">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <span className="font-bold text-slate-400 dark:text-slate-500">2</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">Numbers 1-20</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Locked</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 p-2 rounded-md border border-slate-200 dark:border-slate-700">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <span className="font-bold text-slate-400 dark:text-slate-500">3</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">Common Phrases</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Locked</p>
                      </div>
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
              <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
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
                Practice your sign language skills using your camera. The system will provide real-time feedback on your
                signing technique.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                  Alphabet Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-md border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white text-sm">Speed Challenge</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Sign all 26 letters as quickly as possible
                      </p>
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
                      <h4 className="font-medium text-slate-900 dark:text-white text-sm">Accuracy Challenge</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Sign random letters with perfect form
                      </p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Start
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white text-sm">Spelling Challenge</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Spell common words using ASL</p>
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
                  { name: "Alphabet Practice", days: 1, accuracy: 88 },
                  { name: "Speed Challenge", days: 3, accuracy: 75 },
                  { name: "Spelling Practice", days: 5, accuracy: 82 },
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

        <TabsContent value="progress" className="space-y-6">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
              <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-slate-900 dark:text-white">65%</div>
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
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.65)}`}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-slate-500 dark:text-slate-400">
                    You've mastered 17 out of 26 letters in the ASL alphabet
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                  Letter Mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-6 gap-2">
                  {aslAlphabet.map((item) => {
                    // Randomly assign mastery levels for demonstration
                    const masteryLevel = Math.floor(Math.random() * 4)
                    let bgColor = "bg-slate-100 dark:bg-slate-800"
                    let textColor = "text-slate-400 dark:text-slate-500"

                    if (masteryLevel === 3) {
                      bgColor = "bg-teal-100 dark:bg-teal-900/30"
                      textColor = "text-teal-600 dark:text-teal-400"
                    } else if (masteryLevel === 2) {
                      bgColor = "bg-teal-50 dark:bg-teal-900/20"
                      textColor = "text-teal-500 dark:text-teal-500"
                    } else if (masteryLevel === 1) {
                      bgColor = "bg-slate-50 dark:bg-slate-800"
                      textColor = "text-slate-500 dark:text-slate-400"
                    }

                    return (
                      <div
                        key={item.letter}
                        className={`aspect-square rounded-md flex items-center justify-center text-lg font-bold ${bgColor} ${textColor}`}
                      >
                        {item.letter}
                      </div>
                    )
                  })}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                    <span className="text-slate-500 dark:text-slate-400">Not Started</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-50 dark:bg-slate-800"></div>
                    <span className="text-slate-500 dark:text-slate-400">Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-50 dark:bg-teal-900/20"></div>
                    <span className="text-slate-500 dark:text-slate-400">Practicing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-100 dark:bg-teal-900/30"></div>
                    <span className="text-slate-500 dark:text-slate-400">Mastered</span>
                  </div>
                </div>
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
                    title: "Practice Letters J, Q, X, Z",
                    description: "These motion-based letters need more practice. Focus on the correct hand movements.",
                  },
                  {
                    title: "Try the Speed Challenge",
                    description: "Test your recall speed by signing the entire alphabet as quickly as possible.",
                  },
                  {
                    title: "Review Similar Letters",
                    description: "Practice distinguishing between similar letters like M/N, E/S, and A/S/T.",
                  },
                ].map((recommendation, index) => (
                  <div key={index} className="p-3 rounded-md border border-slate-200 dark:border-slate-700">
                    <h4 className="font-medium text-slate-900 dark:text-white text-sm">{recommendation.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{recommendation.description}</p>
                    <Button size="sm" className="mt-2 bg-teal-600 hover:bg-teal-700">
                      Start Practice
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

