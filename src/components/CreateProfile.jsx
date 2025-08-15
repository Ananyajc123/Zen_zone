// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CreateProfile = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }

//       localStorage.setItem('token', data.token);
//       navigate('/profile');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Create your profile
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//               {error}
//             </div>
//           )}
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <input
//                 name="name"
//                 type="text"
//                 required
//                 className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 name="confirmPassword"
//                 type="password"
//                 required
//                 className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Create Account
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateProfile;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      localStorage.setItem('token', data.token);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your Profile
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          <div className="rounded-md shadow-sm space-y-4">
            <input
              name="name"
              type="text"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              name="confirmPassword"
              type="password"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
