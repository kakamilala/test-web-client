import React, { useState } from 'react';

const LoginForm = ({onLogin}) => {

  const [phone,setPhone] = useState('');
  const [pass,setPass] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setMessage("");
  };

  const handlePasswordChange = (event) => {
    setPass(event.target.value);
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(phone !== "" && pass !== "")
    {
      onLogin(phone, pass);
    } else if (phone === "")
    {
      setMessage("Enter the Phone!")
    }else if (pass === "")
    {
      setMessage("Enter the Password!")
    }
    
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <p>Номер телефона</p>
      <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Phone" />
      <p>Пароль</p>
      <input type="password" value={pass} onChange={handlePasswordChange} placeholder="Password" />
      <p></p>
      <button type="submit">Войти</button>
    </form>
    <p>{message}</p>
    </>
  );
};

export default LoginForm;