import { Building } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const COMPANY_SALARIES = [
  { company: 'Google', salary: '₹18.0L', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400' },
  { company: 'Meta', salary: '200k', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400' },
  { company: 'Microsoft', salary: '180k', logo: 'https://images.unsplash.com/photo-1642132652075-2b0c0ff74dc7?w=400' },
  { company: 'Amazon', salary: '190k', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400' },
  { company: 'Apple', salary: '210k', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400' },
];

export default function CompanySalarySlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Average Starting Salaries
          <span className="text-light-accent dark:text-cyan-400"> for Fresh Graduates</span>
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 gap-8 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...COMPANY_SALARIES, ...COMPANY_SALARIES].map((company, index) => (
            <div 
              key={`${company.company}-${index}`}
              className="flex-shrink-0 w-72 bg-gray-50 dark:bg-gray-700 rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                  <Building className="w-6 h-6 text-light-accent dark:text-cyan-400" />
                </div>
                <span className="flex items-center text-2xl font-bold text-light-accent dark:text-cyan-400">
                  {/* <DollarSign className="w-5 h-5" /> */}
                  {company.salary}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{company.company}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Base salary for Software Engineers</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}