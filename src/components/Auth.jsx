// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Card, CardHeader, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     username: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
    
//     try {
//       const endpoint = isLogin ? '/api/v1/auth/login' : '/api/v1/auth/register';
//       const response = await axios.post(`http://localhost:5000${endpoint}`, formData);
      
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
      
//       navigate('/profile');
//     } catch (err) {
//       setError(err.response?.data?.error || 'An error occurred');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <Tabs defaultValue="login" className="w-full">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger 
//                 value="login"
//                 onClick={() => setIsLogin(true)}
//               >
//                 Login
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="register"
//                 onClick={() => setIsLogin(false)}
//               >
//                 Create Account
//               </TabsTrigger>
//             </TabsList>
            
//             <TabsContent value={isLogin ? "login" : "register"}>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {!isLogin && (
//                   <div>
//                     <label htmlFor="username">Username</label>
//                     <Input
//                       id="username"
//                       name="username"
//                       type="text"
//                       required={!isLogin}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 )}
                
//                 <div>
//                   <label htmlFor="email">Email</label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     onChange={handleChange}
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="password">Password</label>
//                   <Input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {error && (
//                   <div className="text-red-500 text-sm">{error}</div>
//                 )}

//                 <Button type="submit" className="w-full">
//                   {isLogin ? 'Sign In' : 'Create Account'}
//                 </Button>
//               </form>
//             </TabsContent>
//           </Tabs>
//         </CardHeader>
//       </Card>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = isLogin ? '/api/v1/auth/login' : '/api/v1/auth/register';
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" onClick={() => setIsLogin(true)}>
                Login
              </TabsTrigger>
              <TabsTrigger value="register" onClick={() => setIsLogin(false)}>
                Create Account
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <TabsContent value={isLogin ? 'login' : 'register'}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <Input
                  id="username"
                  name="username"
                  placeholder="Username"
                  type="text"
                  required
                  onChange={handleChange}
                />
              )}
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                required
                onChange={handleChange}
              />
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                required
                onChange={handleChange}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>
          </TabsContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
