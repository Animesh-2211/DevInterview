import React from 'react';
import { Terminal, Code, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsSection from '../components/home/StatsSection';
import FeatureCard from '../components/home/FeatureCard';
import CompanySalarySlider from '../components/home/CompanySalarySlider';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-gray-900 text-light-text-primary dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-light-surface to-light-background dark:from-gray-900 dark:to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-light-primary/5 to-light-accent/5 dark:from-cyan-500/10 dark:to-purple-500/10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Terminal className="w-16 h-16 text-light-accent dark:text-cyan-400" />
            </div>
            <h1 className="text-6xl font-bold font-mono mb-6">
              <span className="text-light-accent dark:text-cyan-400">{'{'}</span>
              DevInterviews
              <span className="text-light-accent dark:text-cyan-400">{'}'}</span>
            </h1>
            <p className="text-2xl text-light-text-secondary dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the secrets of tech interviews through real experiences shared by developers worldwide.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/experiences"
                className="px-8 py-4 bg-light-accent dark:bg-cyan-400 text-white dark:text-black rounded-lg font-bold hover:bg-light-primary dark:hover:bg-cyan-300 transition transform hover:scale-105 shadow-md"
              >
                Read Experiences
              </Link>
              <Link
                to="/experiences"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-light-accent dark:text-cyan-400 rounded-lg font-bold hover:bg-light-hover dark:hover:bg-gray-700 transition transform hover:scale-105 shadow-md border border-light-border dark:border-gray-700"
              >
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      <StatsSection />

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-light-text-primary dark:text-white">Why DevInterviews?</h2>
          <p className="text-light-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Get insights from real developers who've been through the interview process at top tech companies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={Code}
            title="Technical Deep Dives"
            description="Detailed breakdowns of coding challenges, system design questions, and technical discussions."
          />
          <FeatureCard
            icon={Brain}
            title="Interview Strategies"
            description="Learn proven strategies and tips from successful candidates who've landed their dream jobs."
          />
          <FeatureCard
            icon={Rocket}
            title="Career Growth"
            description="Get insights into career progression, salary negotiations, and professional development."
          />
        </div>
      </div>

      <CompanySalarySlider />
    </div>
  );
}