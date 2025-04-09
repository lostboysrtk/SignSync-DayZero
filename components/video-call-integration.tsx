"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Camera, CameraOff, Link, Mic, MicOff, MonitorSmartphone, Phone, PhoneOff, Settings, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function VideoCallIntegration() {
  const [isInCall, setIsInCall] = useState(false)
  const [isMicOn, setIsMicOn] = useState(true)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [callLink, setCallLink] = useState("")
  const [overlayPosition, setOverlayPosition] = useState("bottom")
  const [showConfidence, setShowConfidence] = useState(true)

  const startCall = () => {
    setIsInCall(true)
    setCallLink("https://signsync.app/call/abc123")
  }

  const endCall = () => {
    setIsInCall(false)
    setCallLink("")
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <div className="relative aspect-video bg-black rounded-md overflow-hidden">
              {isInCall ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 p-2 w-full h-full">
                    <div className="bg-gray-800 rounded-md flex items-center justify-center relative">
                      <img src="/placeholder.svg?height=200&width=300" alt="Remote User" className="max-h-full" />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                        John Doe
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-md flex items-center justify-center relative">
                      <img src="/placeholder.svg?height=200&width=300" alt="Local User" className="max-h-full" />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                        You
                      </div>
                      <div className="absolute bottom-2 right-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-md">
                        "Hello, how are you?"
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Users className="h-16 w-16 text-muted-foreground opacity-20 mx-auto" />
                    <p className="text-muted-foreground">Start a video call to begin translation</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center space-x-4 mt-4">
              <Button
                variant={isMicOn ? "outline" : "secondary"}
                size="icon"
                onClick={() => setIsMicOn(!isMicOn)}
                disabled={!isInCall}
              >
                {isMicOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
              </Button>
              <Button
                variant={isCameraOn ? "outline" : "secondary"}
                size="icon"
                onClick={() => setIsCameraOn(!isCameraOn)}
                disabled={!isInCall}
              >
                {isCameraOn ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
              </Button>
              {isInCall ? (
                <Button variant="destructive" size="icon" onClick={endCall}>
                  <PhoneOff className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="default" size="icon" onClick={startCall}>
                  <Phone className="h-4 w-4" />
                </Button>
              )}
              <Button variant="outline" size="icon" disabled={!isInCall}>
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Call Information</h3>
                {isInCall ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Input value={callLink} readOnly className="text-xs" />
                      <Button variant="outline" size="icon" className="shrink-0">
                        <Link className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span className="font-medium">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Call Duration:</span>
                        <span className="font-medium">00:03:45</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Translation Status:</span>
                        <span className="text-green-500 font-medium">Active</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-muted-foreground">No active call. Start a call to see information.</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Translation Overlay Settings</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="overlay-position">Overlay Position</Label>
                    <Select value={overlayPosition} onValueChange={setOverlayPosition}>
                      <SelectTrigger id="overlay-position">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="top">Top</SelectItem>
                        <SelectItem value="bottom">Bottom</SelectItem>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="show-confidence">Show Confidence Indicators</Label>
                      <Switch id="show-confidence" checked={showConfidence} onCheckedChange={setShowConfidence} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <MonitorSmartphone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">About Video Call Integration</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The video call integration module uses WebRTC for peer-to-peer communication with real-time sign
                language translation overlays. The system supports customizable overlay positions, confidence
                indicators, and active speaker detection in group calls.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

