import React from 'react';
import { Link } from 'react-router-dom';

export default function QuizPage() {
  const quizzes = ['Autism', 'PTSD', 'Anxiety', 'Depression'];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Select a Quiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizzes.map((quiz) => (
          <Link
            key={quiz}
            to={`/quiz/${quiz}`}
            className="block bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600"
          >
            {quiz}
          </Link>
        ))}
      </div>
    </div>
  );
}
