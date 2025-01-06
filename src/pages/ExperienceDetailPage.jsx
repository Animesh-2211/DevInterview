import axios from 'axios';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ExperienceDetailPage() {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(
          `https://exp-ease-backend.vercel.app/api/v1/experience/company/experience/${id}`
        );
        if (response.data.success) {
          setExperience(response.data.experience); // Set fetched experience data
        }
      } catch (error) {
        console.error('Error fetching experience:', error.response || error.message);
      }
    };

    if (id) {
      fetchExperience();
    }
  }, [id]);

  // Array of images to choose from
  const avatarImages = [
    'src/avatar/png/001-cat.png',
    'src/avatar/png/002-panda.png',
    'src/avatar/png/003-bear.png',
    'src/avatar/png/004-gorilla.png',
    'src/avatar/png/005-chicken.png',
    'src/avatar/png/006-dog.png',
    'src/avatar/png/007-giraffe.png',
  ];

  // Get random image from the array
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarImages.length);
    return avatarImages[randomIndex];
  };

  // Get initials of the author's name for the placeholder
  const getInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0].toUpperCase()).join('');
    return initials;
  };

  // Fallback image for author photo if not provided
  const authorImage = experience?.authorImage || getRandomAvatar();

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-8 transition-colors">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl">Experience not found</h1>
          <Link to="/experiences" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300">
            Back to experiences
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-8 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link to="/experiences" className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Experiences
        </Link>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-t-xl p-8 border-b border-gray-200 dark:border-gray-700 transition-colors">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{experience.companyName}</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">{experience.role}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {experience.tags?.map((tag, index) => (
              <span key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center">
            {/* Display author's photo or initials */}
            {typeof authorImage === 'string' ? (
              <img
                src={authorImage}
                alt={experience.author}
                className="w-12 h-12 rounded-full mr-4"
              />
            ) : (
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{getInitials(experience.author)}</span>
              </div>
            )}
            <div>
              <div className="font-semibold">{experience.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</div>
            </div>
            <div className="ml-auto flex items-center text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(experience.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 p-8 transition-colors">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {experience.experienceDetails?.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
