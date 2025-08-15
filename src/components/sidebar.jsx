// import React, { useState } from 'react';
// import { Link } from "react-router-dom"; // Import Link from React Router
// import { Menu, X, ChevronDown, ChevronUp, Heart, Brain, BookOpen, Users, ClipboardList } from 'lucide-react';

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const [expandedCategory, setExpandedCategory] = useState(null);

//   const menuItems = [
//     {
//       label: 'MENTAL WELLNESS',
//       icon: Heart,
//       submenu: ['SELF CARE', 'MINDFULNESS', 'STRESS MANAGEMENT', 'EMOTIONAL HEALTH', 'SLEEP HYGIENE']
//     },
//     {
//       label: 'THERAPY',
//       icon: Brain,
//       submenu: ['TYPES OF THERAPY', 'FINDING HELP', 'COUNSELING RESOURCES']
//     },
//     {
//       label: 'RELATIONSHIPS',
//       icon: Users,
//       submenu: ['FAMILY', 'FRIENDS', 'WORKPLACE', 'SOCIAL SUPPORT']
//     },
//     {
//       label: 'QUIZZES',
//       icon: ClipboardList,
//       submenu: [ // Submenu as objects for quizzes
//         {
//           name: 'Autism',
//           overview: 'Autism Spectrum Disorder (ASD) affects social interaction and communication.',
//           link: 'https://www.autismspeaks.org/autism-screening-quiz'
//         },
//         {
//           name: 'PTSD',
//           overview: 'Post-Traumatic Stress Disorder occurs after experiencing or witnessing trauma.',
//           link: 'https://www.psycom.net/ptsd-test'
//         },
//         {
//           name: 'Anxiety',
//           overview: 'Anxiety disorders involve excessive worry and fear that interfere with daily life.',
//           link: 'https://www.mind-diagnostics.org/anxiety-test'
//         },
//         {
//           name: 'Depression',
//           overview: 'Depression is a mood disorder that causes persistent sadness and loss of interest.',
//           link: 'https://www.mind-diagnostics.org/depression-test'
//         }
//       ]
//     },
//     {
//       label: 'RESOURCES',
//       icon: BookOpen,
//       submenu: [
//         {
//           name: 'Family and Friends',
//           overview: 'Resources for supporting loved ones through mental health challenges.',
//           link: 'https://www.psychologytoday.com/us/basics/family-therapy' // External link
//         },
//         {
//           name: 'Autism Resources',
//           overview: 'Find resources and support networks for individuals with Autism Spectrum Disorder.',
//           link: 'https://www.autismspeaks.org/family-services' // External link
//         },
//         {
//           name: 'PTSD Resources',
//           overview: 'Support and recovery resources for individuals dealing with PTSD.',
//           link: 'https://www.ptsd.va.gov/gethelp/what_is_help.asp' // External link
//         },
//         {
//           name: 'Anxiety Resources',
//           overview: 'Learn about resources for managing anxiety and finding help.',
//           link: 'https://www.anxiety.org/' // External link
//         },
//         {
//           name: 'Depression Resources',
//           overview: 'Support resources for individuals dealing with depression.',
//           link: 'https://www.nami.org/Your-Journey/Individuals-with-Mental-Illness/Types-of-Mental-Illness/Depression' // External link
//         },
//         {
//           name: 'Types of Therapy',
//           overview: 'Explore different types of therapy for mental health support.',
//           link: 'https://www.psychologytoday.com/us/types-of-therapy' // External link
//         }
//       ]
//     }
//   ];

//   const handleCategoryClick = (index) => {
//     setExpandedCategory(expandedCategory === index ? null : index);
//   };

//   return (
//     <aside className={`${isOpen ? 'w-80' : 'w-16'} h-full transition-[width] duration-300 ease-in-out bg-white border-r border-gray-200 flex-shrink-0`}>
//       <nav className="h-full flex flex-col">
//         {/* Sidebar Header */}
//         <div className="p-4 flex justify-between items-center border-b border-gray-200">
//           <span className={`${isOpen ? 'block' : 'hidden'} font-bold text-2xl`}>Mental Health</span>
//           <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700">
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Sidebar Menu */}
//         {isOpen && (
//           <ul className="flex-1 px-3 py-4">
//             {menuItems.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <button
//                   className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg text-gray-800 font-semibold text-lg"
//                   onClick={() => handleCategoryClick(index)}
//                 >
//                   <div className="flex items-center gap-3">
//                     <item.icon size={24} className="text-gray-600" />
//                     <span>{item.label}</span>
//                   </div>
//                   {item.submenu.length > 0 && (
//                     expandedCategory === index ? 
//                       <ChevronUp size={20} /> : 
//                       <ChevronDown size={20} />
//                   )}
//                 </button>

//                 {/* Render Submenus */}
//                 {expandedCategory === index && item.submenu.length > 0 && (
//                   <ul className="ml-4 mt-2 space-y-2">
//                     {/* Check if the submenu items are objects (for QUIZZES and RESOURCES) or strings (for others) */}
//                     {item.label === 'QUIZZES' || item.label === 'RESOURCES' ? (
//                       item.submenu.map((resource, resourceIndex) => (
//                         <li key={resourceIndex}>
//                           <a
//                             href={resource.link} // Open the external link
//                             target="_blank" // Open in a new tab
//                             rel="noopener noreferrer" // Security for external links
//                             className="block p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200"
//                           >
//                             <h3 className="font-semibold text-gray-800">{resource.name}</h3>
//                             <p className="text-sm text-gray-600 mt-1">{resource.overview}</p>
//                           </a>
//                         </li>
//                       ))
//                     ) : (
//                       item.submenu.map((subItem, subIndex) => (
//                         <li key={subIndex}>
//                           <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600 text-base">
//                             {subItem}
//                           </button>
//                         </li>
//                       ))
//                     )}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}

//       </nav>
//     </aside>
//   );
// }

  

// import React, { useState } from 'react';
// import { Link } from "react-router-dom"; // Import Link from React Router
// import { Menu, X, ChevronDown, ChevronUp, Heart, Brain, BookOpen, Users, ClipboardList } from 'lucide-react';

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const [expandedCategory, setExpandedCategory] = useState(null);

//   const menuItems = [
//     {
//       label: 'MENTAL WELLNESS',
//       icon: Heart,
//       submenu: ['SELF CARE', 'MINDFULNESS', 'STRESS MANAGEMENT', 'EMOTIONAL HEALTH', 'SLEEP HYGIENE']
//     },
//     {
//       label: 'THERAPY',
//       icon: Brain,
//       submenu: ['TYPES OF THERAPY', 'FINDING HELP', 'COUNSELING RESOURCES']
//     },
//     {
//       label: 'RELATIONSHIPS',
//       icon: Users,
//       submenu: ['FAMILY', 'FRIENDS', 'WORKPLACE', 'SOCIAL SUPPORT']
//     },
//     {
//       label: 'QUIZZES',
//       icon: ClipboardList,
//       submenu: [
//         { name: 'Autism', route: '/quiz/Autism' },
//         { name: 'PTSD', route: '/quiz/PTSD' },
//         { name: 'Anxiety', route: '/quiz/Anxiety' },
//         { name: 'Depression', route: '/quiz/Depression' }
//       ]
//     },
//     {
//       label: 'RESOURCES',
//       icon: BookOpen,
//       submenu: [
//         { name: 'Family and Friends', route: '/resources/family' },
//         { name: 'Autism Resources', route: '/resources/autism' },
//         { name: 'PTSD Resources', route: '/resources/ptsd' },
//         { name: 'Anxiety Resources', route: '/resources/anxiety' },
//         { name: 'Depression Resources', route: '/resources/depression' },
//         { name: 'Types of Therapy', route: '/resources/therapy' }
//       ]
//     }
//   ];

//   const handleCategoryClick = (index) => {
//     setExpandedCategory(expandedCategory === index ? null : index);
//   };

//   return (
//     <aside className={`${isOpen ? 'w-80' : 'w-16'} h-full transition-[width] duration-300 ease-in-out bg-white border-r border-gray-200 flex-shrink-0`}>
//       <nav className="h-full flex flex-col">
//         {/* Sidebar Header */}
//         <div className="p-4 flex justify-between items-center border-b border-gray-200">
//           <span className={`${isOpen ? 'block' : 'hidden'} font-bold text-2xl`}>Mental Health</span>
//           <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700">
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Sidebar Menu */}
//         {isOpen && (
//           <ul className="flex-1 px-3 py-4">
//             {menuItems.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <button
//                   className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg text-gray-800 font-semibold text-lg"
//                   onClick={() => handleCategoryClick(index)}
//                 >
//                   <div className="flex items-center gap-3">
//                     <item.icon size={24} className="text-gray-600" />
//                     <span>{item.label}</span>
//                   </div>
//                   {item.submenu?.length > 0 && (
//                     expandedCategory === index ? (
//                       <ChevronUp size={20} />
//                     ) : (
//                       <ChevronDown size={20} />
//                     )
//                   )}
//                 </button>

//                 {/* Render Submenus */}
//                 {expandedCategory === index && item.submenu?.length > 0 && (
//                   <ul className="ml-4 mt-2 space-y-2">
//                     {item.submenu.map((subItem, subIndex) => (
//                       <li key={subIndex}>
//                         {subItem.route ? (
//                           <Link
//                             to={subItem.route} // Internal navigation for quizzes and resources
//                             className="block p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ) : (
//                           <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600 text-base">
//                             {subItem}
//                           </button>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </aside>
//   );
// }


// src/Sidebar.js
// 
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, ChevronDown, ChevronUp, Heart, Brain, BookOpen, Users, ClipboardList } from 'lucide-react';

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const [expandedCategory, setExpandedCategory] = useState(null);

//   const menuItems = [
//     {
//       label: 'MENTAL WELLNESS',
//       icon: Heart,
//       submenu: ['SELF CARE', 'MINDFULNESS', 'STRESS MANAGEMENT', 'EMOTIONAL HEALTH', 'SLEEP HYGIENE'],
//     },
//     {
//       label: 'THERAPY',
//       icon: Brain,
//       submenu: ['TYPES OF THERAPY', 'FINDING HELP', 'COUNSELING RESOURCES'],
//     },
//     {
//       label: 'RELATIONSHIPS',
//       icon: Users,
//       submenu: ['FAMILY', 'FRIENDS', 'WORKPLACE', 'SOCIAL SUPPORT'],
//     },
//     {
//       label: 'QUIZZES',
//       icon: ClipboardList,
//       submenu: [
//         { name: 'Autism', route: '/quiz/Autism' },
//         { name: 'PTSD', route: '/quiz/PTSD' },
//         { name: 'Anxiety', route: '/quiz/Anxiety' },
//         { name: 'Depression', route: '/quiz/Depression' },
//       ],
//     },
//     {
//       label: 'RESOURCES',
//       icon: BookOpen,
//       submenu: [
//         { name: 'Family and Friends', route: '/resources/family' },
//         { name: 'Autism Resources', route: '/resources/autism' },
//         { name: 'PTSD Resources', route: '/resources/ptsd' },
//         { name: 'Anxiety Resources', route: '/resources/anxiety' },
//         { name: 'Depression Resources', route: '/resources/depression' },
//         { name: 'Types of Therapy', route: '/resources/therapy' },
//       ],
//     },
//   ];

//   const handleCategoryClick = (index) => {
//     setExpandedCategory(expandedCategory === index ? null : index);
//   };

//   return (
//     <aside className={`${isOpen ? 'w-80' : 'w-16'} h-full transition-[width] duration-300 ease-in-out bg-white border-r border-gray-200 flex-shrink-0`}>
//       <nav className="h-full flex flex-col">
//         <div className="p-4 flex justify-between items-center border-b border-gray-200">
//           <span className={`${isOpen ? 'block' : 'hidden'} font-bold text-2xl`}>Mental Health</span>
//           <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700">
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {isOpen && (
//           <ul className="flex-1 px-3 py-4">
//             {menuItems.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <button
//                   className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg text-gray-800 font-semibold text-lg"
//                   onClick={() => handleCategoryClick(index)}
//                 >
//                   <div className="flex items-center gap-3">
//                     <item.icon size={24} className="text-gray-600" />
//                     <span>{item.label}</span>
//                   </div>
//                   {item.submenu?.length > 0 &&
//                     (expandedCategory === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
//                 </button>

//                 {expandedCategory === index && item.submenu?.length > 0 && (
//                   <ul className="ml-4 mt-2 space-y-2">
//                     {item.submenu.map((subItem, subIndex) => (
//                       <li key={subIndex}>
//                         {subItem.route ? (
//                           <Link to={subItem.route} className="block p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
//                             {subItem.name}
//                           </Link>
//                         ) : (
//                           <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600 text-base">
//                             {subItem}
//                           </button>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </aside>
//   );
// }
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom'; // useLocation hook for active link styling
// import { Menu, X, ChevronDown, ChevronUp, Heart, Brain, BookOpen, Users, ClipboardList } from 'lucide-react';

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const location = useLocation(); // Hook to get current location for active link styling

//   // Fixed the syntax error in the console.log statement
//   console.log('Sidebar Rendered', { isOpen, pathname: location.pathname }); // Debug log

//   const menuItems = [
//     {
//       label: 'MENTAL WELLNESS',
//       icon: Heart,
//       submenu: ['SELF CARE', 'MINDFULNESS', 'STRESS MANAGEMENT', 'EMOTIONAL HEALTH', 'SLEEP HYGIENE'],
//     },
//     {
//       label: 'THERAPY',
//       icon: Brain,
//       submenu: ['TYPES OF THERAPY', 'FINDING HELP', 'COUNSELING RESOURCES'],
//     },
//     {
//       label: 'RELATIONSHIPS',
//       icon: Users,
//       submenu: ['FAMILY', 'FRIENDS', 'WORKPLACE', 'SOCIAL SUPPORT'],
//     },
//     {
//       label: 'QUIZZES',
//       icon: ClipboardList,
//       submenu: [
//         { name: 'Autism', route: '/quiz/Autism' },
//         { name: 'PTSD', route: '/quiz/PTSD' },
//         { name: 'Anxiety', route: '/quiz/Anxiety' },
//         { name: 'Depression', route: '/quiz/Depression' },
//       ],
//     },
//     {
//       label: 'RESOURCES',
//       icon: BookOpen,
//       submenu: [
//         { name: 'Family and Friends', route: '/resources/family' },
//         { name: 'Autism Resources', route: '/resources/autism' },
//         { name: 'PTSD Resources', route: '/resources/ptsd' },
//         { name: 'Anxiety Resources', route: '/resources/anxiety' },
//         { name: 'Depression Resources', route: '/resources/depression' },
//         { name: 'Types of Therapy', route: '/resources/therapy' },
//       ],
//     },
//   ];

//   const handleCategoryClick = (index) => {
//     setExpandedCategory(expandedCategory === index ? null : index);
//   };

//   // Check if the current path matches the submenu route to apply active class
//   const isActiveLink = (path) => location.pathname === path ? 'bg-gray-200 text-gray-800' : 'text-gray-600';

//   return (
//     <aside className={`${isOpen ? 'w-80' : 'w-16'} h-full transition-[width] duration-300 ease-in-out bg-white border-r border-gray-200 flex-shrink-0`}>
//       <nav className="h-full flex flex-col">
//         <div className="p-4 flex justify-between items-center border-b border-gray-200">
//           <span className={`${isOpen ? 'block' : 'hidden'} font-bold text-2xl`}>Mental Health</span>
//           <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700">
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {isOpen && (
//           <ul className="flex-1 px-3 py-4">
//             {menuItems.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <button
//                   className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg text-gray-800 font-semibold text-lg"
//                   onClick={() => handleCategoryClick(index)}
//                   aria-expanded={expandedCategory === index ? 'true' : 'false'}
//                 >
//                   <div className="flex items-center gap-3">
//                     <item.icon size={24} className="text-gray-600" />
//                     <span>{item.label}</span>
//                   </div>
//                   {item.submenu?.length > 0 &&
//                     (expandedCategory === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
//                 </button>

//                 {expandedCategory === index && item.submenu?.length > 0 && (
//                   <ul className="ml-4 mt-2 space-y-2">
//                     {item.submenu.map((subItem, subIndex) => (
//                       <li key={subIndex}>
//                         {subItem.route ? (
//                           <Link
//                             to={subItem.route}
//                             className={`block p-3 rounded-lg shadow-sm hover:bg-gray-200 ${isActiveLink(subItem.route)}`}
//                           >
//                             {subItem.name}
//                           </Link>
//                         ) : (
//                           <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg text-gray-600 text-base">
//                             {subItem}
//                           </button>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </aside>
//   );
// }

// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { 
//   Menu, 
//   X, 
//   ChevronDown, 
//   ChevronUp, 
//   User, 
//   Calendar, 
//   Brain, 
//   ClipboardList, 
//   BookOpen 
// } from 'lucide-react';

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const menuItems = [
//     {
//       label: 'MY PROFILE',
//       icon: User,
//       submenu: [
//         { name: 'VIEW PROFILE', route: '/profile' },
//         { name: 'SETTINGS', route: '/settings' },
//         { name: 'PROGRESS TRACKING', route: '/progress' },
//       ],
//     },
//     {
//       label: '21 DAYS CHALLENGE',
//       icon: Calendar,
//       submenu: [
//         { name: 'START CHALLENGE', route: '/challenge/new' },
//         { name: 'TRACK PROGRESS', route: '/challenge/track' },
//         { name: 'VIEW ACHIEVEMENTS', route: '/challenge/achievements' },
//       ],
//     },
//     {
//       label: 'THERAPY',
//       icon: Brain,
//       submenu: [
//         { name: 'Find Therapist', route: '/therapy/find' },
//         { name: 'Types of Therapy', route: '/therapy/types' },
//       ],
//     },
//     {
//       label: 'QUIZZES',
//       icon: ClipboardList,
//       submenu: [
//         { name: 'Autism', route: '/quiz/Autism' },
//         { name: 'PTSD', route: '/quiz/PTSD' },
//         { name: 'Anxiety', route: '/quiz/Anxiety' },
//         { name: 'Depression', route: '/quiz/Depression' },
//       ],
//     },
//     {
//       label: 'RESOURCES',
//       icon: BookOpen,
//       submenu: [
//         { name: 'Family and Friends', route: '/resources/family' },
//         { name: 'Autism Resources', route: '/resources/autism' },
//         { name: 'PTSD Resources', route: '/resources/ptsd' },
//         { name: 'Anxiety Resources', route: '/resources/anxiety' },
//         { name: 'Depression Resources', route: '/resources/depression' },
//         { name: 'Types of Therapy', route: '/resources/therapy' },
//       ],
//     },
//   ];

//   const handleCategoryClick = (index) => {
//     setExpandedCategory(expandedCategory === index ? null : index);
//   };

//   const isActiveLink = (path) =>
//     location.pathname === path ? 'bg-gray-200 text-gray-800' : 'text-gray-600';

//   const handleItemClick = (url) => {
//     navigate(url);
//   };

//   return (
//     <aside
//       className={`${
//         isOpen ? 'w-80' : 'w-16'
//       } h-screen fixed top-0 left-0 bg-white border-r shadow-lg transition-[width] duration-300 z-50`}
//     >
//       <nav className="h-full flex flex-col">
//         <div className="p-4 flex justify-between items-center border-b">
//           <span className={`${isOpen ? 'block' : 'hidden'} font-bold text-2xl`}>
//             Mental Health
//           </span>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         <ul className="flex-1 overflow-y-auto px-3 py-4">
//           {menuItems.map((item, index) => (
//             <li key={index} className="mb-2">
//               <button
//                 className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg text-gray-800 font-semibold text-lg"
//                 onClick={() => handleCategoryClick(index)}
//                 aria-expanded={expandedCategory === index ? 'true' : 'false'}
//               >
//                 <div className="flex items-center gap-3">
//                   <item.icon size={24} className="text-gray-600" />
//                   <span>{item.label}</span>
//                 </div>
//                 {item.submenu?.length > 0 &&
//                   (expandedCategory === index ? (
//                     <ChevronUp size={20} />
//                   ) : (
//                     <ChevronDown size={20} />
//                   ))}
//               </button>

//               {expandedCategory === index && item.submenu?.length > 0 && (
//                 <ul className="ml-4 mt-2 space-y-2">
//                   {item.submenu.map((subItem, subIndex) => (
//                     <li key={subIndex}>
//                       <Link
//                         to={subItem.route}
//                         className={`block p-3 rounded-lg hover:bg-gray-200 ${isActiveLink(
//                           subItem.route
//                         )}`}
//                       >
//                         {subItem.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// }


import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  User, 
  Calendar, 
  Brain, 
  ClipboardList, 
  BookOpen 
} from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Menu items with submenus
  const menuItems = [
    {
      label: 'MY PROFILE',
      icon: User,
      submenu: [
        { name: 'HOME', route: '/settings' },
      ],
    },
    {
      label: '21 DAYS CHALLENGE',
      icon: Calendar,
      submenu: [
        { name: 'START CHALLENGE', route: '/challenge/new' },
      ],
    },
    {
      label: 'THERAPY',
      icon: Brain,
      submenu: [
        { name: 'Find Therapist', route: '/therapy/find' },
        { name: 'Types of Therapy', route: '/therapy/types' },
      ],
    },
    {
      label: 'QUIZZES',
      icon: ClipboardList,
      submenu: [
        { name: 'Autism', route: '/quiz/Autism' },
        { name: 'PTSD', route: '/quiz/PTSD' },
        { name: 'Anxiety', route: '/quiz/Anxiety' },
        { name: 'Depression', route: '/quiz/Depression' },
      ],
    },
    {
      label: 'RESOURCES',
      icon: BookOpen,
      submenu: [
        { name: 'Family and Friends', route: '/resources/family' },
        { name: 'Autism Resources', route: '/resources/autism' },
        { name: 'PTSD Resources', route: '/resources/ptsd' },
        { name: 'Anxiety Resources', route: '/resources/anxiety' },
        { name: 'Depression Resources', route: '/resources/depression' },
        { name: 'Types of Therapy', route: '/resources/therapy' },
      ],
    },
  ];

  // Handle category click to toggle submenu visibility
  const handleCategoryClick = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  // Check if the link is active
  const isActiveLink = (path) =>
    location.pathname === path ? 'bg-gray-200 text-gray-800' : 'text-gray-600';

  // Navigate to the selected route
  const handleItemClick = (url) => {
    navigate(url);
  };

  return (
    <aside
      className={`${
        isOpen ? 'w-80' : 'w-16'
      } h-screen fixed top-0 left-0 bg-white border-r shadow-lg transition-[width] duration-300 z-50`}
    >
      <nav className="h-full flex flex-col">
        <div className="p-4 flex justify-between items-center border-b">
          <span className={`${isOpen ? 'block' : 'hidden'} font-bold text-2xl`}>
            Mental Health
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg text-gray-800 font-semibold text-lg"
                onClick={() => handleCategoryClick(index)}
                aria-expanded={expandedCategory === index ? 'true' : 'false'}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={24} className="text-gray-600" />
                  <span>{isOpen ? item.label : ''}</span>
                </div>
                {item.submenu?.length > 0 &&
                  (expandedCategory === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  ))}
              </button>

              {/* Submenu for expanded category */}
              {expandedCategory === index && item.submenu?.length > 0 && (
                <ul className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.route}
                        className={`block p-3 rounded-lg hover:bg-gray-200 ${isActiveLink(
                          subItem.route
                        )}`}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
