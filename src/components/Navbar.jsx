import React from 'react';
import { Terminal, BookOpen, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="font-mono text-xl font-bold">DevInterviews</span>
          </Link>
          <div className="flex space-x-8">
            <Link 
              to="/"
              className={`flex items-center space-x-2 hover:text-cyan-400 transition ${
                location.pathname === '/' ? 'text-cyan-400' : ''
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/experiences"
              className={`flex items-center space-x-2 hover:text-cyan-400 transition ${
                location.pathname === '/experiences' ? 'text-cyan-400' : ''
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Experiences</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}