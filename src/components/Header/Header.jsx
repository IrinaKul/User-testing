import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("auth", false);
    navigate("/");
  };

  return (
    <div className={style.container}>
      <header>
        <h1 className={style.title}>Admin Panel</h1>
        <button onClick={logOut}>Log Out</button>
      </header>
    </div>
  );
};

export default Header;
