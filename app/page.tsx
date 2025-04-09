import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, HandMetal, MessageSquare, Users, Video } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HandMetal className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">
              SignSync
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition"
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className="text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-600 dark:hover:bg-teal-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">
              Breaking Barriers in Sign Language Communication
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
              SignSync uses AI to provide real-time sign language translation, empowering seamless communication for
              everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-600 dark:hover:bg-teal-700 text-lg px-8"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-800 text-lg px-8"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <HandMetal className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
                  title: "Real-Time Recognition",
                  description: "Advanced hand tracking with MediaPipe for accurate sign language detection at 30 FPS.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
                  title: "Bidirectional Translation",
                  description:
                    "Translate between sign language and text with contextual understanding and grammar correction.",
                },
                {
                  icon: <Video className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
                  title: "Video Call Integration",
                  description: "Seamless WebRTC integration for video calls with real-time translation overlays.",
                },
                {
                  icon: <Users className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
                  title: "Enterprise Tools",
                  description:
                    "Meeting transcription, action item extraction, and analytics for business communication.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
              How SignSync Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Capture",
                  description: "Our AI-powered camera detects hand movements and gestures in real-time.",
                },
                {
                  step: "2",
                  title: "Process",
                  description: "Advanced neural networks interpret the signs and convert them to text or speech.",
                },
                {
                  step: "3",
                  title: "Communicate",
                  description: "Seamlessly bridge the communication gap between sign language users and others.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-2xl font-bold text-teal-600 dark:text-teal-400 mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
              What People Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "SignSync has transformed how I communicate at work. My colleagues now understand me without an interpreter.",
                  author: "Sarah J., ASL User",
                },
                {
                  quote:
                    "As an educator, this tool has made my classroom truly inclusive for deaf students for the first time.",
                  author: "Michael T., Professor",
                },
                {
                  quote:
                    "The real-time translation during video calls has been a game-changer for our remote team communication.",
                  author: "Lisa R., Project Manager",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                  <div className="mb-4 text-teal-600 dark:text-teal-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 italic">{testimonial.quote}</p>
                  <p className="text-slate-900 dark:text-white font-medium">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-800 dark:to-emerald-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Break Communication Barriers?</h2>
            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing seamless sign language communication.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-teal-50 dark:bg-white dark:text-teal-700 dark:hover:bg-teal-50 text-lg px-8"
              >
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HandMetal className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold text-white">SignSync</span>
              </div>
              <p className="text-slate-400">
                Breaking barriers in sign language communication with AI-powered translation.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Sign Recognition
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Translation Engine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Video Calls
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Learning System
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-teal-400 transition">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} SignSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

