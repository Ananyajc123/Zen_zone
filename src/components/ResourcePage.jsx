
// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// // Define resource data with unique descriptions and multiple related links for each resource
// const resourceData = {
//   family: {
//     description: 'Supporting the mental health of family and friends is essential for building strong, healthy relationships. Whether it\'s offering emotional support, encouraging therapy, or simply being there for each other, understanding and empathy are key. This section provides resources on how to support those you care about in their mental health journey.',
//     links: [
//       { 
//         label: 'How to Support a Family Member with Anxiety',
//         to: 'https://www.nami.org/Your-Journey/Family-Members-and-Caregivers',
//         external: true 
//       },
//       { 
//         label: 'Helping Friends Cope with Depression',
//         to: 'https://www.mhanational.org/supporting-others',
//         external: true 
//       },
//       { 
//         label: 'Understanding PTSD in Loved Ones',
//         to: 'https://www.ptsd.va.gov/family/',
//         external: true 
//       },
//       { 
//         label: 'Supporting Children with Mental Health Challenges',
//         to: 'https://www.aacap.org/AACAP/Families_and_Youth/Resources/Home.aspx',
//         external: true 
//       },
//       { 
//         label: 'Effective Communication for Family Mental Health',
//         to: 'https://www.apa.org/topics/families/communication',
//         external: true 
//       },
//       { 
//         label: 'Caring for a Family Member with Chronic Stress',
//         to: 'https://www.stress.org/stress-effects',
//         external: true 
//       },
//       { 
//         label: 'The Role of Family in Healing Trauma',
//         to: 'https://www.nctsn.org/',
//         external: true 
//       }
//     ]
//   },
//   autism: {
//     description: 'Autism spectrum disorder (ASD) affects how a person perceives and interacts with the world. Individuals with autism may face challenges with social interactions and communication, but with the right support, they can lead fulfilling lives. This section provides resources for understanding autism and supporting those on the spectrum.',
//     links: [
//       { 
//         label: 'Understanding Autism Spectrum Disorder',
//         to: 'https://www.autismspeaks.org/tool-kit',
//         external: true 
//       },
//       { 
//         label: 'Building an Inclusive Environment for Autism',
//         to: 'https://www.cdc.gov/ncbddd/autism/',
//         external: true 
//       },
//       { 
//         label: 'Communication Strategies for Children with Autism',
//         to: 'https://autismsociety.org/',
//         external: true 
//       },
//       { 
//         label: 'Therapies for Autism Spectrum Disorder',
//         to: 'https://www.autism.org/',
//         external: true 
//       },
//       { 
//         label: 'How to Support a Friend or Family Member with Autism',
//         to: 'https://researchautism.org/',
//         external: true 
//       },
//       { 
//         label: 'Autism and Mental Health: What You Need to Know',
//         to: 'https://www.autism.org/',
//         external: true 
//       },
//       { 
//         label: 'Social Skills Training for People with Autism',
//         to: 'https://researchautism.org/how-we-help/education/',
//         external: true 
//       }
//     ]
//   },
//   anxiety: {
//     description: 'Anxiety is a common mental health issue that affects millions of people. It can manifest in various forms, from general worries to more intense conditions like panic disorder or social anxiety. This section offers resources to understand anxiety and explore strategies for managing it.',
//     links: [
//       { 
//         label: 'Understanding Anxiety and Its Symptoms',
//         to: 'https://adaa.org/',
//         external: true 
//       },
//       { 
//         label: 'Coping Strategies for Generalized Anxiety Disorder',
//         to: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
//         external: true 
//       },
//       { 
//         label: 'How to Overcome Panic Attacks',
//         to: 'https://www.beyondblue.org.au/the-facts/anxiety',
//         external: true 
//       },
//       { 
//         label: 'Breathing Exercises to Reduce Anxiety',
//         to: 'https://www.nhs.uk/mental-health/conditions/anxiety/',
//         external: true 
//       },
//       { 
//         label: 'Anxiety in Children: How to Help',
//         to: 'https://www.calmclinic.com/anxiety',
//         external: true 
//       },
//       { 
//         label: 'Using Cognitive Behavioral Therapy (CBT) for Anxiety',
//         to: 'https://www.anxietyuk.org.uk/',
//         external: true 
//       },
//       { 
//         label: 'Anxiety and Social Media: How to Manage',
//         to: 'https://www.mhanational.org/social-media-and-mental-health',
//         external: true 
//       }
//     ]
//   },
//   ptsd: {
//     description: 'Post-Traumatic Stress Disorder (PTSD) can occur after an individual experiences or witnesses a traumatic event. Symptoms may include flashbacks, nightmares, and heightened anxiety. This section provides resources on how to cope with PTSD and access treatment options.',
//     links: [
//       { 
//         label: 'What is PTSD and How Does It Affect You?',
//         to: 'https://www.ptsd.va.gov/',
//         external: true 
//       },
//       { 
//         label: 'Coping Mechanisms for PTSD Symptoms',
//         to: 'https://www.ptsduk.org/',
//         external: true 
//       },
//       { 
//         label: 'Therapies for PTSD Treatment',
//         to: 'https://www.childtrauma.com/',
//         external: true 
//       },
//       { 
//         label: 'How to Help a Loved One with PTSD',
//         to: 'https://istss.org/',
//         external: true 
//       },
//       { 
//         label: 'Mindfulness for PTSD Relief',
//         to: 'https://www.emdria.org/',
//         external: true 
//       },
//       { 
//         label: 'The Role of EMDR in Treating PTSD',
//         to: 'https://www.giftfromwithin.org/',
//         external: true 
//       },
//       { 
//         label: 'Support Groups for PTSD Survivors',
//         to: 'https://ptsdusa.org/',
//         external: true 
//       }
//     ]
//   },
//   depression: {
//     description: 'Depression is more than just feeling sad; it is a serious mental health condition that affects every part of a person\'s life. This section offers resources on how to recognize the signs of depression and find effective treatments.',
//     links: [
//       { 
//         label: 'Understanding Depression and Its Symptoms',
//         to: 'https://www.dbsalliance.org/',
//         external: true 
//       },
//       { 
//         label: 'How to Manage Major Depression',
//         to: 'https://www.mhanational.org/conditions/depression',
//         external: true 
//       },
//       { 
//         label: 'The Importance of Therapy for Depression',
//         to: 'https://www.blackdoginstitute.org.au/',
//         external: true 
//       },
//       { 
//         label: 'Cognitive Behavioral Therapy (CBT) for Depression',
//         to: 'https://www.nimh.nih.gov/health/topics/depression',
//         external: true 
//       },
//       { 
//         label: 'How to Talk to Someone with Depression',
//         to: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/',
//         external: true 
//       },
//       { 
//         label: 'Self-Care Strategies for Managing Depression',
//         to: 'https://www.mayoclinic.org/diseases-conditions/depression/',
//         external: true 
//       },
//       { 
//         label: 'Exercise as a Treatment for Depression',
//         to: 'https://www.health.harvard.edu/mind-and-mood/exercise-is-an-all-natural-treatment-to-fight-depression',
//         external: true 
//       }
//     ]
//   },
//   therapy: {
//     description: 'Therapy is a treatment for mental health issues that involves talking to a trained therapist. Therapy helps individuals understand and address their emotions, thoughts, and behaviors. There are many types of therapy, including Cognitive Behavioral Therapy (CBT), psychotherapy, and more. This section provides resources for understanding therapy and finding a suitable therapist.',
//     links: [
//       { 
//         label: 'How Therapy Can Help Your Mental Health',
//         to: 'https://www.apa.org/topics/psychotherapy',
//         external: true 
//       },
//       { 
//         label: 'Cognitive Behavioral Therapy (CBT) Explained',
//         to: 'https://www.goodtherapy.org/',
//         external: true 
//       },
//       { 
//         label: 'Finding the Right Therapist for You',
//         to: 'https://www.psychologytoday.com/us/therapists',
//         external: true 
//       },
//       { 
//         label: 'The Benefits of Group Therapy',
//         to: 'https://www.agpa.org/',
//         external: true 
//       },
//       { 
//         label: 'Art Therapy: Exploring Emotions Through Creativity',
//         to: 'https://arttherapy.org/',
//         external: true 
//       },
//       { 
//         label: 'What to Expect in Therapy Sessions',
//         to: 'https://www.beckinstitute.org/',
//         external: true 
//       },
//       { 
//         label: 'Therapies for Trauma and PTSD',
//         to: 'https://www.nationaltraumaprofessionals.org/',
//         external: true 
//       }
//     ]
//   }
// };

// const ResourcePage = () => {
//   const { resourceName } = useParams();

//   const resource = resourceData[resourceName] || {
//     description: 'No resource found.',
//     links: []
//   };

//   const capitalizedHeading = resourceName
//     ? resourceName.replace(/([A-Z])/g, ' $1').toUpperCase()
//     : 'RESOURCE PAGE';

//   return (
//     <div 
//       className="w-full min-h-screen flex flex-col bg-white relative"
//       style={{
//         backgroundImage: `url('/api/placeholder/1920/1080')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-50" />
      
//       {/* Content */}
//       <div className="relative z-10 flex-1 flex flex-col justify-center items-center p-8">
//         <div className="w-full max-w-4xl bg-white bg-opacity-95 rounded-lg shadow-xl p-8">
//           {/* Heading */}
//           <h2 className="text-4xl font-semibold mb-6 text-center uppercase text-gray-800">
//             {capitalizedHeading}
//           </h2>

//           {/* Detailed Description */}
//           <p className="text-lg text-gray-700 mb-8 px-4 max-w-3xl mx-auto text-center">
//             {resource.description}
//           </p>

//           {/* Resource Links */}
//           <div className="w-full max-w-3xl mx-auto">
//             <h3 className="text-2xl font-medium mb-4 text-center text-gray-800">
//               Related Resources
//             </h3>
//             <ul className="space-y-4">
//               {resource.links.length > 0 ? (
//                 resource.links.map((link, index) => (
//                   <li key={index} className="text-center">
//                     {link.external ? (
//                       <a 
//                         href={link.to} 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
//                       >
//                         {link.label}
//                       </a>
//                     ) : (
//                       <Link 
//                         to={link.to} 
//                         className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
//                       >
//                         {link.label}
//                       </Link>
//                     )}
//                   </li>
//                 ))
//               ) : (
//                 <li className="text-center text-gray-600">No related resources available.</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Go to Home Button */}
//       <div className="relative z-10 w-full flex justify-center p-8">
//         <Link 
//           to="/" 
//           className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-lg"
//         >
//           Go to Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ResourcePage;

import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Ensure you import Link
import BackGround2 from '../assets/BackGround2.jpg'; // Correct the relative path

const resourceData = {
  family: {
    description: "Supporting the mental health of family and friends is essential for building strong, healthy relationships. Whether it's offering emotional support, encouraging therapy, or simply being there for each other, understanding and empathy are key. This section provides resources on how to support those you care about in their mental health journey.",
    links: [
      { label: "How to Support a Family Member with Anxiety", to: "https://www.nami.org/Your-Journey/Family-Members-and-Caregivers", external: true },
      { label: "Helping Friends Cope with Depression", to: "https://www.mhanational.org/supporting-others", external: true },
      { label: "Understanding PTSD in Loved Ones", to: "https://www.ptsd.va.gov/family/", external: true },
      { label: "Supporting Children with Mental Health Challenges", to: "https://www.aacap.org/AACAP/Families_and_Youth/Resources/Home.aspx", external: true },
      { label: "Effective Communication for Family Mental Health", to: "https://www.apa.org/topics/families/communication", external: true },
      { label: "Caring for a Family Member with Chronic Stress", to: "https://www.stress.org/stress-effects", external: true },
      { label: "The Role of Family in Healing Trauma", to: "https://www.nctsn.org/", external: true }
    ]
  },
  autism: {
    description: "Autism spectrum disorder (ASD) affects how a person perceives and interacts with the world. Individuals with autism may face challenges with social interactions and communication, but with the right support, they can lead fulfilling lives. This section provides resources for understanding autism and supporting those on the spectrum.",
    links: [
      { label: "Understanding Autism Spectrum Disorder", to: "https://www.autismspeaks.org/tool-kit", external: true },
      { label: "Building an Inclusive Environment for Autism", to: "https://www.cdc.gov/ncbddd/autism/", external: true },
      { label: "Communication Strategies for Children with Autism", to: "https://autismsociety.org/", external: true },
      { label: "Therapies for Autism Spectrum Disorder", to: "https://www.autism.org/", external: true },
      { label: "How to Support a Friend or Family Member with Autism", to: "https://researchautism.org/", external: true },
      { label: "Autism and Mental Health: What You Need to Know", to: "https://www.autism.org/", external: true },
      { label: "Social Skills Training for People with Autism", to: "https://researchautism.org/how-we-help/education/", external: true }
    ]
  },
  anxiety: {
    description: "Anxiety is a common mental health issue that affects millions of people. It can manifest in various forms, from general worries to more intense conditions like panic disorder or social anxiety. This section offers resources to understand anxiety and explore strategies for managing it.",
    links: [
      { label: "Understanding Anxiety and Its Symptoms", to: "https://adaa.org/", external: true },
      { label: "Coping Strategies for Generalized Anxiety Disorder", to: "https://www.nimh.nih.gov/health/topics/anxiety-disorders", external: true },
      { label: "How to Overcome Panic Attacks", to: "https://www.beyondblue.org.au/the-facts/anxiety", external: true },
      { label: "Breathing Exercises to Reduce Anxiety", to: "https://www.nhs.uk/mental-health/conditions/anxiety/", external: true },
      { label: "Anxiety in Children: How to Help", to: "https://www.calmclinic.com/anxiety", external: true },
      { label: "Using Cognitive Behavioral Therapy (CBT) for Anxiety", to: "https://www.anxietyuk.org.uk/", external: true },
      { label: "Anxiety and Social Media: How to Manage", to: "https://www.mhanational.org/social-media-and-mental-health", external: true }
    ]
  },
  ptsd: {
    description: "Post-Traumatic Stress Disorder (PTSD) can occur after an individual experiences or witnesses a traumatic event. Symptoms may include flashbacks, nightmares, and heightened anxiety. This section provides resources on how to cope with PTSD and access treatment options.",
    links: [
      { label: "What is PTSD and How Does It Affect You?", to: "https://www.ptsd.va.gov/", external: true },
      { label: "Coping Mechanisms for PTSD Symptoms", to: "https://www.ptsduk.org/", external: true },
      { label: "Therapies for PTSD Treatment", to: "https://www.childtrauma.com/", external: true },
      { label: "How to Help a Loved One with PTSD", to: "https://istss.org/", external: true },
      { label: "Mindfulness for PTSD Relief", to: "https://www.emdria.org/", external: true },
      { label: "The Role of EMDR in Treating PTSD", to: "https://www.giftfromwithin.org/", external: true },
      { label: "Support Groups for PTSD Survivors", to: "https://ptsdusa.org/", external: true }
    ]
  },
  depression: {
    description: "Depression is more than just feeling sad; it is a serious mental health condition that affects every part of a person’s life. This section offers resources on how to recognize the signs of depression and find effective treatments.",
    links: [
      { label: "Understanding Depression and Its Symptoms", to: "https://www.dbsalliance.org/", external: true },
      { label: "How to Manage Major Depression", to: "https://www.mhanational.org/conditions/depression", external: true },
      { label: "The Importance of Therapy for Depression", to: "https://www.blackdoginstitute.org.au/", external: true },
      { label: "Cognitive Behavioral Therapy (CBT) for Depression", to: "https://www.nimh.nih.gov/health/topics/depression", external: true },
      { label: "How to Talk to Someone with Depression", to: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/", external: true },
      { label: "Self-Care Strategies for Managing Depression", to: "https://www.mayoclinic.org/diseases-conditions/depression/", external: true },
      { label: "Exercise as a Treatment for Depression", to: "https://www.health.harvard.edu/mind-and-mood/exercise-is-an-all-natural-treatment-to-fight-depression", external: true }
    ]
  },
  therapy: {
    description: "Therapy is a treatment for mental health issues that involves talking to a trained therapist. Therapy helps individuals understand and address their emotions, thoughts, and behaviors. There are many types of therapy, including Cognitive Behavioral Therapy (CBT), psychotherapy, and more. This section provides resources for understanding therapy and finding a suitable therapist.",
    links: [
      { label: "How Therapy Can Help Your Mental Health", to: "https://www.apa.org/topics/psychotherapy", external: true },
      { label: "Cognitive Behavioral Therapy (CBT) Explained", to: "https://www.goodtherapy.org/", external: true },
      { label: "Finding the Right Therapist for You", to: "https://www.psychologytoday.com/us/therapists", external: true },
      { label: "The Benefits of Group Therapy", to: "https://www.agpa.org/", external: true },
      { label: "Art Therapy: Exploring Emotions Through Creativity", to: "https://arttherapy.org/", external: true },
      { label: "What to Expect in Therapy Sessions", to: "https://www.beckinstitute.org/", external: true },
      { label: "Therapies for Trauma and PTSD", to: "https://www.nationaltraumaprofessionals.org/", external: true }
    ]
  }
};

const ResourcePage = () => {
  const { resourceName } = useParams();

  const resource = resourceData[resourceName] || {
    description: 'No resource found.',
    links: []
  };

  const capitalizedHeading = resourceName
    ? resourceName.replace(/([A-Z])/g, ' $1').toUpperCase()
    : 'Resource Not Found';

  return (
    <div 
      className="flex flex-col items-center p-6"
      style={{
        backgroundImage: `url(${BackGround2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg mt-8 bg-opacity-90">
        <h2 className="text-4xl font-bold text-center text-gray-800">{capitalizedHeading}</h2>
        <p className="text-gray-700 text-lg mt-4">{resource.description}</p>

        <div className="space-y-4 mt-6">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Related Resources</h3>
          <ul className="space-y-4">
            {resource.links.length > 0 ? (
              resource.links.map((link, index) => (
                <li key={index} className="text-center">
                  {link.external ? (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))
            ) : (
              <li className="text-center text-gray-600">No related resources available.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Go to Home Button */}
      <div className="mt-8 text-center">
        <Link 
          to="/" 
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 shadow-lg"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ResourcePage;
