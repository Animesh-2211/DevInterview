import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExperienceForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    companyName: '',
    collegeName: '',
    onCampusOrOffCampus: 'On-Campus',
    yearOfHiring: new Date().getFullYear(),
    experienceDetails: '',
    image: 'https://img.freepik.com/free-vector/augmented-reality-urban-modeling-illustration_335657-372.jpg',
    numberOfRounds: 1,
    role: '',
    interviewMode: 'Online',
    offerStatus: 'Offer'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend API for submission
      const response = await fetch('https://exp-ease-backend.vercel.app/api/v1/experience/experienceform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      // Optionally handle the response data if needed
      const responseData = await response.json();
      console.log('Form submitted successfully:', responseData);

      // Clear form data after successful submission
      setFormData({
        userName: '',
        companyName: '',
        collegeName: '',
        onCampusOrOffCampus: 'On-Campus',
        yearOfHiring: new Date().getFullYear(),
        experienceDetails: '',
        image: 'https://img.freepik.com/free-vector/augmented-reality-urban-modeling-illustration_335657-372.jpg',
        numberOfRounds: 1,
        role: '',
        interviewMode: 'Online',
        offerStatus: 'Offer'
      });

      // Navigate to the experiences page and refresh the page
      navigate('/experiences');
      window.location.reload(); // Refresh the page to reflect updated data

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-light-background dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Share Your Interview Experience</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="userName"
                  required
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  College Name
                </label>
                <input
                  type="text"
                  name="collegeName"
                  required
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interview Type
                </label>
                <select
                  name="onCampusOrOffCampus"
                  required
                  value={formData.onCampusOrOffCampus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                >
                  <option value="On-Campus">On-Campus</option>
                  <option value="Off-Campus">Off-Campus</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Year of Hiring
                </label>
                <input
                  type="number"
                  name="yearOfHiring"
                  required
                  min="2000"
                  max={new Date().getFullYear()}
                  value={formData.yearOfHiring}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Rounds
                </label>
                <input
                  type="number"
                  name="numberOfRounds"
                  required
                  min="1"
                  value={formData.numberOfRounds}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interview Mode
                </label>
                <select
                  name="interviewMode"
                  required
                  value={formData.interviewMode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                >
                  <option value="Walk-In">Walk-In</option>
                  <option value="Online">Online</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Offer Status
                </label>
                <select
                  name="offerStatus"
                  required
                  value={formData.offerStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                >
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Experience Details
              </label>
              <textarea
                name="experienceDetails"
                required
                rows="6"
                value={formData.experienceDetails}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-light-accent dark:focus:ring-cyan-400"
                placeholder="Share your interview experience in detail..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-light-accent dark:bg-cyan-400 text-white dark:text-black rounded-lg font-medium hover:bg-light-primary dark:hover:bg-cyan-300 transition-colors duration-300"
              >
                Submit Experience
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
