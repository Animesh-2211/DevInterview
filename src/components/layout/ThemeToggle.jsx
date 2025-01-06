import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-8 bg-gray-800' : 'translate-x-0 bg-light-primary'
        }`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-cyan-400" />
        ) : (
          <Sun className="w-4 h-4 text-gray-800" />
        )}
      </div>
    </button>
  );
}