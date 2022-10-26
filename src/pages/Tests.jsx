import React, { useState } from "react";
import Header from "../components/Header/Header";
import NewTest from "../components/NewTest/NewTest";
import TestPost from "../components/TestPost/TestPost";
import testFile from "../testFile.json";
import style from "./Tests.module.css";

const Tests = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header />
      <h1>Tests</h1>
      <button className={style.newTestBtn} onClick={() => setModal(true)}>
        Создать тест
      </button>
      <NewTest visible={modal} setVisible={setModal} />
      {testFile.map((item, index) => (
        <TestPost test={item} number={index + 1} key={index + 1} />
      ))}
    </div>
  );
};

export default Tests;
