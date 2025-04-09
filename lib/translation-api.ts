// Mock translation API functions

export async function translateSignToText(): Promise<string> {
  // In a real app, this would call a backend API
  return new Promise((resolve) => {
    setTimeout(() => {
      const translations = [
        "Hello! How are you today?",
        "I'm learning sign language with SignSync.",
        "Can you help me practice my signing skills?",
        "It's nice to meet you. My name is Sarah.",
        "I'm excited about the possibilities of this technology.",
      ]

      const randomIndex = Math.floor(Math.random() * translations.length)
      resolve(translations[randomIndex])
    }, 1500)
  })
}

export async function translateTextToSign(text: string): Promise<void> {
  // In a real app, this would call a backend API to generate avatar animations
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Translating text to sign: ${text}`)
      resolve()
    }, 1500)
  })
}

