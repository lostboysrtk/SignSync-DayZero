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

  return (
    <div className="space-y-4">
      <Tabs defaultValue="meeting-assistant" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="meeting-assistant">Meeting Assistant</TabsTrigger>
          <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="meeting-assistant" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Transcription & Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Select value={selectedMeeting} onValueChange={setSelectedMeeting}>
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Select meeting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly-standup">Weekly Standup (Today)</SelectItem>
                      <SelectItem value="product-review">Product Review (Yesterday)</SelectItem>
                      <SelectItem value="client-meeting">Client Meeting (3 days ago)</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" className="space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium">Weekly Standup</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span>April 7, 2025</span>
                          <Clock className="h-4 w-4 ml-2" />
                          <span>10:00 AM - 10:30 AM</span>
                        </div>
                      </div>
                      <Badge>Completed</Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Participants (5)</h4>
                        <div className="flex -space-x-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                            >
                              {String.fromCharCode(65 + i)}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Meeting Summary</h4>
                        <p className="text-sm text-muted-foreground">
                          The team discussed progress on the SignSync project, including the completion of the hand
                          tracking module and the start of the translation engine development. John reported issues with
                          the WebRTC implementation that need to be addressed by Friday.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Action Items</h4>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span>
                              <span className="font-medium">Sarah:</span> Fix WebRTC connection issues by Friday
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span>
                              <span className="font-medium">Mike:</span> Complete the avatar animation prototype by
                              Monday
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span>
                              <span className="font-medium">Alex:</span> Schedule user testing session for next
                              Wednesday
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Emotional Tone Analysis</h4>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="space-y-1">
                            <div className="text-xs text-center">Excitement</div>
                            <Progress value={75} className="h-2" />
                            <div className="text-xs text-center text-muted-foreground">75%</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-center">Urgency</div>
                            <Progress value={40} className="h-2" />
                            <div className="text-xs text-center text-muted-foreground">40%</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-center">Concern</div>
                            <Progress value={25} className="h-2" />
                            <div className="text-xs text-center text-muted-foreground">25%</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs text-center">Satisfaction</div>
                            <Progress value={60} className="h-2" />
                            <div className="text-xs text-center text-muted-foreground">60%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Full Transcript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium flex-shrink-0">
                            A
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">Alex (Team Lead)</span>
                              <span className="text-xs text-muted-foreground">10:02 AM</span>
                            </div>
                            <p className="text-sm mt-1">
                              Good morning everyone! Let's go through our progress updates for the SignSync project.
                              Sarah, can you start with the WebRTC implementation?
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium flex-shrink-0">
                            S
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">Sarah (Developer)</span>
                              <span className="text-xs text-muted-foreground">10:03 AM</span>
                            </div>
                            <p className="text-sm mt-1">
                              I've made progress on the video call integration, but we're having some connection issues
                              with multiple participants. I'll need to fix those by Friday.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium flex-shrink-0">
                            M
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">Mike (Designer)</span>
                              <span className="text-xs text-muted-foreground">10:05 AM</span>
                            </div>
                            <p className="text-sm mt-1">
                              I'm working on the 3D avatar animations for the text-to-sign feature. I should have a
                              prototype ready by Monday for everyone to review.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium flex-shrink-0">
                            J
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">John (ML Engineer)</span>
                              <span className="text-xs text-muted-foreground">10:08 AM</span>
                            </div>
                            <p className="text-sm mt-1">
                              The hand tracking module is working well now. We're getting 95% accuracy in controlled
                              environments and about 85% in variable lighting conditions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Communication Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Participation Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[150px] flex items-center justify-center bg-muted/20 rounded-md">
                    <PieChart className="h-12 w-12 text-muted-foreground opacity-20" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-sm">Alex</span>
                      </div>
                      <span className="text-sm">35%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Sarah</span>
                      </div>
                      <span className="text-sm">25%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">Mike</span>
                      </div>
                      <span className="text-sm">20%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-sm">John</span>
                      </div>
                      <span className="text-sm">15%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Lisa</span>
                      </div>
                      <span className="text-sm">5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Heatmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <MessageSquare className="h-12 w-12 text-muted-foreground opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow-up Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">WebRTC Implementation Review</h4>
                        <p className="text-xs text-muted-foreground">Due: April 10, 2025</p>
                      </div>
                    </div>
                    <Badge>High Priority</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">User Testing Session</h4>
                        <p className="text-xs text-muted-foreground">Due: April 14, 2025</p>
                      </div>
                    </div>
                    <Badge variant="outline">Medium Priority</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Monthly Progress Report</h4>
                        <p className="text-xs text-muted-foreground">Due: April 30, 2025</p>
                      </div>
                    </div>
                    <Badge variant="outline">Low Priority</Badge>
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
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">About Enterprise Communication Features</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The enterprise communication features include an automated meeting assistant with real-time
                transcription logging, action item extraction, speaker diarization, and emotional tone analysis. The
                post-meeting analytics dashboard provides participation metrics, conversation heatmaps, and follow-up
                reminders to enhance team productivity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

