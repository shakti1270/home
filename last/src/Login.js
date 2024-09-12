import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'shakti@gmail.com' && password === 'Shakti') {
      console.log('Valid login credentials');
      navigate('/', { replace: true }); // Navigate to the Home page
      console.log('Navigating to Home page');
    } else {
      console.log('Invalid login credentials');
      // handle invalid login credentials
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={()=>navigate("/Home")}>Login</button>
    </form>
  );
};

export default Login;