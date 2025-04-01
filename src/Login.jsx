import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import InputField from './Components/InputField';
import Button from './Components/Button';
import './theme.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <InputField 
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <InputField
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <Button type="submit">Login</Button>
      </form>
      <SocialLogin />
    </div>
  );
}
