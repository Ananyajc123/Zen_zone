import React, { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const url = isLogin
        ? 'http://localhost:5000/users/login'
        : 'http://localhost:5000/users/register';

      const reqBody = isLogin
        ? { email, password }
        : { username, email, password, phoneNo: '' };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      });

      const responseData = await response.json();

      // Debug log
      console.log('Server response:', responseData);

      if (!response.ok) {
        throw new ApiError(response.status, responseData.message || "Authentication failed");
      }

      // Clear existing storage first
      localStorage.clear();

      if (isLogin) {
        // Login response structure: { data: { user: {...}, id: '...', email: '...' } }
        const { data } = responseData;
        console.log(data)
        localStorage.setItem('userId', data.id);
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('email', data.user.email);
        if (data.user.profilePic) {
          localStorage.setItem('profilePic', data.user.profilePic);
        }
      } else {
        // Register response structure: { data: { _id: '...', username: '...', email: '...', profilePic: '...' } }
        const { data } = responseData;
        localStorage.setItem('userId', data._id);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
        if (data.profilePic) {
          localStorage.setItem('profilePic', data.profilePic);
        }
      }

      // Debug: Log stored data
      console.log('Stored data:', {
        storedUserId: localStorage.getItem('userId'),
        storedEmail: localStorage.getItem('email'),
        storedUsername: localStorage.getItem('username')
      });

      setSuccessMessage(responseData.message);

      // Clear form
      setEmail('');
      setPassword('');
      setUsername('');


    } catch (error) {
      console.error('Authentication error:', error);
      setErrorMessage(error.message || 'An error occurred during authentication');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Debug display */}
        <div className="text-xs text-gray-500">
          <pre>
            {JSON.stringify({
              storedUserId: localStorage.getItem('userId'),
              storedEmail: localStorage.getItem('email'),
              storedUsername: localStorage.getItem('username')
            }, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Register')}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setErrorMessage(null);
              setSuccessMessage(null);
              setEmail('');
              setPassword('');
              setUsername('');
            }}
            className="text-indigo-600 hover:text-indigo-500"
          >
            {isLogin ? 'Need an account? Register' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;