import React from "react";
import style from "./TestItem.module.css";

const TestItem = ({ visible, setVisible, test, number }) => {
  let rootClasses = [style.myModal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={style.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3>
            {number}. {test.name}
          </h3>
          <div>
            <strong>{test.questions1.name}</strong>
            <p>{test.questions1.answers.option1}</p>
            <p>{test.questions1.answers.optionTrue}</p>
            <p>{test.questions1.answers.option3}</p>
            <p>{test.questions1.answers.option4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestItem;
