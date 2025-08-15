// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/sidebar'; // Import the Sidebar component
// import MusicPlayer from './components/MusicPlayer';
// // import QuizPage from './pages/QuizPage'; // Import QuizPage component
// import ResourcePage from './components/ResourcePage'; // Import ResourcePage if needed
// import QuizDetail from './components/QuizDetail'; // QuizDetail for specific quizzes
// import zenBackground from './assets/zen-background.png'; // Dynamic background
// import zenZoneLogo from './assets/zen_zone_logo.jpg'; // Dynamic logo
// import QuizzPage from "./components/QuizPage";
// //import MentalHealthQuiz from './components/MentalHealthQuiz';

// import './App.css';

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }} // Dynamically set the background
//       >
//         {/* Sidebar for navigation */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           {/* Header Section */}
//           <header className="w-full py-6 flex items-center gap-8 pr-32 animate-fade-in justify-center">
//             <h1 className="text-8xl font-serif text-black relative">
//               {/* Blur Effect */}
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               {/* Gradient Text */}
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo} // Dynamically set the logo
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>

//           {/* Music Player at the top-right corner */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>

//           {/* Routes Section */}
//           <div className="flex-grow p-6">
//             <Routes>
//               {/* Home route */}
//               <Route
//                 path="/"
//                 element={<h1 className="text-center text-4xl">Welcome to the Zen Zone</h1>}
//               />

//               {/* Quiz detail route */}
//               <Route path="/quiz/:quizName" element={<QuizDetail />} />

//               {/* Resources route */}
//               <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/sidebar'; // Import the Sidebar component
// import MusicPlayer from './components/MusicPlayer';
// // import QuizPage from './pages/QuizPage'; // Import QuizPage component
// import ResourcePage from './components/ResourcePage'; // Import ResourcePage if needed
// import QuizDetail from './components/QuizDetail'; // QuizDetail for specific quizzes
// import zenBackground from './assets/zen-background.png'; // Dynamic background
// import zenZoneLogo from './assets/zen_zone_logo.jpg'; // Dynamic logo
// import './App.css';

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }} // Dynamically set the background
//       >
//         {/* Sidebar for navigation */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           {/* Header Section */}
//           <header className="w-full py-6 flex items-center gap-8 pr-32 animate-fade-in justify-center">
//             <h1 className="text-8xl font-serif text-black relative">
//               {/* Blur Effect */}
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               {/* Gradient Text */}
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo} // Dynamically set the logo
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>

//           {/* Music Player at the top-right corner */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>

//           {/* Routes Section */}
//           <div className="flex-grow p-6">
//             <Routes>
//               {/* Home route */}
//               <Route
//                 path="/"
//                 element={<h1 className="text-center text-4xl">Welcome to the Zen Zone</h1>}
//               />

//               {/* Quiz detail route */}
//               <Route path="/quiz/:quizName" element={<QuizDetail />} />

//               {/* Resources route */}
//               <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/sidebar'; // Correct import
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }}
//       >
//         {/* Sidebar for navigation */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           {/* Header Section */}
//           <header className="w-full py-6 flex items-center gap-8 pr-32 justify-center">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>

//           {/* Music Player */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>

//           {/* Routes */}
//           <div className="flex-grow p-6">
//             <Routes>
//               <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//               <Route path="/quizzes" element={<QuizPage />} />
//               <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }


// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/idebar'; // Correct import
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage'; // Added import for ResourcePage
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }}
//       >
//         {/* Sidebar for navigation */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           {/* Header Section */}
//           <header className="w-full py-6 flex items-center gap-8 pr-32 justify-center">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>

//           {/* Music Player */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>

//           {/* Routes */}
//           <div className="flex-grow p-6">
//             <Routes>
//               <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//               <Route path="/quizzes" element={<QuizPage />} />
//               <Route path="/quiz/:quizName" element={<QuizDetail />} />
//               <Route path="/resources/:resourceName" element={<ResourcePage />} /> {/* Resource Page Route */}
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/sidebar'; // Ensure default export in Sidebar.js
// import MusicPlayer from './components/MusicPlayer'; // Ensure default export in MusicPlayer.js
// import QuizPage from './components/QuizPage'; // Ensure default export in QuizPage.js
// import QuizDetail from './components/QuizDetail'; // Ensure default export in QuizDetail.js
// import ResourcePage from './components/ResourcePage'; // Ensure default export in ResourcePage.js
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }}
//       >
//         {/* Sidebar for navigation */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           <Routes>
//             {/* Display header and logo on the homepage and other pages, but not on QuizDetail */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   {/* Header Section */}
//                   <header className="w-full py-6 flex items-center gap-8 pr-32 justify-center">
//                     <h1 className="text-8xl font-serif text-black relative">
//                       <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                       <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                         ZEN ZONE
//                       </span>
//                     </h1>

//                     {/* Logo */}
//                     <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                       <img
//                         src={zenZoneLogo}
//                         alt="Zen Zone Logo"
//                         className="w-full h-full rounded-full object-cover"
//                       />
//                     </div>
//                   </header>
//                 </>
//               }
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//           </Routes>

//           {/* Music Player */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }

//correct

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Dynamic Title based on resource name from URL parameters
// const DynamicTitle = () => {
//   const { resourceName } = useParams();
//   useEffect(() => {
//     document.title = resourceName ? `${resourceName} - Zen Zone` : 'Zen Zone';
//   }, [resourceName]);
//   return null;
// };

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }}
//       >
//         {/* Sidebar for navigation */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   {/* Header Section */}
//                   <header className="w-full py-6 flex items-center gap-8 pr-32 justify-center">
//                     <h1 className="text-8xl font-serif text-black relative">
//                       <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                       <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                         ZEN ZONE
//                       </span>
//                     </h1>

//                     {/* Logo */}
//                     <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                       <img
//                         src={zenZoneLogo}
//                         alt="Zen Zone Logo"
//                         className="w-full h-full rounded-full object-cover"
//                       />
//                     </div>
//                   </header>
//                 </>
//               }
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<><DynamicTitle /><QuizDetail /></>} />
//             <Route path="/resources/:resourceName" element={<><DynamicTitle /><ResourcePage /></>} />
//           </Routes>

//           {/* Music Player */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }

//correct

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Dynamic Title Component
// const DynamicTitle = () => {
//   const { resourceName, quizName } = useParams();
//   useEffect(() => {
//     const title = resourceName || quizName
//       ? `${resourceName || quizName} - Zen Zone`
//       : 'Zen Zone';
//     document.title = title;
//   }, [resourceName, quizName]);
//   return null;
// };

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }}
//       >
//         {/* Sidebar Component */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           {/* Header Section */}
//           <header className="w-full py-6 flex items-center gap-8 pr-32 justify-center">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">
//                 ZEN ZONE
//               </span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>

//           {/* Music Player */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>

//           {/* Routes Section */}
//           <div className="flex-grow p-6">
//             <Routes>
//               <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//               <Route path="/quizzes" element={<QuizPage />} />
//               <Route
//                 path="/quiz/:quizName"
//                 element={
//                   <>
//                     <DynamicTitle />
//                     {/* QuizDetail component */}
//                   </>
//                 }
//               />
//               <Route
//                 path="/resources/:resourceName"
//                 element={
//                   <>
//                     <DynamicTitle />
//                     <ResourcePage />
//                   </>
//                 }
//               />
//               <Route path="/therapy/find" element={<TherapyPage />} />
//               <Route path="/therapy/types" element={<TherapyTypes />} />
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Dynamic Title based on resource name from URL parameters
// const DynamicTitle = () => {
//   const { resourceName, quizName } = useParams();
//   useEffect(() => {
//     const title = resourceName || quizName
//       ? `${resourceName || quizName} - Zen Zone`
//       : 'Zen Zone';
//     document.title = title;
//   }, [resourceName, quizName]);
//   return null;
// };

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Router>
//       <div
//         className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${zenBackground})` }}
//       >
//         {/* Sidebar Component */}
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main Content */}
//         <main className="flex-1 relative flex flex-col">
//           {/* Header Section */}
//           <header className="w-full py-6 flex items-center gap-8 pr-32 justify-center">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>

//           {/* Music Player */}
//           <div className="absolute top-4 right-4">
//             <MusicPlayer />
//           </div>

//           {/* Routes Section */}
//           <div className="flex-grow p-6">
//             <Routes>
//               <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//               <Route path="/quizzes" element={<QuizPage />} />
//               <Route
//                 path="/quiz/:quizName"
//                 element={
//                   <>
//                     <DynamicTitle />
//                     <QuizDetail />
//                   </>
//                 }
//               />
//               <Route
//                 path="/resources/:resourceName"
//                 element={
//                   <>
//                     <DynamicTitle />
//                     <ResourcePage />
//                   </>
//                 }
//               />
//               <Route path="/therapy/find" element={<TherapyPage />} />
//               <Route path="/therapy/types" element={<TherapyTypes />} />
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
// import { Info, Book, Brain, Heart, ChevronRight } from 'lucide-react';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find'];
//   return hideHeaderRoutes.some(route => location.pathname.startsWith(route));
// };

// // Card Components
// const Card = ({ children, className = '', ...props }) => (
//   <div className={`bg-white rounded-xl shadow-sm ${className}`} {...props}>
//     {children}
//   </div>
// );

// const CardHeader = ({ children, className = '' }) => (
//   <div className={`p-6 ${className}`}>{children}</div>
// );

// const CardContent = ({ children, className = '' }) => (
//   <div className={`p-6 pt-0 ${className}`}>{children}</div>
// );

// const FeatureCard = ({ icon: Icon, title, description }) => (
//   <Card className="hover:shadow-lg transition-shadow duration-300">
//     <CardHeader>
//       <div className="flex items-center gap-2">
//         <Icon className="w-6 h-6 text-blue-600" />
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>
//       <p className="mt-2 text-sm text-gray-600">{description}</p>
//     </CardHeader>
//   </Card>
// );

// const WelcomeSection = () => (
//   <div className="text-center mb-12 mt-8">
//     <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//       Welcome to Zen Zone
//     </h1>
//     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//       Your digital sanctuary for mental wellness and personal growth. Explore our resources,
//       take enlightening quizzes, and find the support you need on your journey to better mental health.
//     </p>
//   </div>
// );

// const HomePage = () => (
//   <div className="space-y-12 px-4">
//     <WelcomeSection />

//     <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//       <FeatureCard
//         icon={Brain}
//         title="Mental Health Resources"
//         description="Access comprehensive guides and articles about various mental health topics."
//       />
//       <FeatureCard
//         icon={Book}
//         title="Interactive Quizzes"
//         description="Understand yourself better through our carefully crafted assessment tools."
//       />
//       <FeatureCard
//         icon={Heart}
//         title="Therapy Guidance"
//         description="Find the right therapeutic approach and professional support for your needs."
//       />
//     </section>

//     <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-12">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Featured Content</h2>
//         <div className="space-y-4">
//           <Card className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
//             <CardContent className="flex items-center justify-between p-4">
//               <div>
//                 <h3 className="font-medium">Understanding Anxiety</h3>
//                 <p className="text-sm text-gray-600">Learn about symptoms, causes, and coping strategies</p>
//               </div>
//               <ChevronRight className="w-5 h-5 text-gray-400" />
//             </CardContent>
//           </Card>
//           <Card className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
//             <CardContent className="flex items-center justify-between p-4">
//               <div>
//                 <h3 className="font-medium">Mindfulness Techniques</h3>
//                 <p className="text-sm text-gray-600">Simple practices for daily mental wellness</p>
//               </div>
//               <ChevronRight className="w-5 h-5 text-gray-400" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>

//     <section className="text-center mb-12">
//       <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
//         <Info className="w-5 h-5" />
//         <span>Start Your Wellness Journey</span>
//       </button>
//     </section>
//   </div>
// );

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const hideHeader = useHideHeader();

//   return (
//     <div className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${zenBackground})` }}>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       <main className="flex-1 relative flex flex-col">
//         {!hideHeader && (
//           <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200">
//             <div className="flex items-center justify-between px-6 h-16">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md flex-shrink-0">
//                   <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full object-cover" />
//                 </div>
//                 <h1 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Zen Zone</h1>
//               </div>
//               <MusicPlayer />
//             </div>
//           </header>
//         )}

//         <div className="flex-grow p-6">
//           <Routes>
//             <Route path="/" element={<Navigate to="/login" replace />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/profile" element={<HomePage />} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// // Uncomment if TwentyOneDaysChallenge component exists
// // import TwentyOneDaysChallenge from './components/TwentyOneDaysChallenge';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find'];
//   return hideHeaderRoutes.some(route => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const hideHeader = useHideHeader();

//   return (
//     <div
//       className="w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar for navigation */}
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       {/* Main Content */}
//       <main className="flex-1 relative flex flex-col">
//         {!hideHeader && (
//           <header className="w-full py-6 flex items-center gap-8 pr-32 justify-center">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4">
//           <MusicPlayer />
//         </div>

//         {/* Routes */}
//         <div className="flex-grow p-6">
//           <Routes>
//             <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             {/* Uncomment this if the component exists */}
//             {/* <Route path="/challenge" element={<TwentyOneDaysChallenge />} /> */}
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const hideHeader = useHideHeader();

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar for navigation */}
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${
//           isSidebarOpen ? 'ml-[250px]' : 'ml-0'
//         } transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header className="header w-full py-6 flex items-center gap-8 px-8 justify-center bg-opacity-75 bg-white">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4 z-10">
//           <MusicPlayer />
//         </div>

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route
//               path="/"
//               element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>}
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route
//               path="/therapy/find"
//               element={
//                 <div className="therapy-page flex flex-row">
//                   <div className="therapy-sidebar w-1/4 p-4 bg-white shadow-md">
//                     {/* Sidebar section */}
//                     <h2 className="text-xl font-semibold">Therapy Options</h2>
//                     {/* Add navigation or filters here */}
//                   </div>
//                   <div className="therapy-content flex-1 p-6">
//                     {/* Main content */}
//                     <TherapyPage />
//                   </div>
//                 </div>
//               }
//             />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
//  import CreateProfile from './components/CreateProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const hideHeader = useHideHeader();

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar for navigation */}
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${
//           isSidebarOpen ? 'ml-[250px]' : 'ml-0'
//         } transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header className="header w-full py-6 flex items-center gap-8 px-8 justify-center bg-opacity-75 bg-white">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4 z-10">
//           <MusicPlayer />
//         </div>

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route
//               path="/"
//               element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>}
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route
//               path="/therapy/find"
//               element={
//                 <div className="therapy-content flex-1 p-6">
//                   {/* Main content for Find Therapist */}
//                   <TherapyPage />
//                 </div>
//               }
//             />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true); // State for compact sidebar
//   const hideHeader = useHideHeader();

//   useEffect(() => {
//     // Ensure the sidebar is compact when the page first loads
//     setIsSidebarCompact(true);
//   }, []);

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar for navigation */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}  // Pass compact mode state
//         setIsCompact={setIsSidebarCompact}  // Option to toggle compact mode
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${
//           isSidebarOpen ? 'ml-[250px]' : 'ml-0'
//         } transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header className="header w-full py-6 flex items-center gap-8 px-8 justify-center bg-opacity-75 bg-white">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4 z-10">
//           <MusicPlayer />
//         </div>

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route
//               path="/"
//               element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>}
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route
//               path="/therapy/find"
//               element={
//                 <div className="therapy-content flex-1 p-6">
//                   {/* Main content for Find Therapist */}
//                   <TherapyPage />
//                 </div>
//               }
//             />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/sidebar'; // Make sure the path is correct
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar starts closed
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true); // State for compact sidebar
//   const hideHeader = useHideHeader();

//   useEffect(() => {
//     // Ensure the sidebar is compact when the page first loads
//     setIsSidebarCompact(true);
//   }, []);

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar for navigation */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}  // Pass compact mode state
//         setIsCompact={setIsSidebarCompact}  // Option to toggle compact mode
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header className="header w-full py-6 flex items-center gap-8 px-8 justify-center bg-opacity-75 bg-white">
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4 z-10">
//           <MusicPlayer />
//         </div>

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route
//               path="/"
//               element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>}
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route
//               path="/therapy/find"
//               element={
//                 <div className="therapy-content flex-1 p-6">
//                   <TherapyPage />
//                 </div>
//               }
//             />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/sidebar'; // Make sure the path is correct
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar starts closed
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true); // State for compact sidebar
//   const hideHeader = useHideHeader();

//   useEffect(() => {
//     // Ensure the sidebar is compact when the page first loads
//     setIsSidebarCompact(true);
//   }, []);

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar for navigation */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact} // Pass compact mode state
//         setIsCompact={setIsSidebarCompact} // Option to toggle compact mode
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center gap-8 px-8 justify-center bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4 z-10">
//           <MusicPlayer />
//         </div>

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route
//               path="/"
//               element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>}
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route
//               path="/therapy/find"
//               element={
//                 <div className="therapy-content flex-1 p-6">
//                   <TherapyPage />
//                 </div>
//               }
//             />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/sidebar'; // Ensure this path is correct
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage'; // Add Profile Component
// import EditProfile from './components/EditProfile'; // Add Edit Profile Component
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar starts closed
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true); // State for compact sidebar
//   const hideHeader = useHideHeader();

//   useEffect(() => {
//     // Ensure the sidebar is compact when the page first loads
//     setIsSidebarCompact(true);
//   }, []);

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar for navigation */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact} // Pass compact mode state
//         setIsCompact={setIsSidebarCompact} // Option to toggle compact mode
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center gap-8 px-8 justify-center bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             {/* Logo */}
//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4 z-10">
//           <MusicPlayer />
//         </div>

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route
//               path="/"
//               element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>}
//             />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route
//               path="/therapy/find"
//               element={
//                 <div className="therapy-content flex-1 p-6">
//                   <TherapyPage />
//                 </div>
//               }
//             />
//             <Route path="/therapy/types" element={<TherapyTypes />} />

//             {/* Profile Pages */}
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const hideHeader = useHideHeader();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     // Check login state on mount
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${
//           isSidebarOpen ? 'ml-[250px]' : 'ml-0'
//         } transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center gap-8 px-8 justify-center bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             <h1 className="text-8xl font-serif text-black relative">
//               <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//               <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                 ZEN ZONE
//               </span>
//             </h1>

//             <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src={zenZoneLogo}
//                 alt="Zen Zone Logo"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </header>
//         )}

//         {/* Music Player */}
//         <div className="absolute top-4 right-4 z-10">
//           <MusicPlayer />
//         </div>

//         {/* Login/Logout Button */}
//         <div className="absolute bottom-4 right-4 z-10">
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => navigate('/login')}
//               className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
//             >
//               Login
//             </button>
//           )}
//         </div>

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };
// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const hideHeader = useHideHeader();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     // Check login state on mount
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${
//           isSidebarOpen ? 'ml-[250px]' : 'ml-0'
//         } transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             {/* Centered Heading and Logo */}
//             <div className="flex items-center justify-center gap-4">
//               <h1 className="text-8xl font-serif text-black relative">
//                 <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                 <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                   ZEN ZONE
//                 </span>
//               </h1>

//               {/* Logo */}
//               <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={zenZoneLogo}
//                   alt="Zen Zone Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Music Player */}
//             <div className="absolute top-4 right-4 z-10">
//               <MusicPlayer />
//             </div>

//             {/* Login/Logout Button */}
//             <div className="absolute top-20 right-4 z-20">
//               {isLoggedIn ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </header>
//         )}

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };


// export default function App() {
//     return (
//       <Router>
//         <AppContent />
//       </Router>
//     );
//   }


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import ZenZoneImage from './assets/zen-zone.jpg'; // Add your image here
// import LatestNewsImage from './assets/latest-news.jpg'; // Add your image here
// import MentalHealthImage from './assets/mental-health.jpg'; // Add your image here
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const hideHeader = useHideHeader();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     // Check login state on mount
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             {/* Centered Heading and Logo */}
//             <div className="flex items-center justify-center gap-4">
//               <h1 className="text-8xl font-serif text-black relative">
//                 <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                 <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                   ZEN ZONE
//                 </span>
//               </h1>

//               {/* Logo */}
//               <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={zenZoneLogo}
//                   alt="Zen Zone Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Music Player */}
//             <div className="absolute top-4 right-4 z-10">
//               <MusicPlayer />
//             </div>

//             {/* Login/Logout Button */}
//             <div className="absolute top-20 right-4 z-20">
//               {isLoggedIn ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </header>
//         )}

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// const MainPage = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
//         style={{
//           backgroundImage: 'url(../assets/hero-image.jpg)', // Replace with your image
//         }}
//       >
//         <h1 className="text-5xl font-bold">Welcome to Your Mental Wellness App</h1>
//       </section>

//       {/* Zen Zone Section */}
//       <section className="py-16 bg-gray-100 text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-6">Welcome to the Zen Zone</h2>
//           <img
//             src={ZenZoneImage}
//             alt="Zen Zone"
//             className="mx-auto rounded-lg shadow-lg mb-6"
//             style={{ width: '80%', maxWidth: '500px' }}
//           />
//           <p className="text-lg text-gray-700 mb-6">
//             The Zen Zone is a peaceful space designed to help you relax, meditate, and recharge your mental health. Take time to
//             focus on your well-being with calming activities, breathing exercises, and guided meditations.
//           </p>
//           <Link
//             to="/zen-zone"
//             className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
//           >
//             Explore the Zen Zone
//           </Link>
//         </div>
//       </section>

//       {/* Why Zen Zone Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6">Why Zen Zone?</h2>
//           <div className="flex justify-center items-center gap-16">
//             <div className="w-1/3">
//               <img
//                 src={MentalHealthImage}
//                 alt="Mental Health"
//                 className="rounded-lg shadow-lg mb-6"
//                 style={{ width: '100%', height: 'auto' }}
//               />
//               <p className="text-lg text-gray-700">
//                 The Zen Zone is proven to reduce stress and improve mental clarity. Meditation and mindfulness techniques help
//                 individuals cope with anxiety, depression, and other mental health challenges.
//               </p>
//             </div>
//             <div className="w-1/3">
//               <img
//                 src={LatestNewsImage}
//                 alt="Latest News"
//                 className="rounded-lg shadow-lg mb-6"
//                 style={{ width: '100%', height: 'auto' }}
//               />
//               <p className="text-lg text-gray-700">
//                 Stay updated with the latest news in mental health, including breakthroughs in therapy, new self-care practices,
//                 and more. Knowledge is key to improving your well-being.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Latest Mental Health News Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6">Latest Mental Health News</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Article Title 1</h3>
//               <p className="text-gray-700 mb-4">A brief overview of mental health news.</p>
//               <Link
//                 to="/news/1"
//                 className="inline-block text-green-500 hover:text-green-600 transition duration-200"
//               >
//                 Read More
//               </Link>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Article Title 2</h3>
//               <p className="text-gray-700 mb-4">A brief overview of mental health news.</p>
//               <Link
//                 to="/news/2"
//                 className="inline-block text-green-500 hover:text-green-600 transition duration-200"
//               >
//                 Read More
//               </Link>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Article Title 3</h3>
//               <p className="text-gray-700 mb-4">A brief overview of mental health news.</p>
//               <Link
//                 to="/news/3"
//                 className="inline-block text-green-500 hover:text-green-600 transition duration-200"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 bg-green-500 text-white text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
//           <p className="text-lg mb-6">We are here to help. Reach out to us for any questions or support.</p>
//           <p className="text-xl mb-6">Contact us at: <strong>(123) 456-7890</strong></p>
//           <Link
//             to="/contact"
//             className="inline-block px-8 py-3 bg-white text-green-500 rounded-lg hover:bg-gray-200 transition duration-200"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg'; // Corrected import for zen-zone.jpg
// import LatestNewsImage from './assets/latest-news.jpg'; // Corrected import for latest-news.jpg
// import MentalHealthImage from './assets/mental-health.jpg'; // Corrected import for mental-health.jpg
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const hideHeader = useHideHeader();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     // Check login state on mount
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             {/* Centered Heading and Logo */}
//             <div className="flex items-center justify-center gap-4">
//               <h1 className="text-8xl font-serif text-black relative">
//                 <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                 <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                   ZEN ZONE
//                 </span>
//               </h1>

//               {/* Logo */}
//               <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={zenZoneLogo}
//                   alt="Zen Zone Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Music Player */}
//             <div className="absolute top-4 right-4 z-10">
//               <MusicPlayer />
//             </div>

//             {/* Login/Logout Button */}
//             <div className="absolute top-20 right-4 z-20">
//               {isLoggedIn ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </header>
//         )}

//         {/* Routes */}
//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import MentalHealthImage from './assets/mental-health.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit', '/login'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showFrontPage, setShowFrontPage] = useState(true); // To control showing the front page
//   const hideHeader = useHideHeader();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     // Check login state on mount
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }

//     // Control front page visibility on certain routes
//     const hideRoutes = ['/login', '/resources', '/therapy/find', '/profile', '/profile/edit'];
//     if (hideRoutes.some(route => window.location.pathname.startsWith(route))) {
//       setShowFrontPage(false); // Hide front page
//     } else {
//       setShowFrontPage(true); // Show front page
//     }
//   }, [window.location.pathname]); // Re-run on route change

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             {/* Centered Heading and Logo */}
//             <div className="flex items-center justify-center gap-4">
//               <h1 className="text-8xl font-serif text-black relative">
//                 <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                 <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                   ZEN ZONE
//                 </span>
//               </h1>

//               {/* Logo */}
//               <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={zenZoneLogo}
//                   alt="Zen Zone Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Music Player */}
//             <div className="absolute top-4 right-4 z-10">
//               <MusicPlayer />
//             </div>

//             {/* Login/Logout Button */}
//             <div className="absolute top-20 right-4 z-20">
//               {isLoggedIn ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </header>
//         )}

//         {/* Main Content (Front Page or Routes) */}
//         {showFrontPage && (
//           <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
//             style={{ backgroundImage: 'url(../assets/hero-image.jpg)' }} // Add your image
//           >
//             <h1 className="text-5xl font-bold">Welcome to Your Mental Wellness App</h1>
//           </section>
//         )}

//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <AppContent />
//   </Router>
// );

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import MentalHealthImage from './assets/mental-health.jpg';
// import './App.css';

// // Custom Hook to Hide Header on Specific Routes
// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit', '/login'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showFrontPage, setShowFrontPage] = useState(true); // To control showing the front page
//   const hideHeader = useHideHeader();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     // Check login state on mount
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }

//     // Control front page visibility on certain routes
//     const hideRoutes = ['/login', '/resources', '/therapy/find', '/profile', '/profile/edit'];
//     if (hideRoutes.some(route => window.location.pathname.startsWith(route))) {
//       setShowFrontPage(false); // Hide front page
//     } else {
//       setShowFrontPage(true); // Show front page
//     }
//   }, [window.location.pathname]); // Re-run on route change

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Header */}
//         {!hideHeader && (
//           <header
//             className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${zenBackground})` }}
//           >
//             {/* Centered Heading and Logo */}
//             <div className="flex items-center justify-center gap-4">
//               <h1 className="text-8xl font-serif text-black relative">
//                 <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                 <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                   ZEN ZONE
//                 </span>
//               </h1>

//               {/* Logo */}
//               <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                 <img
//                   src={zenZoneLogo}
//                   alt="Zen Zone Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Music Player */}
//             <div className="absolute top-4 right-4 z-10">
//               <MusicPlayer />
//             </div>

//             {/* Login/Logout Button */}
//             <div className="absolute top-20 right-4 z-20">
//               {isLoggedIn ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => navigate('/login')}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </header>
//         )}

//         {/* Main Content (Front Page or Routes) */}
//         {showFrontPage && (
//           <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
//             style={{ backgroundImage: 'url(../assets/hero-image.jpg)' }} // Add your image
//           >
//             <h1 className="text-5xl font-bold">Welcome to Your Mental Wellness App</h1>
//           </section>
//         )}

//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <AppContent />
//   </Router>
// );

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import MentalHealthImage from './assets/mental-health.jpg';
// import './App.css';

// const useHideHeader = () => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/quiz/', '/resources/', '/therapy/find', '/profile', '/profile/edit', '/login'];
//   return hideHeaderRoutes.some((route) => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showFrontPage, setShowFrontPage] = useState(true); // State to control visibility of front page
//   const hideHeader = useHideHeader();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     setShowFrontPage(true); // Show front page when logging out
//     navigate('/');
//   };

//   const handleGoToHome = () => {
//     setShowFrontPage(true); // Show the front page when going to home
//     navigate('/');
//   };

//   // This effect controls the visibility of the front page when navigating to certain routes
//   useEffect(() => {
//     const hideRoutes = ['/login', '/quizzes', '/resources', '/therapy', '/profile', '/profile/edit', '/21days'];
//     if (hideRoutes.some(route => window.location.pathname.startsWith(route))) {
//       setShowFrontPage(false); // Hide front page when on certain routes
//     } else {
//       setShowFrontPage(true); // Show front page when on other routes
//     }
//   }, [window.location.pathname]);

//   return (
//     <div className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${zenBackground})` }}>
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />
//       <main className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
//         {/* Header */}
//         {!hideHeader && (
//           <header className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative" style={{ backgroundImage: `url(${zenBackground})` }}>
//             <div className="flex items-center justify-center gap-4">
//               <h1 className="text-8xl font-serif text-black relative">
//                 <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                 <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">ZEN ZONE</span>
//               </h1>
//               <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                 <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full rounded-full object-cover" />
//               </div>
//             </div>
//             <div className="absolute top-4 right-4 z-10">
//               <MusicPlayer />
//             </div>
//             <div className="absolute top-20 right-4 z-20">
//               {isLoggedIn ? (
//                 <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">
//                   Logout
//                 </button>
//               ) : (
//                 <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">
//                   Login
//                 </button>
//               )}
//             </div>
//           </header>
//         )}

//         {/* Main Content Below Header */}
//         {showFrontPage && (
//           <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: 'url(../assets/hero-image.jpg)' }}>
//             <h1 className="text-5xl font-bold">Welcome to Your Mental Wellness App</h1>
//             <button onClick={handleGoToHome} className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
//               Go to Home
//             </button>
//           </section>
//         )}

//         <div className="content flex-grow p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//             <Route path="/quizzes" element={<QuizPage />} />
//             <Route path="/quiz/:quizName" element={<QuizDetail />} />
//             <Route path="/resources/:resourceName" element={<ResourcePage />} />
//             <Route path="/therapy/find" element={<TherapyPage />} />
//             <Route path="/therapy/types" element={<TherapyTypes />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/profile/edit" element={<EditProfile />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-profile" element={<CreateProfile />} />
//             <Route path="/21days" element={<div>21 Days Challenge</div>} /> {/* Add your 21 Days Challenge content here */}
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <AppContent />
//   </Router>
// );

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import MentalHealthImage from './assets/mental-health.jpg';
// import './App.css';

// // Custom Hook to Hide Front Page Content on Specific Routes
// const useHidePageContent = () => {
//   const location = useLocation();
//   // We define which routes should hide the front page content
//   const hideContentRoutes = ['/login', '/profile', '/profile/edit', '/create-profile'];
//   return hideContentRoutes.some(route => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const hidePageContent = useHidePageContent();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     // Check login state on mount
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div
//       className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${zenBackground})` }}
//     >
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       {/* Main Content */}
//       <main
//         className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}
//       >
//         {/* Hide Front Page Content Based on Route */}
//         {!hidePageContent && (
//           <>
//             {/* Header */}
//             <header
//               className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${zenBackground})` }}
//             >
//               {/* Centered Heading and Logo */}
//               <div className="flex items-center justify-center gap-4">
//                 <h1 className="text-8xl font-serif text-black relative">
//                   <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                   <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                     ZEN ZONE
//                   </span>
//                 </h1>

//                 {/* Logo */}
//                 <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                   <img
//                     src={zenZoneLogo}
//                     alt="Zen Zone Logo"
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Music Player */}
//               <div className="absolute top-4 right-4 z-10">
//                 <MusicPlayer />
//               </div>

//               {/* Login/Logout Button */}
//               <div className="absolute top-20 right-4 z-20">
//                 {isLoggedIn ? (
//                   <button
//                     onClick={handleLogout}
//                     className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
//                   >
//                     Logout
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => navigate('/login')}
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
//                   >
//                     Login
//                   </button>
//                 )}
//               </div>
//             </header>

//             {/* Main Content Below Header */}
//             <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
//               style={{ backgroundImage: 'url(../assets/hero-image.jpg)' }}
//             >
//               <h1 className="text-5xl font-bold">Welcome to Your Mental Wellness App</h1>
//             </section>

//             {/* Zen Zone Section */}
//             <section className="py-16 bg-gray-100 text-center">
//               <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold mb-6">Welcome to the Zen Zone</h2>
//                 <img
//                   src={ZenZoneImage}
//                   alt="Zen Zone"
//                   className="mx-auto rounded-lg shadow-lg mb-6"
//                   style={{ width: '80%', maxWidth: '500px' }}
//                 />
//                 <p className="text-lg text-gray-700 mb-6">
//                   The Zen Zone is a peaceful space designed to help you relax, meditate, and recharge your mental health. Take time to
//                   focus on your well-being with calming activities, breathing exercises, and guided meditations.
//                 </p>
//                 <Link
//                   to="/zen-zone"
//                   className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
//                 >
//                   Explore the Zen Zone
//                 </Link>
//               </div>
//             </section>
//           </>
//         )}

//         {/* Routes Configuration */}
//         <Routes>
//           <Route path="/quiz" element={<QuizPage />} />
//           <Route path="/quiz/:topic" element={<QuizDetail />} />
//           <Route path="/resources" element={<ResourcePage />} />
//           <Route path="/therapy/find" element={<TherapyPage />} />
//           <Route path="/therapy/:type" element={<TherapyTypes />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/profile/edit" element={<EditProfile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/create-profile" element={<CreateProfile />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import MentalHealthImage from './assets/mental-health.jpg';
// import './App.css';

// const useHidePageContent = () => {
//   const location = useLocation();
//   const hideContentRoutes = ['/login', '/profile', '/profile/edit', '/create-profile'];
//   return hideContentRoutes.some(route => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const hidePageContent = useHidePageContent();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${zenBackground})` }}>
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       <main className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
//         {/* Hide Front Page Content Based on Route */}
//         {!hidePageContent && (
//           <>
//             {/* Header */}
//             <header className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative" style={{ backgroundImage: `url(${zenBackground})` }}>
//               <div className="flex items-center justify-center gap-4">
//                 <h1 className="text-8xl font-serif text-black relative">
//                   <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                   <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">ZEN ZONE</span>
//                 </h1>
//                 <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                   <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full rounded-full object-cover" />
//                 </div>
//               </div>
//               <div className="absolute top-4 right-4 z-10">
//                 <MusicPlayer />
//               </div>
//               <div className="absolute top-20 right-4 z-20">
//                 {isLoggedIn ? (
//                   <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">Logout</button>
//                 ) : (
//                   <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Login</button>
//                 )}
//               </div>
//             </header>

//             {/* Main Content Below Header */}
//             <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: 'url(../assets/hero-image.jpg)' }}>
//               <h1 className="text-5xl font-bold">Welcome to Your Mental Wellness App</h1>
//               <button onClick={() => navigate('/')} className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">Go to Home</button>
//             </section>
//           </>
//         )}

//         {/* Home Page Content: About Us, Latest News, Toll-Free Numbers, Images */}
//         <section className="py-16 bg-gray-100 text-center">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold mb-6">About Zen Zone</h2>
//             <p className="text-lg text-gray-700 mb-6">
//               Zen Zone is a space designed to promote mental wellness through relaxation exercises, mindfulness practices, and educational resources.
//             </p>
//             <img src={ZenZoneImage} alt="Zen Zone" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//             <Link to="/zen-zone" className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Explore the Zen Zone</Link>
//           </div>
//         </section>

//         <section className="py-16 bg-white text-center">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold mb-6">Latest News on Mental Health</h2>
//             <img src={LatestNewsImage} alt="Latest News" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//             <p className="text-lg text-gray-700 mb-6">
//               Stay informed with the latest developments in mental health. Join the conversation to break the stigma and prioritize wellness.
//             </p>
//             <Link to="/news" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Read More</Link>
//           </div>
//         </section>

//         <section className="py-16 bg-gray-100 text-center">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold mb-6">Toll-Free Numbers for Mental Health Support</h2>
//             <p className="text-lg text-gray-700 mb-6">If you need support, please contact one of the following toll-free helplines:</p>
//             <ul className="text-lg text-gray-700 mb-6">
//               <li>National Suicide Prevention Lifeline: 1-800-273-TALK (8255)</li>
//               <li>Crisis Text Line: Text HOME to 741741</li>
//               <li>National Helpline for Mental Health: 1-800-662-HELP (4357)</li>
//             </ul>
//           </div>
//         </section>
//       </main>

//       {/* Routes Configuration */}
//       <Routes>
//         <Route path="/" element={<h1 className="text-center text-4xl">Welcome to Zen Zone</h1>} />
//         <Route path="/quizzes" element={<QuizPage />} />
//         <Route path="/quiz/:quizName" element={<QuizDetail />} />
//         <Route path="/resources/:resourceName" element={<ResourcePage />} />
//         <Route path="/therapy/find" element={<TherapyPage />} />
//         <Route path="/therapy/types" element={<TherapyTypes />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/profile/edit" element={<EditProfile />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/create-profile" element={<CreateProfile />} />
//       </Routes>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import MentalHealthImage from './assets/mental-health.jpg';
// import './App.css';

// const useHidePageContent = () => {
//   const location = useLocation();
//   const hideContentRoutes = ['/login', '/profile', '/profile/edit', '/create-profile'];
//   return hideContentRoutes.some(route => location.pathname.startsWith(route));
// };

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const hidePageContent = useHidePageContent();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${zenBackground})` }}>
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       <main className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
//         {/* Hide Front Page Content Based on Route */}
//         {!hidePageContent && (
//           <>
//             {/* Header */}
//             <header className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative" style={{ backgroundImage: `url(${zenBackground})` }}>
//               <div className="flex items-center justify-center gap-4">
//                 <h1 className="text-8xl font-serif text-black relative">
//                   <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                   <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">ZEN ZONE</span>
//                 </h1>
//                 <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                   <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full rounded-full object-cover" />
//                 </div>
//               </div>
//               <div className="absolute top-4 right-4 z-10">
//                 <MusicPlayer />
//               </div>
//               <div className="absolute top-20 right-4 z-20">
//                 {isLoggedIn ? (
//                   <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">Logout</button>
//                 ) : (
//                   <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Login</button>
//                 )}
//               </div>
//             </header>
//           </>
//         )}

//         {/* Home Page Content: About Us, Latest News, Toll-Free Numbers, Images */}
//         <section className="py-16 bg-gray-100 text-center">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold mb-6">About Zen Zone</h2>
//             <p className="text-lg text-gray-700 mb-6">
//               Zen Zone is a space designed to promote mental wellness through relaxation exercises, mindfulness practices, and educational resources.
//             </p>
//             <img src={ZenZoneImage} alt="Zen Zone" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//             <Link to="/zen-zone" className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Explore the Zen Zone</Link>
//           </div>
//         </section>

//         <section className="py-16 bg-white text-center">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold mb-6">Latest News on Mental Health</h2>
//             <img src={LatestNewsImage} alt="Latest News" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//             <p className="text-lg text-gray-700 mb-6">
//               Stay informed with the latest developments in mental health. Join the conversation to break the stigma and prioritize wellness.
//             </p>
//             <Link to="/news" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Read More</Link>
//           </div>
//         </section>

//         <section className="py-16 bg-gray-100 text-center">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold mb-6">Toll-Free Numbers for Mental Health Support</h2>
//             <p className="text-lg text-gray-700 mb-6">If you need support, please contact one of the following toll-free helplines:</p>
//             <ul className="text-lg text-gray-700 mb-6">
//               <li>National Suicide Prevention Lifeline: 1-800-273-TALK (8255)</li>
//               <li>Crisis Text Line: Text HOME to 741741</li>
//               <li>National Helpline for Mental Health: 1-800-662-HELP (4357)</li>
//             </ul>
//           </div>
//         </section>
//       </main>

//       {/* Routes Configuration */}
//       <Routes>
//         <Route path="/quizzes" element={<QuizPage />} />
//         <Route path="/quiz/:quizName" element={<QuizDetail />} />
//         <Route path="/resources/:resourceName" element={<ResourcePage />} />
//         <Route path="/therapy/find" element={<TherapyPage />} />
//         <Route path="/therapy/types" element={<TherapyTypes />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/profile/edit" element={<EditProfile />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/create-profile" element={<CreateProfile />} />
//       </Routes>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

//more correct

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import './App.css';

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine whether to hide the home page content based on the route
//   const hideHomePageContent = ['/resources', '/therapy', '/quizzes', '/profile', '/login', '/create-profile'].some(route =>
//     location.pathname.startsWith(route)
//   );

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${zenBackground})` }}>
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       <main className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
//         {/* Show Home Page Content Only When Not in Other Routes */}
//         {!hideHomePageContent && (
//           <>
//             {/* Header */}
//             <header className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative" style={{ backgroundImage: `url(${zenBackground})` }}>
//               <div className="flex items-center justify-center gap-4">
//                 <h1 className="text-8xl font-serif text-black relative">
//                   <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                   <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">ZEN ZONE</span>
//                 </h1>
//                 <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                   <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full rounded-full object-cover" />
//                 </div>
//               </div>
//               <div className="absolute top-4 right-4 z-10">
//                 <MusicPlayer />
//               </div>
//               <div className="absolute top-20 right-4 z-20">
//                 {isLoggedIn ? (
//                   <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">Logout</button>
//                 ) : (
//                   <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Login</button>
//                 )}
//               </div>
//             </header>

//             {/* Home Page Content */}
//            {/* Home Page Content: About Us, Latest News, Toll-Free Numbers, Images */}
//         <section className="py-16 bg-gray-100 text-center">
//           <div className="container mx-auto px-6">
//             <h1 className="text-4xl font-bold mb-6">About Zen Zone</h1>
//             <h2 className="text-lg text-gray-700 mb-6">
//               Zen Zone is a space designed to promote mental wellness through mindfulness practices, and educational resources.
//               In this website u will find lots of options including the therapy,quizzez,21 days challenges and lots of usefull resources. 
//             </h2>
//             <img src={ZenZoneImage} alt="Zen Zone" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '100%', maxWidth: '500px' }} />
//             <Link to="/zen-zone" className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Explore the Zen Zone</Link>
//           </div>
//         </section>
// <section className="py-16 bg-white text-center">
//   <div className="container mx-auto px-6">
//     <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest News on Mental Health</h2>
//     <img src={LatestNewsImage} alt="Latest News" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//     <p className="text-lg text-gray-700 mb-6">
//       Stay informed with the latest developments in mental health. Join the conversation to break the stigma and prioritize wellness.
//     </p>
//     <Link to="/news" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Read More</Link>
//   </div>
// </section>


//             <section className="py-16 bg-white text-center">
//               <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold mb-6">Latest News on Mental Health</h2>
//                 <img src={LatestNewsImage} alt="Latest News" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//                 <p className="text-lg text-gray-700 mb-6">
//                   Stay informed with the latest developments in mental health. Join the conversation to break the stigma and prioritize wellness.
//                 </p>
//                 <Link to="/news" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Read More</Link>
//               </div>
//             </section>
//           </>
//         )}

//         {/* Routes Will Render Their Respective Pages */}
//         <Routes>
//           <Route path="/quizzes" element={<QuizPage />} />
//           <Route path="/quiz/:quizName" element={<QuizDetail />} />
//           <Route path="/resources/:resourceName" element={<ResourcePage />} />
//           <Route path="/therapy/find" element={<TherapyPage />} />
//           <Route path="/therapy/types" element={<TherapyTypes />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/profile/edit" element={<EditProfile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/create-profile" element={<CreateProfile />} />
//           <Route path="/" element={null} /> {/* Null route for home */}
//         </Routes>
//       </main>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

//correct
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import MentalHealthImage from './assets/mental-health.jpg';
// import ZenZone2Image from './assets/zen-zone2.jpg';
// import TipsImage from './assets/tips.jpg';
// import Tips2Image from './assets/tips2.jpg';
// import QuoteImage from './assets/quote.jpg';
// import './App.css';

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine whether to hide the home page content based on the route
//   const hideHomePageContent = ['/resources', '/therapy', '/quizzes', '/profile', '/login', '/create-profile'].some(route =>
//     location.pathname.startsWith(route)
//   );

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${zenBackground})` }}>
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       <main className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
//         {/* Show Home Page Content Only When Not in Other Routes */}
//         {!hideHomePageContent && (
//           <>
//             {/* Header */}
//             <header className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative" style={{ backgroundImage: `url(${zenBackground})` }}>
//               <div className="flex items-center justify-center gap-4">
//                 <h1 className="text-8xl font-serif text-black relative">
//                   <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                   <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">ZEN ZONE</span>
//                 </h1>
//                 <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                   <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full rounded-full object-cover" />
//                 </div>
//               </div>
//               <div className="absolute top-4 right-4 z-10">
//                 <MusicPlayer />
//               </div>
//               <div className="absolute top-20 right-4 z-20">
//                 {isLoggedIn ? (
//                   <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">Logout</button>
//                 ) : (
//                   <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Login</button>
//                 )}
//               </div>
//             </header>

//             {/* Home Page Content */}
//             <section className="py-16 bg-gray-100 text-center">
//               <div className="container mx-auto px-6">
//                 <h1 className="text-4xl font-bold mb-6">Why Zen Zone?</h1>
//                 <p className="text-lg text-gray-700 mb-6">
//                   Zen Zone was created to help individuals prioritize their mental wellness in a peaceful, user-friendly space. Our goal is to provide a comprehensive set of resources, including guided therapies, quizzes, mental health articles, and tips that inspire personal growth and well-being.
//                 </p>
//                 <img src={ZenZoneImage} alt="Zen Zone" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '100%', maxWidth: '500px' }} />
//               </div>
//             </section>

//             <section className="py-16 bg-white text-center">
//               <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Mental Health News</h2>
//                 <img src={LatestNewsImage} alt="Latest News" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '100%', maxWidth: '500px' }} />
//                 <p className="text-lg text-gray-700 mb-6">
//                   Stay informed with the latest developments in mental health. Join the conversation to break the stigma and prioritize wellness.
//                 </p>
//                 <Link to="/news" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Read More</Link>
//               </div>
//             </section>

//             <section className="py-16 bg-gray-100 text-center">
//               <div className="container mx-auto px-6">
//                 <h1 className="text-4xl font-bold mb-6">About Us</h1>
//                 <p className="text-lg text-gray-700 mb-6">
//                   Zen Zone is a space designed to promote mental wellness through mindfulness practices, and educational resources. In this website, you will find options like therapy, quizzes, 21-day challenges, and many useful resources to guide you toward a healthier mind.
//                 </p>
//                 <img src={ZenZone2Image} alt="Zen Zone" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '400px' }} />
//               </div>
//             </section>

//             <section className="py-16 bg-white text-center">
//               <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Numbers</h2>
//                 <p className="text-lg text-gray-700 mb-6">
//                   If you or someone you know is struggling with mental health, it's important to reach out. Below are some important helplines:
//                 </p>
//                 <ul className="text-lg text-gray-700 mb-6">
//                   <li>National Helpline: 1-800-123-4567</li>
//                   <li>Crisis Support: 1-800-234-5678</li>
//                   <li>Therapy Support: 1-800-345-6789</li>
//                 </ul>
//               </div>
//             </section>

//             <section className="py-16 bg-gray-100 text-center">
//               <div className="container mx-auto px-6">
//                 <h1 className="text-4xl font-bold mb-6">Purpose of the Web Application</h1>
//                 <p className="text-lg text-gray-700 mb-6">
//                   The purpose of Zen Zone is to create a safe, accessible, and informative space for people looking to improve their mental health. Whether you need guidance, resources, or a safe space to learn and grow, Zen Zone provides a variety of tools and support to help you succeed.
//                 </p>
//                 <img src={MentalHealthImage} alt="Mental Health Purpose" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//               </div>
//             </section>

//             <section className="py-16 bg-white text-center">
//               <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-gray-900 mb-6">Tips for Mental Health</h2>
//                 <div className="flex justify-center gap-6 mb-6">
//                   <div className="w-1/3">
//                     <img src={TipsImage} alt="Mental Health Tips" className="mx-auto rounded-lg shadow-md mb-4" style={{ width: '100%', maxWidth: '300px' }} />
//                     <p className="text-lg text-gray-700">Take time for yourself every day. Practice mindfulness and gratitude.</p>
//                   </div>
//                   <div className="w-1/3">
//                     <img src={Tips2Image} alt="Mental Health Tips" className="mx-auto rounded-lg shadow-md mb-4" style={{ width: '100%', maxWidth: '300px' }} />
//                     <p className="text-lg text-gray-700">Stay connected with friends and family, even when you're feeling down.</p>
//                   </div>
//                   <div className="w-1/3">
//                     <img src={QuoteImage} alt="Mental Health Quote" className="mx-auto rounded-lg shadow-md mb-4" style={{ width: '100%', maxWidth: '300px' }} />
//                     <p className="text-lg text-gray-700">Remember, mental health is just as important as physical health. Make time for both!</p>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<AppContent />} />
//       {/* Add your other routes here */}
//       <Route path="/news" element={<QuizPage />} />
//       <Route path="/quizzes" element={<QuizDetail />} />
//       <Route path="/resources" element={<ResourcePage />} />
//       <Route path="/therapy" element={<TherapyPage />} />
//       <Route path="/profile" element={<ProfilePage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/create-profile" element={<CreateProfile />} />
//       <Route path="/edit-profile" element={<EditProfile />} />
//     </Routes>
//   </Router>
// );

// export default App;
 
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import MusicPlayer from './components/MusicPlayer';
// import QuizPage from './components/QuizPage';
// import QuizDetail from './components/QuizDetail';
// import ResourcePage from './components/ResourcePage';
// import TherapyPage from './components/TherapyPage';
// import TherapyTypes from './components/TherapyTypes';
// import Login from './components/Login';
// import CreateProfile from './components/CreateProfile';
// import ProfilePage from './components/ProfilePage';
// import EditProfile from './components/EditProfile';
// import zenBackground from './assets/zen-background.png';
// import zenZoneLogo from './assets/zen_zone_logo.jpg';
// import ZenZoneImage from './assets/zen-zone.jpg';
// import LatestNewsImage from './assets/latest-news.jpg';
// import './App.css';

// const AppContent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarCompact, setIsSidebarCompact] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine whether to hide the home page content based on the route
//   const hideHomePageContent = ['/resources', '/therapy', '/quizzes', '/profile', '/login', '/create-profile'].some(route =>
//     location.pathname.startsWith(route)
//   );

//   useEffect(() => {
//     setIsSidebarCompact(true);

//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div className="app-container w-full h-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${zenBackground})` }}>
//       <Sidebar
//         isOpen={isSidebarOpen}
//         setIsOpen={setIsSidebarOpen}
//         isCompact={isSidebarCompact}
//         setIsCompact={setIsSidebarCompact}
//       />

//       <main className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
//         {/* Show Home Page Content Only When Not in Other Routes */}
//         {!hideHomePageContent && (
//           <>
//             {/* Header */}
//             <header className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 bg-cover bg-center relative" style={{ backgroundImage: `url(${zenBackground})` }}>
//               <div className="flex items-center justify-center gap-4">
//                 <h1 className="text-8xl font-serif text-black relative">
//                   <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
//                   <span className="font-serif tracking-widest bg-gradient-to-r from-black to-black bg-clip-text text-transparent">ZEN ZONE</span>
//                 </h1>
//                 <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
//                   <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full rounded-full object-cover" />
//                 </div>
//               </div>
//               <div className="absolute top-4 right-4 z-10">
//                 <MusicPlayer />
//               </div>
//               <div className="absolute top-20 right-4 z-20">
//                 {isLoggedIn ? (
//                   <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">Logout</button>
//                 ) : (
//                   <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">Login</button>
//                 )}
//               </div>
//             </header>

//             {/* Home Page Content */}
//            {/* Home Page Content: About Us, Latest News, Toll-Free Numbers, Images */}
//         <section className="py-16 bg-gray-100 text-center">
//           <div className="container mx-auto px-6">
//             <h1 className="text-4xl font-bold mb-6">About Zen Zone</h1>
//             <h2 className="text-lg text-gray-700 mb-6">
//               Zen Zone is a space designed to promote mental wellness through mindfulness practices, and educational resources.
//               In this website u will find lots of options including the therapy,quizzez,21 days challenges and lots of usefull resources. 
//             </h2>
//             <img src={ZenZoneImage} alt="Zen Zone" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '100%', maxWidth: '500px' }} />
//             <Link to="/zen-zone" className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Explore the Zen Zone</Link>
//           </div>
//         </section>
// <section className="py-16 bg-white text-center">
//   <div className="container mx-auto px-6">
//     <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest News on Mental Health</h2>
//     <img src={LatestNewsImage} alt="Latest News" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//     <p className="text-lg text-gray-700 mb-6">
//       Stay informed with the latest developments in mental health. Join the conversation to break the stigma and prioritize wellness.
//     </p>
//     <Link to="/news" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Read More</Link>
//   </div>
// </section>


//             <section className="py-16 bg-white text-center">
//               <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold mb-6">Latest News on Mental Health</h2>
//                 <img src={LatestNewsImage} alt="Latest News" className="mx-auto rounded-lg shadow-lg mb-6" style={{ width: '80%', maxWidth: '500px' }} />
//                 <p className="text-lg text-gray-700 mb-6">
//                   Stay informed with the latest developments in mental health. Join the conversation to break the stigma and prioritize wellness.
//                 </p>
//                 <Link to="/news" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Read More</Link>
//               </div>
//             </section>
//           </>
//         )}

//         {/* Routes Will Render Their Respective Pages */}
//         <Routes>
//           <Route path="/quizzes" element={<QuizPage />} />
//           <Route path="/quiz/:quizName" element={<QuizDetail />} />
//           <Route path="/resources/:resourceName" element={<ResourcePage />} />
//           <Route path="/therapy/find" element={<TherapyPage />} />
//           <Route path="/therapy/types" element={<TherapyTypes />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/profile/edit" element={<EditProfile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/create-profile" element={<CreateProfile />} />
//           <Route path="/" element={null} /> {/* Null route for home */}
//         </Routes>
//       </main>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
import Sidebar from './components/sidebar';
import MusicPlayer from './components/MusicPlayer';
import QuizPage from './components/QuizPage';
import QuizDetail from './components/QuizDetail';
import ResourcePage from './components/ResourcePage';
import TherapyPage from './components/TherapyPage';
import TherapyTypes from './components/TherapyTypes';
import Login_Page from './components/Login_Page';
import CreateProfile from './components/CreateProfile';
import DayTracker from './components/ProfilePage';
import EditProfile from './components/EditProfile';
import zenBackground from './assets/zen-background.png';
import zenZoneLogo from './assets/zen_zone_logo.jpg';
import bg2 from './assets/2.jpg';
import bg3 from './assets/3.jpg';
import bg4 from './assets/4.jpg';
import bg5 from './assets/5.jpg';
import './App.css';

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCompact, setIsSidebarCompact] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const backgroundImages = [bg2, bg3, bg4, bg5];
  const imageTexts = [
    "Discover Inner Peace",
    "Embrace Mindfulness",
    "Find Your Balance",
    "Journey to Wellness"
  ];

  const hideHomePageContent = ['/resources', '/therapy', '/quizzes', '/profile', '/login', '/create-profile'].some(route =>
    location.pathname.startsWith(route)
  );

  useEffect(() => {
    setIsSidebarCompact(true);

    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }

    // Auto-rotate background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <div className="app-container w-full h-full flex relative overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isCompact={isSidebarCompact}
        setIsCompact={setIsSidebarCompact}
      />

      <main className={`main-content flex-1 flex flex-col ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} transition-all duration-300`}>
        {!hideHomePageContent && (
          <>
            {/* Header */}
            <header className="header w-full py-6 flex items-center justify-center gap-8 px-8 bg-opacity-75 relative">
              <div className="flex items-center justify-center gap-4">
                <h1 className="text-8xl font-serif text-white relative">
                  <span className="absolute -inset-1 blur-sm opacity-30 font-serif">ZEN ZONE</span>
                  <span className="font-serif tracking-widest">ZEN ZONE</span>
                </h1>
                <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
                  <img src={zenZoneLogo} alt="Zen Zone Logo" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <MusicPlayer />
              </div>
              <div className="absolute top-20 right-4 z-20">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">
                    Logout
                  </button>
                ) : (
                  <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700">
                    Login
                  </button>
                )}
              </div>
            </header>

            {/* New Image-based Content Layout */}
            <div className="flex-1 relative">
              {backgroundImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
                    currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-6xl font-bold text-white mb-8">{imageTexts[index]}</h2>
                      <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                        Experience the journey to mental wellness through mindfulness, therapy, and self-discovery.
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Link
                          to="/therapy/find"
                          className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
                        >
                          Find Therapy
                        </Link>
                        <Link
                          to="/resources/family"
                          className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
                        >
                          Explore Resources
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <Routes>
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/quiz/:quizName" element={<QuizDetail />} />
          <Route path="/resources/:resourceName" element={<ResourcePage />} />
          <Route path="/therapy/find" element={<TherapyPage />} />
          <Route path="/therapy/types" element={<TherapyTypes />} />
          <Route path="/challenge/new" element={<DayTracker />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/login" element={<Login_Page />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/" element={null} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;