import React from "react";
import styles from "./Button.module.css";
function Button({ onClick, children, title, disabled }) {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
      children={children}
      title={title}
    >
      {children}
    </button>
  );
}

export default Button;
