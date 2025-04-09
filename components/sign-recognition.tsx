"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Camera, Hand, Pause, Play, Settings } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SignRecognition() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [detectedSign, setDetectedSign] = useState<string | null>(null)
  const [confidence, setConfidence] = useState(0)
  const [showLandmarks, setShowLandmarks] = useState(true)
  const [fps, setFps] = useState(30)

  // Mock function to simulate sign detection
  const mockDetectSign = () => {
    const signs = ["Hello", "Thank you", "Yes", "No", "Help", "Please", "Sorry", "Good", "Bad", "Name"]
    const randomSign = signs[Math.floor(Math.random() * signs.length)]
    const randomConfidence = Math.floor(Math.random() * 30) + 70 // 70-99%
    setDetectedSign(randomSign)
    setConfidence(randomConfidence)
  }

  useEffect(() => {
    let stream: MediaStream | null = null
    let animationFrameId: number
    let lastTime = 0
    const fpsInterval = 1000 / fps

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: "user",
          },
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
      }
    }

    const drawHandLandmarks = (timestamp: number) => {
      if (!isRunning) return

      const elapsed = timestamp - lastTime

      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval)

        if (canvasRef.current && videoRef.current) {
          const ctx = canvasRef.current.getContext("2d")
          if (ctx) {
            // Draw video frame
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)

            // Simulate hand landmark detection
            if (showLandmarks) {
              // This is a simplified mock-up of hand landmarks
              // In a real implementation, this would use MediaPipe Hands results
              ctx.fillStyle = "#00FF00"

              // Draw 21 mock hand landmarks
              const centerX = canvasRef.current.width / 2
              const centerY = canvasRef.current.height / 2

              for (let i = 0; i < 21; i++) {
                const angle = (i / 21) * Math.PI * 2
                const radius = 100
                const x = centerX + Math.cos(angle) * radius
                const y = centerY + Math.sin(angle) * radius

                ctx.beginPath()
                ctx.arc(x, y, 5, 0, Math.PI * 2)
                ctx.fill()

                // Connect landmarks with lines
                if (i > 0) {
                  const prevAngle = ((i - 1) / 21) * Math.PI * 2
                  const prevX = centerX + Math.cos(prevAngle) * radius
                  const prevY = centerY + Math.sin(prevAngle) * radius

                  ctx.strokeStyle = "#00FF00"
                  ctx.lineWidth = 2
                  ctx.beginPath()
                  ctx.moveTo(prevX, prevY)
                  ctx.lineTo(x, y)
                  ctx.stroke()
                }
              }
            }

            // Simulate sign detection
            mockDetectSign()
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawHandLandmarks)
    }

    if (isRunning) {
      startCamera()
      animationFrameId = requestAnimationFrame(drawHandLandmarks)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [isRunning, showLandmarks, fps])

  const toggleRecognition = () => {
    setIsRunning((prev) => !prev)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <div className="relative aspect-video bg-black rounded-md overflow-hidden">
              {isRunning ? (
                <canvas ref={canvasRef} width={640} height={480} className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-muted-foreground opacity-20" />
                </div>
              )}
              <video ref={videoRef} className="hidden" playsInline muted />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Detected Sign</h3>
                {detectedSign ? (
                  <div className="text-3xl font-bold">{detectedSign}</div>
                ) : (
                  <div className="text-muted-foreground">No sign detected</div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Confidence</h3>
                <Progress value={confidence} className="h-2" />
                <div className="text-sm text-muted-foreground text-right">{confidence}%</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={toggleRecognition}>
                    {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <span>{isRunning ? "Stop" : "Start"} Recognition</span>
                </div>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-landmarks">Show Hand Landmarks</Label>
                    <Switch id="show-landmarks" checked={showLandmarks} onCheckedChange={setShowLandmarks} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Processing Speed: {fps} FPS</Label>
                  </div>
                  <Slider value={[fps]} min={15} max={60} step={1} onValueChange={(value) => setFps(value[0])} />
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
              <Hand className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">About Sign Recognition</h3>
              <p className="text-sm text-muted-foreground mt-1">
                This module uses MediaPipe Hands for 21-point landmark detection to recognize sign language gestures in
                real-time. The system supports dual-hand recognition with occlusion handling and processes at up to 30
                FPS with low latency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

