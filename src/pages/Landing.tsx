'use client'

import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">HabitTrack</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-indigo-200">Features</a>
          <a href="#" className="hover:text-indigo-200">Pricing</a>
          <a href="#" className="hover:text-indigo-200">About</a>
          <a href="#" className="hover:text-indigo-200">Contact</a>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#features" className="block py-2 px-4 text-sm hover:bg-indigo-700">Features</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-indigo-700">Pricing</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-indigo-700">About</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-indigo-700">Contact</a>
        </div>
      )}
    </header>
  )
}

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Habits, Transform Your Life</h1>
          <p className="text-xl mb-8">Build lasting habits and achieve your goals with HabitTrack. Simple, effective, and designed for your success.</p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">
            Get Started Free
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/placeholder.svg" 
            alt="Habit Tracker App" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

const FeatureCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-3xl text-indigo-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const FeaturesSection: React.FC = () => {
  const features = [
    { 
      title: "Daily Tracking", 
      description: "Easily log your habits with just a tap, keeping you accountable every day.", 
      icon: "📅" 
    },
    { 
      title: "Progress Insights", 
      description: "Visualize your progress with beautiful charts and detailed statistics.", 
      icon: "📊" 
    },
    { 
      title: "Custom Reminders", 
      description: "Set personalized reminders to keep you on track with your goals.", 
      icon: "🔔" 
    },
    { 
      title: "Goal Setting", 
      description: "Define and track your short-term and long-term goals alongside your habits.", 
      icon: "🎯" 
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features to Power Your Habits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection: React.FC = () => {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Habits?</h2>
        <p className="text-xl mb-8">Join thousands of users who have already improved their lives with HabitTrack.</p>
        <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">
          Start Your Free Trial
        </button>
      </div>
    </section>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">HabitTrack</h3>
            <p className="text-gray-400">Empowering you to build lasting habits and achieve your goals.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#features" className="hover:text-indigo-400">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
              <li><a href="#" className="hover:text-indigo-400">Instagram</a></li>
              <li><a href="#" className="hover:text-indigo-400">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest features and tips.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-500 px-4 py-2 rounded-r-md hover:bg-indigo-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 HabitTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

