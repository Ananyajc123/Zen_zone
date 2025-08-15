// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// const TherapyTypes = () => {
//   const therapyTypes = [
//     {
//       name: "Cognitive Behavioral Therapy (CBT)",
//       description: "A structured approach that helps you identify and change negative thought patterns and behaviors. CBT is particularly effective for anxiety, depression, and stress management.",
//       link: "https://www.nimh.nih.gov/health/topics/psychotherapies"
//     },
//     {
//       name: "Mindfulness-Based Therapy",
//       description: "Combines meditation practices with psychological techniques to reduce stress and anxiety, increase self-awareness, and improve emotional regulation.",
//       link: "https://www.apa.org/topics/mindfulness"
//     },
//     {
//       name: "Art Therapy",
//       description: "Uses creative expression through art to improve mental health and emotional well-being. Particularly helpful for trauma, stress, and emotional processing.",
//       link: "https://arttherapy.org/"
//     },
//     {
//       name: "Family Therapy",
//       description: "Helps family members improve communication and resolve conflicts. Effective for relationship issues, behavioral problems, and family dynamics.",
//       link: "https://www.aamft.org/About_AAMFT/About_Marriage_and_Family_Therapists.aspx"
//     },
//     {
//       name: "Psychodynamic Therapy",
//       description: "Focuses on understanding how past experiences influence present behavior and relationships. Helpful for deep-seated emotional issues and personal growth.",
//       link: "https://www.apa.org/ptsd-guideline/treatments/psychodynamic"
//     }
//   ];

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8">Types of Therapy</h1>
//       <div className="space-y-6">
//         {therapyTypes.map((therapy, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-start">
//               <h2 className="text-xl font-semibold mb-3">{therapy.name}</h2>
//               <a
//                 href={therapy.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-blue-600 hover:text-blue-800"
//               >
//                 Learn More <ExternalLink size={16} className="ml-1" />
//               </a>
//             </div>
//             <p className="text-gray-600 leading-relaxed">{therapy.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TherapyTypes;

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // For navigation to home page

const TherapyTypes = () => {
  const navigate = useNavigate();

  const therapyTypes = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "A structured approach that helps you identify and change negative thought patterns and behaviors. CBT is particularly effective for anxiety, depression, and stress management.",
      link: "https://www.nimh.nih.gov/health/topics/psychotherapies"
    },
    {
      name: "Mindfulness-Based Therapy",
      description: "Combines meditation practices with psychological techniques to reduce stress and anxiety, increase self-awareness, and improve emotional regulation.",
      link: "https://www.apa.org/topics/mindfulness"
    },
    {
      name: "Art Therapy",
      description: "Uses creative expression through art to improve mental health and emotional well-being. Particularly helpful for trauma, stress, and emotional processing.",
      link: "https://arttherapy.org/"
    },
    {
      name: "Family Therapy",
      description: "Helps family members improve communication and resolve conflicts. Effective for relationship issues, behavioral problems, and family dynamics.",
      link: "https://www.aamft.org/About_AAMFT/About_Marriage_and_Family_Therapists.aspx"
    },
    {
      name: "Psychodynamic Therapy",
      description: "Focuses on understanding how past experiences influence present behavior and relationships. Helpful for deep-seated emotional issues and personal growth.",
      link: "https://www.apa.org/ptsd-guideline/treatments/psychodynamic"
    }
  ];

  // Navigate to home page
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div 
      className="p-6 max-w-4xl mx-auto bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${require('../assets/BackGround2.jpg')})` }}  // Set background image
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Types of Therapy</h1>
      
      <div className="space-y-6">
        {therapyTypes.map((therapy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold mb-3">{therapy.name}</h2>
              <a
                href={therapy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                Learn More <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <p className="text-gray-600 leading-relaxed">{therapy.description}</p>
          </div>
        ))}
      </div>

      {/* Go to Home Button */}
      <div className="mt-8 text-center">
        <button
          onClick={goToHome}
          className="w-full md:w-1/4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default TherapyTypes;
