// Mock video call API functions

interface CallInfo {
  callId: string
  callLink: string
}

export async function initializeVideoCall(): Promise<CallInfo> {
  // In a real app, this would set up WebRTC connections
  return new Promise((resolve) => {
    setTimeout(() => {
      const callId = Math.random().toString(36).substring(2, 10)
      resolve({
        callId,
        callLink: `https://signsync.app/call/${callId}`,
      })
    }, 1000)
  })
}

export async function joinVideoCall(callId: string): Promise<CallInfo> {
  // In a real app, this would connect to an existing WebRTC session
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        callId,
        callLink: `https://signsync.app/call/${callId}`,
      })
    }, 1000)
  })
}

