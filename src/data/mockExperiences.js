export const MOCK_EXPERIENCES = [
  {
    id: 1,
    company: 'Google',
    role: 'Senior Software Engineer',
    date: '2024-02-15',
    content: `The interview process at Google was comprehensive and well-structured. Here's my detailed experience:

1. Initial Screen (45 minutes):
- Basic algorithmic question about array manipulation
- Discussion about my previous work experience
- Quick architecture discussion

2. Technical Rounds (4 interviews, 45 minutes each):
- First Round: Deep dive into distributed systems
- Second Round: Dynamic programming challenge
- Third Round: System design (designing Google Drive)
- Fourth Round: Behavioral and leadership questions`,
    upvotes: 124,
    comments: 15,
    author: 'Sarah Chen',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    tags: ['System Design', 'Algorithms', 'FAANG'],
    salary: '220k',
    commentsList: [
      { id: 1, author: 'John Doe', text: 'Really helpful insights!', date: '2024-02-16' },
      { id: 2, author: 'Jane Smith', text: 'What resources did you use to prepare?', date: '2024-02-17' }
    ]
  },
  {
    id: 2,
    company: 'Microsoft',
    role: 'Full Stack Developer',
    date: '2024-02-10',
    content: `Had a great experience interviewing for the Azure team. The process was well-structured and focused on real-world problem-solving.

Key Areas Tested:
- System Design: Designed a scalable notification system
- Coding: Two medium-level algorithmic questions
- Behavioral: Team collaboration and project management
- Architecture: Microservices and cloud patterns`,
    upvotes: 89,
    comments: 8,
    author: 'James Wilson',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    tags: ['Frontend', 'Backend', 'Cloud'],
    salary: '180k',
    commentsList: [
      { id: 3, author: 'Alice Johnson', text: 'The system design part seems challenging', date: '2024-02-11' }
    ]
  },
  {
    id: 3,
    company: 'Meta',
    role: 'Product Engineer',
    date: '2024-02-08',
    content: 'Interviewed for the Instagram team. Heavy focus on React, performance optimization, and state management...',
    upvotes: 156,
    comments: 12,
    author: 'David Park',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    tags: ['Frontend', 'FAANG', 'React'],
    salary: '200k',
    commentsList: []
  }
];