// Mock learning API functions

interface LearningProgress {
  completedLessons: number
  totalLessons: number
  streak: number
  xp: number
  skills: {
    name: string
    progress: number
  }[]
}

export async function getLearningProgress(): Promise<LearningProgress> {
  // In a real app, this would fetch data from a backend API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        completedLessons: 24,
        totalLessons: 50,
        streak: 7,
        xp: 1250,
        skills: [
          { name: "Alphabet", progress: 100 },
          { name: "Numbers", progress: 90 },
          { name: "Common Phrases", progress: 65 },
          { name: "Grammar", progress: 30 },
          { name: "Conversation", progress: 45 },
        ],
      })
    }, 500)
  })
}

