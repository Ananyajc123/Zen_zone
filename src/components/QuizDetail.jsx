// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const quizDetails = {
//   Autism: {
//     title: "Autism Spectrum Disorder (ASD)",
//     description:
//       "Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It is called a spectrum disorder because it encompasses a wide range of symptoms and severities. Individuals with autism may have difficulties with verbal and nonverbal communication, repetitive behaviors, and sensory sensitivities.",
//     quizLink: "https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=40&contentid=AutismQuiz",
//   },
//   PTSD: {
//     title: "Post-Traumatic Stress Disorder (PTSD)",
//     description:
//       "PTSD is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event.",
//     quizLink: "https://www.psycom.net/ptsd-test",
//   },
//   Anxiety: {
//     title: "Anxiety Disorders",
//     description:
//       "Anxiety disorders involve excessive worry, fear, or apprehension about everyday situations. Symptoms can include restlessness, increased heart rate, difficulty concentrating, and sleep disturbances.",
//     quizLink: "https://www.mind-diagnostics.org/anxiety-test",
//   },
//   Depression: {
//     title: "Depression",
//     description:
//       "Depression is a common mental health disorder characterized by persistent sadness, loss of interest in activities, and a variety of physical and emotional problems. It can affect how you feel, think, and handle daily activities.",
//     quizLink: "https://www.mind-diagnostics.org/depression-test",
//   },
// };

// export default function QuizDetail() {
//   const { quizName } = useParams(); // Get the quiz name from the URL
//   const quiz = quizDetails[quizName];

//   if (!quiz) {
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold">Quiz Not Found</h1>
//         <Link to="/" className="text-blue-500 hover:underline">
//           Go Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
//       <p className="text-lg text-gray-700 mb-6">{quiz.description}</p>
//       <a
//         href={quiz.quizLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//       >
//         Take Quiz
//       </a>
//     </div>
//   );
// }

// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const quizDetails = {
//   Autism: {
//     title: "Autism Spectrum Disorder (ASD)",
//     description:
//       "Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It is called a spectrum disorder because it encompasses a wide range of symptoms and severities. Individuals with autism may have difficulties with verbal and nonverbal communication, repetitive behaviors, and sensory sensitivities.",
//     quizLink: "https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=40&contentid=AutismQuiz",
//   },
//   PTSD: {
//     title: "Post-Traumatic Stress Disorder (PTSD)",
//     description:
//       "PTSD is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event.",
//     quizLink: "https://www.psycom.net/ptsd-test",
//   },
//   Anxiety: {
//     title: "Anxiety Disorders",
//     description:
//       "Anxiety disorders involve excessive worry, fear, or apprehension about everyday situations. Symptoms can include restlessness, increased heart rate, difficulty concentrating, and sleep disturbances.",
//     quizLink: "https://www.mind-diagnostics.org/anxiety-test",
//   },
//   Depression: {
//     title: "Depression",
//     description:
//       "Depression is a common mental health disorder characterized by persistent sadness, loss of interest in activities, and a variety of physical and emotional problems. It can affect how you feel, think, and handle daily activities.",
//     quizLink: "https://www.mind-diagnostics.org/depression-test",
//   },
// };

// export default function QuizDetail() {
//   const { quizName } = useParams(); // Get the quiz name from the URL
//   const quiz = quizDetails[quizName];

//   if (!quiz) {
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold">Quiz Not Found</h1>
//         <Link to="/" className="text-blue-500 hover:underline">
//           Go Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
//       <p className="text-lg text-gray-700 mb-6">{quiz.description}</p>
//       <a
//         href={quiz.quizLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//       >
//         Take the Quiz
//       </a>
//     </div>
//   );
// }


// 
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// // Quiz details with structured descriptions and relevant images added for each quiz option
// const quizDetails = {
//   Autism: {
//     title: "Autism Spectrum Disorder (ASD)",
//     description: (
//       <>
//         <h2 className="font-bold text-xl">What is Autism?</h2>
//         <p>Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. Individuals with autism may have a range of symptoms, from mild to severe.</p>
//         <h3 className="font-bold text-lg">Common Symptoms:</h3>
//         <ul className="list-disc pl-5">
//           <li>Difficulty with verbal and nonverbal communication.</li>
//           <li>Struggles with social interaction and understanding social cues.</li>
//           <li>Engages in repetitive behaviors (e.g., hand-flapping, rocking).</li>
//           <li>Sensory sensitivities (e.g., to light, sound, textures).</li>
//           <li>Difficulty with changes in routine or transitioning between tasks.</li>
//         </ul>
//         <h3 className="font-bold text-lg">Treatment and Support:</h3>
//         <ul className="list-disc pl-5">
//           <li>Early intervention can significantly improve outcomes.</li>
//           <li>Therapies, such as speech therapy, occupational therapy, and behavioral therapy, can help.</li>
//           <li>Support from family, friends, and professionals plays a key role in managing ASD.</li>
//         </ul>
//       </>
//     ),
//     image: "https://cdn.pixabay.com/photo/2022/01/05/11/15/brain-6916896_640.png", // Autism image
//     quizLink: "https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=40&contentid=AutismQuiz"
//   },
//   PTSD: {
//     title: "Post-Traumatic Stress Disorder (PTSD)",
//     description: (
//       <>
//         <h2 className="font-bold text-xl">What is PTSD?</h2>
//         <p>PTSD is a mental health condition that can develop after experiencing or witnessing a traumatic event. It affects how people feel, think, and respond to stress.</p>
//         <h3 className="font-bold text-lg">Key Symptoms:</h3>
//         <ul className="list-disc pl-5">
//           <li>Flashbacks or intrusive thoughts of the traumatic event.</li>
//           <li>Nightmares or sleep disturbances.</li>
//           <li>Hyperarousal (e.g., irritability, difficulty sleeping).</li>
//           <li>Emotional numbness or feeling detached from reality.</li>
//           <li>Avoidance of situations that trigger memories of the trauma.</li>
//         </ul>
//         <h3 className="font-bold text-lg">Treatment Options:</h3>
//         <ul className="list-disc pl-5">
//           <li>Therapy such as Cognitive Behavioral Therapy (CBT) and EMDR (Eye Movement Desensitization and Reprocessing).</li>
//           <li>Medications like antidepressants or anti-anxiety drugs.</li>
//           <li>Support groups or counseling for trauma survivors.</li>
//         </ul>
//       </>
//     ),
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpul5edVRkmp7T9es6wgmSfNyVsgSIEpuFd3B19Un8iTfmsty-uZg3odS-NshyOs8MuE&usqp=CAU", // PTSD image
//     quizLink: "https://www.psycom.net/ptsd-test"
//   },
//   Anxiety: {
//     title: "Anxiety Disorders",
//     description: (
//       <>
//         <h2 className="font-bold text-xl">What is Anxiety?</h2>
//         <p>Anxiety disorders involve excessive worry and fear, often leading to emotional and physical distress. They can interfere with daily activities and relationships.</p>
//         <h3 className="font-bold text-lg">Common Symptoms:</h3>
//         <ul className="list-disc pl-5">
//           <li>Persistent worrying or anxiety about daily tasks.</li>
//           <li>Physical signs like increased heart rate, sweating, dizziness, or stomachaches.</li>
//           <li>Restlessness and difficulty relaxing.</li>
//           <li>Sleep disturbances, including insomnia or excessive sleeping.</li>
//           <li>Difficulty concentrating or feeling "on edge."</li>
//         </ul>
//         <h3 className="font-bold text-lg">Treatment and Management:</h3>
//         <ul className="list-disc pl-5">
//           <li>Cognitive Behavioral Therapy (CBT) is highly effective for anxiety disorders.</li>
//           <li>Medications such as SSRIs (Selective Serotonin Reuptake Inhibitors) or benzodiazepines may be prescribed.</li>
//           <li>Lifestyle changes, including regular physical activity, meditation, and stress-management techniques.</li>
//         </ul>
//       </>
//     ),
//     image: "https://www.shutterstock.com/image-vector/depressed-man-sitting-on-floor-260nw-2231768289.jpg", // Anxiety image
//     quizLink: "https://www.mind-diagnostics.org/anxiety-test"
//   },
//   Depression: {
//     title: "Depression",
//     description: (
//       <>
//         <h2 className="font-bold text-xl">What is Depression?</h2>
//         <p>Depression is a mood disorder that causes persistent feelings of sadness and loss of interest in activities. It affects how a person thinks, feels, and handles daily tasks.</p>
//         <h3 className="font-bold text-lg">Key Symptoms:</h3>
//         <ul className="list-disc pl-5">
//           <li>Persistent sadness, hopelessness, or feeling "empty."</li>
//           <li>Loss of interest in activities once enjoyed.</li>
//           <li>Difficulty concentrating or making decisions.</li>
//           <li>Changes in appetite or weight (either loss or gain).</li>
//           <li>Thoughts of death or suicide.</li>
//         </ul>
//         <h3 className="font-bold text-lg">Treatment Options:</h3>
//         <ul className="list-disc pl-5">
//           <li>Antidepressant medications and therapy (especially CBT).</li>
//           <li>Exercise, good sleep hygiene, and social support.</li>
//           <li>Mindfulness, meditation, and relaxation exercises.</li>
//         </ul>
//       </>
//     ),
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHe7XLY67wITZZ8UjsXF41gEplarlDS3Mgw&s", // Depression image
//     quizLink: "https://www.mind-diagnostics.org/depression-test"
//   }
// };

// export default function QuizDetail() {
//   const { quizName } = useParams();
//   const quiz = quizDetails[quizName];

//   if (!quiz) {
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold">Quiz Not Found</h1>
//         <Link to="/" className="text-blue-500 hover:underline">
//           Go Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="quiz-detail-page">
//       <div className="content-wrapper flex flex-col md:flex-row justify-between items-center p-6">
//         <div className="flex-1">
//           <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
//           <div className="mb-6">
//             {quiz.description} {/* Here the HTML content is rendered */}
//           </div>
//           <a
//             href={quiz.quizLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-4"
//           >
//             Take the Quiz
//           </a>
//         </div>
//         <div className="flex-none ml-6 mt-6 md:mt-0">
//           <img src={quiz.image} alt={quiz.title} className="w-[240px] h-[240px] object-cover rounded-lg shadow-lg" /> {/* Image size set to 240px */}
//         </div>
//       </div>
//       <div className="flex justify-center mb-6">
//         <Link to="/" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
//           Go to Home Page
//         </Link>
//       </div>
//     </div>
//   );
// }
// 
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Quiz details with structured descriptions and relevant images added for each quiz option
const quizDetails = {
  Autism: {
    title: "Autism Spectrum Disorder (ASD)",
    description: (
      <>
        <h2 className="font-bold text-xl">What is Autism?</h2>
        <p>Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. Individuals with autism may have a range of symptoms, from mild to severe.</p>
        <h3 className="font-bold text-lg">Common Symptoms:</h3>
        <ul className="list-disc pl-5">
          <li>Difficulty with verbal and nonverbal communication.</li>
          <li>Struggles with social interaction and understanding social cues.</li>
          <li>Engages in repetitive behaviors (e.g., hand-flapping, rocking).</li>
          <li>Sensory sensitivities (e.g., to light, sound, textures).</li>
          <li>Difficulty with changes in routine or transitioning between tasks.</li>
        </ul>
        <h3 className="font-bold text-lg">Treatment and Support:</h3>
        <ul className="list-disc pl-5">
          <li>Early intervention can significantly improve outcomes.</li>
          <li>Therapies, such as speech therapy, occupational therapy, and behavioral therapy, can help.</li>
          <li>Support from family, friends, and professionals plays a key role in managing ASD.</li>
        </ul>
      </>
    ),
    image: "https://cdn.pixabay.com/photo/2022/01/05/11/15/brain-6916896_640.png", // Autism image
    quizLink: "https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=40&contentid=AutismQuiz"
  },
  PTSD: {
    title: "Post-Traumatic Stress Disorder (PTSD)",
    description: (
      <>
        <h2 className="font-bold text-xl">What is PTSD?</h2>
        <p>PTSD is a mental health condition that can develop after experiencing or witnessing a traumatic event. It affects how people feel, think, and respond to stress.</p>
        <h3 className="font-bold text-lg">Key Symptoms:</h3>
        <ul className="list-disc pl-5">
          <li>Flashbacks or intrusive thoughts of the traumatic event.</li>
          <li>Nightmares or sleep disturbances.</li>
          <li>Hyperarousal (e.g., irritability, difficulty sleeping).</li>
          <li>Emotional numbness or feeling detached from reality.</li>
          <li>Avoidance of situations that trigger memories of the trauma.</li>
        </ul>
        <h3 className="font-bold text-lg">Treatment Options:</h3>
        <ul className="list-disc pl-5">
          <li>Therapy such as Cognitive Behavioral Therapy (CBT) and EMDR (Eye Movement Desensitization and Reprocessing).</li>
          <li>Medications like antidepressants or anti-anxiety drugs.</li>
          <li>Support groups or counseling for trauma survivors.</li>
        </ul>
      </>
    ),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpul5edVRkmp7T9es6wgmSfNyVsgSIEpuFd3B19Un8iTfmsty-uZg3odS-NshyOs8MuE&usqp=CAU", // PTSD image
    quizLink: "https://www.psycom.net/ptsd-test"
  },
  Anxiety: {
    title: "Anxiety Disorders",
    description: (
      <>
        <h2 className="font-bold text-xl">What is Anxiety?</h2>
        <p>Anxiety disorders involve excessive worry and fear, often leading to emotional and physical distress. They can interfere with daily activities and relationships.</p>
        <h3 className="font-bold text-lg">Common Symptoms:</h3>
        <ul className="list-disc pl-5">
          <li>Persistent worrying or anxiety about daily tasks.</li>
          <li>Physical signs like increased heart rate, sweating, dizziness, or stomachaches.</li>
          <li>Restlessness and difficulty relaxing.</li>
          <li>Sleep disturbances, including insomnia or excessive sleeping.</li>
          <li>Difficulty concentrating or feeling "on edge."</li>
        </ul>
        <h3 className="font-bold text-lg">Treatment and Management:</h3>
        <ul className="list-disc pl-5">
          <li>Cognitive Behavioral Therapy (CBT) is highly effective for anxiety disorders.</li>
          <li>Medications such as SSRIs (Selective Serotonin Reuptake Inhibitors) or benzodiazepines may be prescribed.</li>
          <li>Lifestyle changes, including regular physical activity, meditation, and stress-management techniques.</li>
        </ul>
      </>
    ),
    image: "https://www.shutterstock.com/image-vector/depressed-man-sitting-on-floor-260nw-2231768289.jpg", // Anxiety image
    quizLink: "https://www.mind-diagnostics.org/anxiety-test"
  },
  Depression: {
    title: "Depression",
    description: (
      <>
        <h2 className="font-bold text-xl">What is Depression?</h2>
        <p>Depression is a mood disorder that causes persistent feelings of sadness and loss of interest in activities. It affects how a person thinks, feels, and handles daily tasks.</p>
        <h3 className="font-bold text-lg">Key Symptoms:</h3>
        <ul className="list-disc pl-5">
          <li>Persistent sadness, hopelessness, or feeling "empty."</li>
          <li>Loss of interest in activities once enjoyed.</li>
          <li>Difficulty concentrating or making decisions.</li>
          <li>Changes in appetite or weight (either loss or gain).</li>
          <li>Thoughts of death or suicide.</li>
        </ul>
        <h3 className="font-bold text-lg">Treatment Options:</h3>
        <ul className="list-disc pl-5">
          <li>Antidepressant medications and therapy (especially CBT).</li>
          <li>Exercise, good sleep hygiene, and social support.</li>
          <li>Mindfulness, meditation, and relaxation exercises.</li>
        </ul>
      </>
    ),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHe7XLY67wITZZ8UjsXF41gEplarlDS3Mgw&s", // Depression image
    quizLink: "https://www.mind-diagnostics.org/depression-test"
  }
};

export default function QuizDetail() {
  const { quizName } = useParams();
  const quiz = quizDetails[quizName];

  // Background image for the quiz page
  const backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s"; // You can change this URL per quiz if needed

  if (!quiz) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Quiz Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div
      className="quiz-detail-page"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Apply the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingBottom: '3rem', // To ensure footer doesn't overlap
      }}
    >
      <div className="content-wrapper flex flex-col md:flex-row justify-between items-center p-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
          <div className="mb-6">
            {quiz.description} {/* Render the content from the description */}
          </div>
          <a
            href={quiz.quizLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-4"
          >
            Take the Quiz
          </a>
        </div>
        <div className="flex-none ml-6 mt-6 md:mt-0">
          <img src={quiz.image} alt={quiz.title} className="w-[240px] h-[240px] object-cover rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <Link to="/" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
