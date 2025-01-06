import axios from 'axios'; // Import axios to handle form submission
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from '../components/experiences/ExperienceCard';
import ExperienceForm from '../components/experiences/ExperienceForm';

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch all experiences initially
  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://exp-ease-backend.vercel.app/api/v1/experience/allexperiencedata');
      setExperiences(response.data.experiences);
    } catch (error) {
      setError('Failed to fetch experiences');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      fetchExperiences();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://exp-ease-backend.vercel.app/api/v1/experience/company/${searchQuery}`);
      setExperiences(response.data.experiences);
    } catch (error) {
      setError('Failed to fetch experiences');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleFormSubmit = async (newExperienceData) => {
    try {
      // Send the new experience data to the backend API
      const response = await axios.post('https://exp-ease-backend.vercel.app/api/v1/experience/addExperience', newExperienceData);
      const newExperience = response.data.experience;

      // Update the experiences list with the newly added experience
      setExperiences((prevExperiences) => [newExperience, ...prevExperiences]);

      // Close the form modal after submission
      setIsFormOpen(false);
    } catch (error) {
      setError('Failed to submit new experience');
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  if (loading) {
    return <p>Loading experiences...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl  font-bold mb-8">My Experiences</h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by company name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-text-light-accent focus:border-text-light-accent"
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-6 py-3 bg-light-accent text-white rounded-md shadow-lg font-medium hover:bg-cyan-700 transition"
          >
            Search
          </button>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-6">
          {experiences.length > 0 ? (
            experiences.map((experience) => (
              <div key={experience._id}>
                <Link to={`/experience/${experience._id}`}>
                  <ExperienceCard experience={experience} />
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No experiences found.</p>
            </div>
          )}
        </div>

        {/* Share Experience Button */}
        <button
          onClick={handleOpenForm} // Open the form modal when button is clicked
          className="fixed bottom-8 right-8  bg-light-accent dark:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 dark:hover:bg-light-accent transition shadow-lg"
        >
          Share Experience
        </button>

        {/* Modal for ExperienceForm */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
              <ExperienceForm
                onClose={handleCloseForm}
                onSubmit={handleFormSubmit} // Pass handleFormSubmit to handle form submission
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencesPage;
