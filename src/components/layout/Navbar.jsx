import React from 'react';
import { Terminal, BookOpen, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-light-surface dark:bg-gray-900 text-light-text-primary dark:text-white border-b border-light-border dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-light-accent dark:text-cyan-400" />
            <span className="font-mono text-xl font-bold">DevInterviews</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/"
              className={`flex items-center space-x-2 hover:text-light-accent dark:hover:text-cyan-400 transition ${
                location.pathname === '/' ? 'text-light-accent dark:text-cyan-400' : 'text-light-text-primary dark:text-gray-300'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/experiences"
              className={`flex items-center space-x-2 hover:text-light-accent dark:hover:text-cyan-400 transition ${
                location.pathname === '/experiences' ? 'text-light-accent dark:text-cyan-400' : 'text-light-text-primary dark:text-gray-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Experiences</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}