import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-light-surface dark:bg-transparent hover:bg-light-hover dark:hover:bg-gray-800 p-8 rounded-xl transition-all duration-300 border border-light-border dark:border-gray-800 shadow-sm hover:shadow-md">
      <div className="bg-light-primary/10 dark:bg-cyan-400/10 rounded-lg p-4 w-fit mb-6 group-hover:bg-light-primary/20 dark:group-hover:bg-cyan-400/20">
        <Icon className="w-8 h-8 text-light-accent dark:text-cyan-400" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-light-text-primary dark:text-white">{title}</h3>
      <p className="text-light-text-secondary dark:text-gray-400">{description}</p>
    </div>
  );
}