// import React, { useState, useEffect } from 'react';
// import { Search, MapPin, DollarSign, BookOpen } from 'lucide-react';

// const TherapyPage = () => {
//   // Sample therapist data - replace with your database/API data
//   const [therapists, setTherapists] = useState([]);
//   const [filteredTherapists, setFilteredTherapists] = useState([]);
//   const [filters, setFilters] = useState({
//     city: '',
//     priceRange: '',
//     therapyType: ''
//   });

//   // Simulated API call - replace with your actual data fetching logic
//   useEffect(() => {
//     // This would be your database scraping or API call
//     const fetchTherapists = async () => {
//       // Sample data structure
//       const data = [
//         {
//           id: 1,
//           name: "Dr. Sarah Johnson",
//           city: "New York",
//           price: 150,
//           therapyTypes: ["CBT", "Mindfulness"],
//           specialties: ["Anxiety", "Depression"],
//           experience: "15 years",
//           availability: "Mon, Wed, Fri"
//         },
//         // Add more therapist data
//       ];
//       setTherapists(data);
//       setFilteredTherapists(data);
//     };

//     fetchTherapists();
//   }, []);

//   // Filter handlers
//   const handleFilterChange = (type, value) => {
//     const newFilters = { ...filters, [type]: value };
//     setFilters(newFilters);

//     let filtered = therapists;

//     if (newFilters.city) {
//       filtered = filtered.filter(t => 
//         t.city.toLowerCase().includes(newFilters.city.toLowerCase())
//       );
//     }

//     if (newFilters.priceRange) {
//       const [min, max] = newFilters.priceRange.split('-').map(Number);
//       filtered = filtered.filter(t => t.price >= min && t.price <= max);
//     }

//     if (newFilters.therapyType) {
//       filtered = filtered.filter(t => 
//         t.therapyTypes.includes(newFilters.therapyType)
//       );
//     }

//     setFilteredTherapists(filtered);
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Filters Section */}
//       <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Find Your Therapist</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* City Filter */}
//           <div className="flex items-center space-x-2 border rounded-lg p-3">
//             <MapPin className="text-gray-400" />
//             <input
//               type="text"
//               placeholder="Filter by city..."
//               className="w-full outline-none"
//               onChange={(e) => handleFilterChange('city', e.target.value)}
//             />
//           </div>

//           {/* Price Range Filter */}
//           <div className="flex items-center space-x-2 border rounded-lg p-3">
//             <DollarSign className="text-gray-400" />
//             <select
//               className="w-full outline-none"
//               onChange={(e) => handleFilterChange('priceRange', e.target.value)}
//             >
//               <option value="">All Price Ranges</option>
//               <option value="0-100">$0 - $100</option>
//               <option value="101-200">$101 - $200</option>
//               <option value="201-300">$201 - $300</option>
//               <option value="301-1000">$301+</option>
//             </select>
//           </div>

//           {/* Therapy Type Filter */}
//           <div className="flex items-center space-x-2 border rounded-lg p-3">
//             <BookOpen className="text-gray-400" />
//             <select
//               className="w-full outline-none"
//               onChange={(e) => handleFilterChange('therapyType', e.target.value)}
//             >
//               <option value="">All Therapy Types</option>
//               <option value="CBT">Cognitive Behavioral Therapy</option>
//               <option value="Psychodynamic">Psychodynamic Therapy</option>
//               <option value="Mindfulness">Mindfulness-Based Therapy</option>
//               <option value="Humanistic">Humanistic Therapy</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Therapists List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredTherapists.map(therapist => (
//           <div key={therapist.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <h3 className="text-xl font-semibold mb-2">{therapist.name}</h3>
//             <div className="space-y-2 text-gray-600">
//               <p className="flex items-center gap-2">
//                 <MapPin size={16} />
//                 {therapist.city}
//               </p>
//               <p className="flex items-center gap-2">
//                 <DollarSign size={16} />
//                 ${therapist.price} per session
//               </p>
//               <p className="flex items-center gap-2">
//                 <BookOpen size={16} />
//                 {therapist.therapyTypes.join(", ")}
//               </p>
//             </div>
//             <div className="mt-4 pt-4 border-t">
//               <p className="text-sm text-gray-500">Specialties: {therapist.specialties.join(", ")}</p>
//               <p className="text-sm text-gray-500">Experience: {therapist.experience}</p>
//               <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TherapyPage;

import React, { useState, useEffect } from 'react';
import { Search, MapPin, DollarSign, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // For navigation to home page

const TherapyPage = () => {
  const navigate = useNavigate();
  
  // Sample therapist data
  const [therapists, setTherapists] = useState([]);
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [filters, setFilters] = useState({
    city: '',
    priceRange: '',
    therapyType: ''
  });

  // Simulated API call - replace with actual data fetching
  useEffect(() => {
    const fetchTherapists = async () => {
      const data = [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          city: "New York",
          price: 150,
          therapyTypes: ["CBT", "Mindfulness"],
          specialties: ["Anxiety", "Depression"],
          experience: "15 years",
          availability: "Mon, Wed, Fri"
        },
        // Add more therapist data here
      ];
      setTherapists(data);
      setFilteredTherapists(data);
    };

    fetchTherapists();
  }, []);

  // Filter handler function
  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);

    let filtered = therapists;

    if (newFilters.city) {
      filtered = filtered.filter(t => t.city.toLowerCase().includes(newFilters.city.toLowerCase()));
    }

    if (newFilters.priceRange) {
      const [min, max] = newFilters.priceRange.split('-').map(Number);
      filtered = filtered.filter(t => t.price >= min && t.price <= max);
    }

    if (newFilters.therapyType) {
      filtered = filtered.filter(t => t.therapyTypes.includes(newFilters.therapyType));
    }

    setFilteredTherapists(filtered);
  };

  // Navigate to home page
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div 
      className="p-6 max-w-7xl mx-auto bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${require('../assets/BackGround2.jpg')})` }}  // Set background image
    >
      {/* Filters Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Find Your Therapist</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* City Filter */}
          <div className="flex items-center space-x-2 border rounded-lg p-3">
            <MapPin className="text-gray-400" />
            <input
              type="text"
              placeholder="Filter by city..."
              className="w-full outline-none"
              onChange={(e) => handleFilterChange('city', e.target.value)}
            />
          </div>

          {/* Price Range Filter */}
          <div className="flex items-center space-x-2 border rounded-lg p-3">
            <DollarSign className="text-gray-400" />
            <select
              className="w-full outline-none"
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            >
              <option value="">All Price Ranges</option>
              <option value="0-100">$0 - $100</option>
              <option value="101-200">$101 - $200</option>
              <option value="201-300">$201 - $300</option>
              <option value="301-1000">$301+</option>
            </select>
          </div>

          {/* Therapy Type Filter */}
          <div className="flex items-center space-x-2 border rounded-lg p-3">
            <BookOpen className="text-gray-400" />
            <select
              className="w-full outline-none"
              onChange={(e) => handleFilterChange('therapyType', e.target.value)}
            >
              <option value="">All Therapy Types</option>
              <option value="CBT">Cognitive Behavioral Therapy</option>
              <option value="Psychodynamic">Psychodynamic Therapy</option>
              <option value="Mindfulness">Mindfulness-Based Therapy</option>
              <option value="Humanistic">Humanistic Therapy</option>
            </select>
          </div>
        </div>
      </div>

      {/* Therapists List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTherapists.map(therapist => (
          <div key={therapist.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{therapist.name}</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                {therapist.city}
              </p>
              <p className="flex items-center gap-2">
                <DollarSign size={16} />
                ${therapist.price} per session
              </p>
              <p className="flex items-center gap-2">
                <BookOpen size={16} />
                {therapist.therapyTypes.join(", ")}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">Specialties: {therapist.specialties.join(", ")}</p>
              <p className="text-sm text-gray-500">Experience: {therapist.experience}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
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

export default TherapyPage;
