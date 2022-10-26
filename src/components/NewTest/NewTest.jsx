import React from "react";
import classes from "../TestPost/TestItem/TestItem.module.css";

const NewTest = ({ visible, setVisible }) => {
  const rootClasses = [classes.myModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <form>
            <input type="text" placeholder="Название теста" />
            <input type="text" placeholder="Вопрос 1" />
            <button>Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTest;
