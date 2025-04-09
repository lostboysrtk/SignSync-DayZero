// Mock enterprise API functions

interface MeetingData {
  id: string
  title: string
  date: string
  time: string
  participants: {
    name: string
    role: string
    initial: string
  }[]
  summary: string
  actionItems: {
    person: string
    task: string
  }[]
  emotionalTone: {
    name: string
    value: number
  }[]
  transcript: {
    person: string
    initial: string
    time: string
    message: string
  }[]
}

export async function getMeetingData(meetingId: string): Promise<MeetingData> {
  // In a real app, this would fetch data from a backend API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: meetingId,
        title: "Weekly Standup",
        date: "April 7, 2025",
        time: "10:00 AM - 10:30 AM",
        participants: [
          { name: "Alex", role: "Team Lead", initial: "A" },
          { name: "Sarah", role: "Developer", initial: "S" },
          { name: "Mike", role: "Designer", initial: "M" },
          { name: "John", role: "ML Engineer", initial: "J" },
          { name: "Lisa", role: "Product Manager", initial: "L" },
        ],
        summary:
          "The team discussed progress on the SignSync project, including the completion of the hand tracking module and the start of the translation engine development. John reported issues with the WebRTC implementation that need to be addressed by Friday.",
        actionItems: [
          { person: "Sarah", task: "Fix WebRTC connection issues by Friday" },
          { person: "Mike", task: "Complete the avatar animation prototype by Monday" },
          { person: "Alex", task: "Schedule user testing session for next Wednesday" },
        ],
        emotionalTone: [
          { name: "Excitement", value: 75 },
          { name: "Urgency", value: 40 },
          { name: "Concern", value: 25 },
          { name: "Satisfaction", value: 60 },
        ],
        transcript: [
          {
            person: "Alex (Team Lead)",
            initial: "A",
            time: "10:02 AM",
            message:
              "Good morning everyone! Let's go through our progress updates for the SignSync project. Sarah, can you start with the WebRTC implementation?",
          },
          {
            person: "Sarah (Developer)",
            initial: "S",
            time: "10:03 AM",
            message:
              "I've made progress on the video call integration, but we're having some connection issues with multiple participants. I'll need to fix those by Friday.",
          },
          {
            person: "Mike (Designer)",
            initial: "M",
            time: "10:05 AM",
            message:
              "I'm working on the 3D avatar animations for the text-to-sign feature. I should have a prototype ready by Monday for everyone to review.",
          },
          {
            person: "John (ML Engineer)",
            initial: "J",
            time: "10:08 AM",
            message:
              "The hand tracking module is working well now. We're getting 95% accuracy in controlled environments and about 85% in variable lighting conditions.",
          },
        ],
      })
    }, 500)
  })
}

