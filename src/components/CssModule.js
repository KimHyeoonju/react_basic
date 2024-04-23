import React from "react";
import styles from "../styles/CSSModule.module.css";

const CssModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <sapn className="something">CSS Module!</sapn>
    </div>
  );
};

export default CssModule;
