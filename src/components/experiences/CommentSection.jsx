// import React, { useState } from 'react';
// import { MessageSquare, Send } from 'lucide-react';

// export default function CommentSection({ comments }) {
//   const [newComment, setNewComment] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle comment submission
//     setNewComment('');
//   };

//   return (
//     <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 transition-colors">
//       <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
//         <MessageSquare className="w-5 h-5 mr-2" />
//         Comments ({comments.length})
//       </h3>

//       <form onSubmit={handleSubmit} className="mb-8">
//         <div className="flex gap-4">
//           <input
//             type="text"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Add a comment..."
//             className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 dark:text-white transition-colors"
//           />
//           <button
//             type="submit"
//             className="bg-cyan-600 dark:bg-cyan-400 text-white dark:text-black px-4 py-2 rounded-lg hover:bg-cyan-700 dark:hover:bg-cyan-300 transition flex items-center"
//           >
//             <Send className="w-4 h-4 mr-2" />
//             Post
//           </button>
//         </div>
//       </form>

//       <div className="space-y-6">
//         {comments.map((comment) => (
//           <div key={comment.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors">
//             <div className="flex justify-between mb-2">
//               <span className="font-semibold text-gray-900 dark:text-white">{comment.author}</span>
//               <span className="text-gray-500 dark:text-gray-400 text-sm">{comment.date}</span>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }