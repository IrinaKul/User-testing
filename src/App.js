import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/App.css';
import LoginForm from './components/LoginForm/LoginForm';

function App() {  
 const navigate = useNavigate();

  const admin = {
    name: 'Administrator',
    password: '12345'    
  }

  const setAuth = (auth) => {
    if (auth) {
      localStorage.setItem('auth', true);
      navigate('/home')    
    } else {
      alert('Неверные имя пользователя или пароль');
      localStorage.setItem('auth', false);
    }    
  }

  return (
    <div className="App">
      <LoginForm admin={admin} setAuth={setAuth}/>      
    </div>
  );
}

export default App;
