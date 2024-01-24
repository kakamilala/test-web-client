import Account from './components/Account'
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
  const baseUrl = ''; //url grpcClient
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');

  const handleLogin = (phone, pass) => {
    const authData = {
      phone : phone,
      pass : pass,
    };
    getAccounts(authData);
  };

  const getAccounts = async(authData) => {
    try{
      const response = await fetch(baseUrl + '/accounts?phone=' + authData.phone + '&pass=' + authData.pass,{
        method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    if (data.id !== 0)
    {
      await setUser(data);
      await setIsLoggedIn(true);
    }
    else
    {
      setMessage('Пользователь не найден!')
    }
    
    } catch (err)
    {
      console.error('Error:', err);
    }
    
  };

  return (
    <div>
      
      {isLoggedIn ? (
        <Account user = {user} />
      ) : (
        <>
        <LoginForm onLogin={handleLogin}/>
        <p>{message}</p>
        </>
      )}
    </div>
  );
};


export default App;
