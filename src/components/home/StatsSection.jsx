import React from 'react';

export default function StatsSection() {
  return (
    <div className="bg-light-surface dark:bg-gray-800/50 py-12 border-y border-light-border dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem number="500+" label="Interview Experiences" />
          <StatItem number="50+" label="Tech Companies" />
          <StatItem number="10k+" label="Community Members" />
        </div>
      </div>
    </div>
  );
}

function StatItem({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-light-accent dark:text-cyan-400 mb-2">{number}</div>
      <div className="text-light-text-secondary dark:text-gray-400">{label}</div>
    </div>
  );
}