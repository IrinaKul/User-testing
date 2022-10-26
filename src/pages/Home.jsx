import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import style from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const goTests = () => {
    navigate("/tests");
  };

  const goUsers = () => {
    navigate("/users");
  };

  return (
    <div>
      <Header />
      <div className={style.content}>
        <div className={style.contentBox}>
          <h1 className={style.testTitle}>Tests</h1>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/883/883039.png"}
            alt="img is here"
            className={style.testImg}
            onClick={goTests}
          />
        </div>
        <div className={style.contentBox}>
          <h1 className={style.usersTitle}>Users</h1>
          <img
            src={
              "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            }
            alt="img is here"
            className={style.userImg}
            onClick={goUsers}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
