import React from "react";
import { useState } from "react";
import style from "./LoginForm.module.css";

const LoginForm = ({admin, setAuth}) => {  
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (admin.name === login && admin.password === password) {
      setAuth(true);
    } else {
      setAuth(false)
    }
  };

  return (
    <div className={style.boxForm}>
      <h1>Administrator</h1>
      <form>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
