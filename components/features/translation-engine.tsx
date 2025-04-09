"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeftRight, MessageSquare, Mic, MicOff, Play, Settings, Type, User } from "lucide-react"
import { translateSignToText, translateTextToSign } from "@/lib/translation-api"

export function TranslationEngine() {
  const [signToText, setSignToText] = useState("")
  const [textToSign, setTextToSign] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [avatarSpeed, setAvatarSpeed] = useState(1)
  const [showLipSync, setShowLipSync] = useState(true)
  const [isTranslating, setIsTranslating] = useState(false)
  const [activeTab, setActiveTab] = useState("sign-to-text")

  const handleListen = () => {
    setIsListening(!isListening)

    // Mock speech recognition
    if (!isListening) {
      setTimeout(() => {
        setTextToSign("Hello, how are you doing today? I'm using SignSync to communicate.")
        setIsListening(false)
      }, 3000)
    }
  }

  const handleTranslateToText = async () => {
    setIsTranslating(true)
    try {
      const result = await translateSignToText()
      setSignToText(result)
    } catch (error) {
      console.error("Translation error:", error)
    } finally {
      setIsTranslating(false)
    }
  }

  const handleTranslateToSign = async () => {
    setIsTranslating(true)
    try {
      await translateTextToSign(textToSign)
      // In a real app, this would trigger the avatar animation
    } catch (error) {
      console.error("Translation error:", error)
    } finally {
      setIsTranslating(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-slate-200 dark:border-slate-800">
        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 px-6">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">Translation Engine</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="sign-to-text" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <TabsTrigger
                value="sign-to-text"
                className={`py-2.5 ${activeTab === "sign-to-text" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Sign to Text
              </TabsTrigger>
              <TabsTrigger
                value="text-to-sign"
                className={`py-2.5 ${activeTab === "text-to-sign" ? "bg-white dark:bg-slate-950 text-teal-600 dark:text-teal-400" : ""}`}
              >
                Text to Sign
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sign-to-text" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Sign Language Input"
                        className="max-h-full"
                      />
                    </div>
                    <Button
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-teal-600 hover:bg-teal-700"
                      onClick={handleTranslateToText}
                      disabled={isTranslating}
                    >
                      {isTranslating ? "Translating..." : "Translate Sign"}
                    </Button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                        <Type className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Sign to Text Translation
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sign-to-text" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Translated Text
                    </Label>
                    <Textarea
                      id="sign-to-text"
                      placeholder="Sign language translation will appear here..."
                      value={
                        signToText ||
                        "Hello! I am using sign language to communicate with you. This is being translated in real-time by SignSync."
                      }
                      onChange={(e) => setSignToText(e.target.value)}
                      className="min-h-[200px] resize-none border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="outline" className="text-slate-700 dark:text-slate-300">
                      <Settings className="h-4 w-4 mr-2" />
                      Grammar Settings
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Copy to Clipboard
                    </Button>
                  </div>

                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                          <ArrowLeftRight className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-white text-sm">About Sign-to-Text</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            Our CNN-LSTM model recognizes spatial-temporal patterns in sign language and translates them
                            to text with contextual understanding.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="text-to-sign" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="text-to-sign" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Text to Translate
                      </Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleListen}
                        className={isListening ? "text-red-500" : ""}
                      >
                        {isListening ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
                        {isListening ? "Stop" : "Voice Input"}
                      </Button>
                    </div>
                    <Textarea
                      id="text-to-sign"
                      placeholder="Enter text to translate to sign language..."
                      value={textToSign}
                      onChange={(e) => setTextToSign(e.target.value)}
                      className="min-h-[150px] resize-none border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    onClick={handleTranslateToSign}
                    disabled={isTranslating || !textToSign}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {isTranslating ? "Translating..." : "Translate to Sign Language"}
                  </Button>

                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                          <User className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-white text-sm">About Text-to-Sign</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            Our system converts text into fluid sign language using a 3D avatar with realistic hand
                            movements and optional lip-sync.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/placeholder.svg?height=300&width=400" alt="3D Avatar" className="max-h-full" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Avatar Speed: {avatarSpeed.toFixed(1)}x
                        </Label>
                      </div>
                      <Slider
                        value={[avatarSpeed]}
                        min={0.5}
                        max={2}
                        step={0.1}
                        onValueChange={(value) => setAvatarSpeed(value[0])}
                        className="bg-slate-200 dark:bg-slate-700"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="lip-sync" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Enable Lip Sync
                      </Label>
                      <Switch id="lip-sync" checked={showLipSync} onCheckedChange={setShowLipSync} />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

