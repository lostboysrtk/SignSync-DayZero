"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Camera, Hand, Pause, Play } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { detectHandSigns } from "@/lib/hand-detection"

export function SignRecognition() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [detectedSign, setDetectedSign] = useState<string | null>(null)
  const [confidence, setConfidence] = useState(0)
  const [showLandmarks, setShowLandmarks] = useState(true)
  const [fps, setFps] = useState(30)
  const [cameraError, setCameraError] = useState<string | null>(null)

  useEffect(() => {
    let stream: MediaStream | null = null
    let animationFrameId: number
    let lastTime = 0
    const fpsInterval = 1000 / fps

    const startCamera = async () => {
      try {
        setCameraError(null)
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

          // Set canvas dimensions to match video
          if (canvasRef.current) {
            canvasRef.current.width = videoRef.current.videoWidth
            canvasRef.current.height = videoRef.current.videoHeight
          }
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
        setCameraError("Could not access camera. Please ensure you've granted camera permissions.")
      }
    }

    const processFrame = async (timestamp: number) => {
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

            // Process frame with hand detection
            try {
              const result = await detectHandSigns(videoRef.current, canvasRef.current, showLandmarks)
              if (result) {
                setDetectedSign(result.sign)
                setConfidence(result.confidence)
              }
            } catch (error) {
              console.error("Error in hand detection:", error)
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(processFrame)
    }

    if (isRunning) {
      startCamera()
      animationFrameId = requestAnimationFrame(processFrame)
    } else if (stream) {
      stream.getTracks().forEach((track) => track.stop())
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
    <div className="space-y-6">
      <Card className="overflow-hidden border-slate-200 dark:border-slate-800">
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Sign Language Recognition
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                {cameraError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <Camera className="h-12 w-12 text-red-500 mb-2" />
                    <p className="text-white text-sm">{cameraError}</p>
                    <Button
                      variant="outline"
                      className="mt-4 bg-white/10 text-white hover:bg-white/20 border-white/20"
                      onClick={() => setIsRunning(true)}
                    >
                      Try Again
                    </Button>
                  </div>
                ) : isRunning ? (
                  <canvas ref={canvasRef} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-slate-400 opacity-20" />
                  </div>
                )}
                <video ref={videoRef} className="hidden" playsInline muted />

                {detectedSign && isRunning && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {detectedSign} <span className="ml-1 text-teal-400">{confidence}%</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-4">
                <Button
                  onClick={toggleRecognition}
                  className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-teal-600 hover:bg-teal-700"}
                >
                  {isRunning ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" /> Stop Recognition
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" /> Start Recognition
                    </>
                  )}
                </Button>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="show-landmarks" className="text-sm">
                      Show Landmarks
                    </Label>
                    <Switch id="show-landmarks" checked={showLandmarks} onCheckedChange={setShowLandmarks} />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Label className="text-sm whitespace-nowrap">FPS: {fps}</Label>
                    <Slider
                      value={[fps]}
                      min={15}
                      max={60}
                      step={1}
                      className="w-24"
                      onValueChange={(value) => setFps(value[0])}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3">
                  <CardTitle className="text-base font-medium text-slate-900 dark:text-slate-100">
                    Recognition Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Detected Sign</h3>
                    {detectedSign ? (
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">{detectedSign}</div>
                    ) : (
                      <div className="text-slate-500 dark:text-slate-400 text-sm">No sign detected</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Confidence</h3>
                    <Progress value={confidence} className="h-2 bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full bg-teal-600 dark:bg-teal-500 rounded-full transition-all"
                        style={{ width: `${confidence}%` }}
                      />
                    </Progress>
                    <div className="text-sm text-slate-500 dark:text-slate-400 text-right">{confidence}%</div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Recent Signs</h3>
                    <div className="space-y-1">
                      {["Hello", "Thank you", "Yes"].map((sign, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-1 px-2 rounded bg-slate-50 dark:bg-slate-800"
                        >
                          <span className="text-sm">{sign}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{90 - index * 5}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                      <Hand className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white text-sm">How It Works</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Our AI model detects 21 hand landmarks in real-time and processes them through a neural network
                        trained on thousands of sign language examples.
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

