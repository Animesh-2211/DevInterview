// import { Filter } from 'lucide-react';
// import React from 'react';

// const CATEGORIES = ['All', 'FAANG', 'Startups', 'Enterprise', 'Remote'];

// export default function CategoryFilter({ selected, onSelect }) {
//   return (
//     <div className="flex items-center space-x-4">
//       <Filter className="text-gray-400 w-5 h-5" />
//       <div className="flex flex-wrap gap-2">
//         {CATEGORIES.map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg transition ${
//               selected === category
//                 ? 'bg-light-accent dark:bg-cyan-400 text-white dark:text-black'
//                 : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
//             }`}
//             onClick={() => onSelect(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }