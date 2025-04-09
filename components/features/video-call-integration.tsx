"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Camera, CameraOff, Link, Mic, MicOff, MonitorSmartphone, Phone, PhoneOff, Settings, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { initializeVideoCall, joinVideoCall } from "@/lib/video-call-api"

export function VideoCallIntegration() {
  const [isInCall, setIsInCall] = useState(false)
  const [isMicOn, setIsMicOn] = useState(true)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [callLink, setCallLink] = useState("")
  const [overlayPosition, setOverlayPosition] = useState("bottom")
  const [showConfidence, setShowConfidence] = useState(true)
  const [participants, setParticipants] = useState(1)
  const [callDuration, setCallDuration] = useState(0)
  const [joinCode, setJoinCode] = useState("")

  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let durationInterval: NodeJS.Timeout

    if (isInCall) {
      durationInterval = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (durationInterval) clearInterval(durationInterval)
    }
  }, [isInCall])

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return [
      hours > 0 ? String(hours).padStart(2, "0") : null,
      String(minutes).padStart(2, "0"),
      String(secs).padStart(2, "0"),
    ]
      .filter(Boolean)
      .join(":")
  }

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: isCameraOn,
        audio: isMicOn,
      })

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }

      const callInfo = await initializeVideoCall()
      setCallLink(callInfo.callLink)
      setIsInCall(true)
      setParticipants(1)
    } catch (error) {
      console.error("Error starting call:", error)
    }
  }

  const joinCall = async () => {
    if (!joinCode) return

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: isCameraOn,
        audio: isMicOn,
      })

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }

      const callInfo = await joinVideoCall(joinCode)
      setCallLink(callInfo.callLink)
      setIsInCall(true)
      setParticipants(2)

      // In a real app, this would connect to the remote peer
      // and display their video in remoteVideoRef
    } catch (error) {
      console.error("Error joining call:", error)
    }
  }

  const endCall = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const tracks = (localVideoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach((track) => track.stop())
    }

    setIsInCall(false)
    setCallLink("")
    setCallDuration(0)
    setParticipants(1)
  }

  const toggleMic = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const audioTracks = (localVideoRef.current.srcObject as MediaStream).getAudioTracks()

      audioTracks.forEach((track) => {
        track.enabled = !isMicOn
      })
    }

    setIsMicOn(!isMicOn)
  }

  const toggleCamera = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const videoTracks = (localVideoRef.current.srcObject as MediaStream).getVideoTracks()

      videoTracks.forEach((track) => {
        track.enabled = !isCameraOn
      })
    }

    setIsCameraOn(!isCameraOn)
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-slate-200 dark:border-slate-800">
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Video Call Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                {isInCall ? (
                  <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2">
                    <div className="bg-slate-800 rounded-md overflow-hidden relative">
                      {participants > 1 ? (
                        <video ref={remoteVideoRef} className="w-full h-full object-cover" autoPlay playsInline />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Users className="h-16 w-16 text-slate-600 opacity-20" />
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                        {participants > 1 ? "Remote User" : "Waiting for participants..."}
                      </div>
                      {participants > 1 && (
                        <div className="absolute bottom-2 right-2 bg-teal-600/90 text-white text-xs px-2 py-1 rounded-md">
                          "Hello, how are you?"
                        </div>
                      )}
                    </div>
                    <div className="bg-slate-800 rounded-md overflow-hidden relative">
                      <video ref={localVideoRef} className="w-full h-full object-cover" autoPlay playsInline muted />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                        You
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Users className="h-16 w-16 text-slate-400 opacity-20 mx-auto" />
                      <p className="text-slate-400">Start or join a video call to begin</p>
                    </div>
                  </div>
                )}
              </div>

              {!isInCall && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4 space-y-4">
                      <h3 className="font-medium text-slate-900 dark:text-white">Start a New Call</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Create a new video call and share the link with others.
                      </p>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={startCall}>
                        <Phone className="h-4 w-4 mr-2" />
                        Start Call
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4 space-y-4">
                      <h3 className="font-medium text-slate-900 dark:text-white">Join Existing Call</h3>
                      <div className="space-y-2">
                        <Label htmlFor="join-code" className="text-sm">
                          Call Code
                        </Label>
                        <Input
                          id="join-code"
                          placeholder="Enter call code"
                          value={joinCode}
                          onChange={(e) => setJoinCode(e.target.value)}
                        />
                      </div>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={joinCall} disabled={!joinCode}>
                        <Users className="h-4 w-4 mr-2" />
                        Join Call
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {isInCall && (
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant={isMicOn ? "outline" : "secondary"}
                    size="icon"
                    onClick={toggleMic}
                    className="h-12 w-12 rounded-full"
                  >
                    {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                  </Button>
                  <Button
                    variant={isCameraOn ? "outline" : "secondary"}
                    size="icon"
                    onClick={toggleCamera}
                    className="h-12 w-12 rounded-full"
                  >
                    {isCameraOn ? <Camera className="h-5 w-5" /> : <CameraOff className="h-5 w-5" />}
                  </Button>
                  <Button variant="destructive" size="icon" onClick={endCall} className="h-12 w-12 rounded-full">
                    <PhoneOff className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                    <Settings className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                  <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                    Call Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  {isInCall ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Input value={callLink} readOnly className="text-xs border-slate-200 dark:border-slate-700" />
                        <Button variant="outline" size="icon" className="shrink-0">
                          <Link className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Participants:</span>
                          <span className="font-medium text-slate-900 dark:text-white">{participants}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Call Duration:</span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {formatDuration(callDuration)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Translation Status:</span>
                          <span className="text-teal-600 dark:text-teal-400 font-medium">Active</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      No active call. Start or join a call to see information.
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                  <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                    Translation Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="overlay-position"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Overlay Position
                      </Label>
                      <Select value={overlayPosition} onValueChange={setOverlayPosition}>
                        <SelectTrigger id="overlay-position" className="border-slate-200 dark:border-slate-700">
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

                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="show-confidence"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Show Confidence Indicators
                      </Label>
                      <Switch id="show-confidence" checked={showConfidence} onCheckedChange={setShowConfidence} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                      <MonitorSmartphone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white text-sm">About Video Calls</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Our WebRTC-based video calls feature real-time sign language translation overlays, with
                        customizable positioning and confidence indicators.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

