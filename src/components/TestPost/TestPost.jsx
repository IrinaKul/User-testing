import React, { useState } from "react";
import TestItem from "./TestItem/TestItem";
import style from "./TestPost.module.css";

const TestPost = ({ test, number }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={style.post} onClick={() => setModal(!modal)}>
      <TestItem visible={modal} setVisible={setModal} test={test} number={number} />
      <div>
        <h2>
          {number}. {test.name}
        </h2>
      </div>
      <div>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default TestPost;
