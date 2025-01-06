import { Briefcase, Building, Calendar, GraduationCap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ExperienceCard({ experience }) {
  return (
    <Link
      to={`/experience/${experience._id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Building className="w-5 h-5  text-light-accent dark:text-cyan-400" />
            <h3 className="text-xl font-bold text-light-accent dark:text-cyan-400">{experience.companyName}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{experience.role}</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-500">{experience.yearOfHiring}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <GraduationCap className="w-4 h-4" />
          <span>{experience.collegeName}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{experience.onCampusOrOffCampus}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <Briefcase className="w-4 h-4" />
          <span>{experience.interviewMode}</span>
        </div>
        <div className={`flex items-center space-x-2 ${
          experience.offerStatus === 'Offer' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}>
          <span>{experience.offerStatus}</span>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{experience.experienceDetails}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <span>{experience.numberOfRounds} Rounds</span>
          </div>
        </div>
        <span className="text-gray-500 dark:text-gray-500">by {experience.userName}</span>
      </div>
    </Link>
  );
}
