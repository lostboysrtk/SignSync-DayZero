"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeftRight, MessageSquare, Mic, MicOff, Play, Settings, Type, User } from "lucide-react"

export function TranslationEngine() {
  const [signToText, setSignToText] = useState("")
  const [textToSign, setTextToSign] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [avatarSpeed, setAvatarSpeed] = useState(1)
  const [showLipSync, setShowLipSync] = useState(true)

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

  return (
    <div className="space-y-4">
      <Tabs defaultValue="sign-to-text" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-to-text">Sign to Text</TabsTrigger>
          <TabsTrigger value="text-to-sign">Text to Sign</TabsTrigger>
        </TabsList>

        <TabsContent value="sign-to-text" className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Type className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Sign to Text Translation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Translates detected sign language gestures into written text using a CNN-LSTM model.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sign-to-text">Translated Text</Label>
                <Textarea
                  id="sign-to-text"
                  placeholder="Sign language translation will appear here..."
                  value={
                    signToText ||
                    "Hello! I am using sign language to communicate with you. This is being translated in real-time by SignSync."
                  }
                  onChange={(e) => setSignToText(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>

              <div className="flex items-center justify-between">
                <Button variant="outline" className="space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Translation Settings</span>
                </Button>
                <Button className="space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Copy to Clipboard</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="text-to-sign" className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Text to Sign Translation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Converts text into sign language using a 3D avatar with customizable settings.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="text-to-sign">Text to Translate</Label>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleListen}
                    className={isListening ? "text-red-500" : ""}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                </div>
                <Textarea
                  id="text-to-sign"
                  placeholder="Enter text to translate to sign language..."
                  value={textToSign}
                  onChange={(e) => setTextToSign(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="aspect-video bg-black/5 rounded-md flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/placeholder.svg?height=300&width=400" alt="3D Avatar" className="max-h-full" />
                </div>
                <Button className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <Play className="h-4 w-4 mr-2" />
                  Animate Sign
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Avatar Speed: {avatarSpeed.toFixed(1)}x</Label>
                  </div>
                  <Slider
                    value={[avatarSpeed]}
                    min={0.5}
                    max={2}
                    step={0.1}
                    onValueChange={(value) => setAvatarSpeed(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="lip-sync">Enable Lip Sync</Label>
                    <Switch id="lip-sync" checked={showLipSync} onCheckedChange={setShowLipSync} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <ArrowLeftRight className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">About Translation Engine</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The multimodal translation engine provides bidirectional translation between sign language and text.
                Sign-to-text uses a CNN-LSTM model with contextual NER for proper noun resolution, while text-to-sign
                uses 3D avatar animation with lip-sync integration for mouth morphemes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

